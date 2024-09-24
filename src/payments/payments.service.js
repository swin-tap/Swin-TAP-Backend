// import repository
const Stripe = require("stripe");
const repository = require("./payments.repository");

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// import mail service
const mailSender = require("../../mailHub/miler");
// import payment status
const { paid } = require("../../config/paymentConfig").status;

/**
 * GET all data set
 * @input
 * @output {array}
 */
module.exports.getAll = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await repository.findAll({});
      if (!data || data.length == 0) {
        resolve([]);
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * GET single object
 * @input {id}
 * @output {obj}
 */
module.exports.getById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await repository.findById({ _id: id });
      if (!data || data.length == 0) {
        reject("No data found from given id");
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * POST object
 * @input {object}
 * @output {object}
 */
module.exports.save = async (obj) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Create a product
      const product = await stripe.products.create({
        name: "Vehicle Inspection Fee with AutoAssure.me",
      });

      // Create a price for the product
      const price = await stripe.prices.create({
        unit_amount: obj.amount * 100,
        currency: obj.currency,
        product: product.id, // above created
      });

      // save to DB
      const data = await repository.save(obj);

      // Create a payment link with the price ID
      const paymentLink = await stripe.paymentLinks.create({
        line_items: [
          {
            price: price.id,
            quantity: 1,
          },
        ],
        metadata: { productId: data._id.toString() },
      });

      // return client secret to front end.
      resolve({
        productId: data._id,
        url: paymentLink.url,
      });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * PUT object
 * @input {objId}
 * @output {object}
 */
module.exports.updateSingleObj = async (obj) => {
  return new Promise(async (resolve, reject) => {
    const id = obj._id;
    delete obj._id;
    try {
      const data = await repository.updateSingleObject({ _id: id }, obj);
      if (!data) {
        reject("No data found from given id");
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Webhook update object
 * @input {objId}
 * @output {object}
 */
module.exports.webhookUpdate = async (header, obj) => {
  return new Promise(async (resolve, reject) => {
    const sig = header["stripe-signature"];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;
    let event;
    try {
      event = stripe.webhooks.constructEvent(obj, sig, endpointSecret);

      if (event.type === "payment_intent.succeeded") {
        const paymentIntent = event.data.object;
        const productId = paymentIntent.metadata.productId;
        const data = await repository.updateSingleObject(
          { _id: productId },
          { status: paid }
        );
        if (!data) {
          reject("No data found from given id");
        } else {
          await stripe.products.del(productId);
          // send email about payment
          const { payment_email, inspection_report, currency, amount } = data;
          // send email with successful payment
          await mailSender.paymentForInspection(
            payment_email,
            inspection_report,
            currency,
            amount
          );
          resolve(data);
        }
      } else {
        reject("Invalid event type");
      }
    } catch (error) {
      console.log("==============error=================");
      console.log(error);
      console.log("====================================");
      reject(error);
    }
  });
};

/**
 * DELETE object
 * @input {objId}
 * @output {object}
 */
module.exports.DeleteSingleObject = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await repository.removeObject({ _id: id });
      if (!data) {
        reject("No data found from given id");
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
