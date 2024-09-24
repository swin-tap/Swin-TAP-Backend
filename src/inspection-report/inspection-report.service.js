// import repository
const puppeteer = require("puppeteer");
const vehicleService = require("../vehicle/vehicle.service");
const repository = require("./inspection-report.repository");
const {
  inspection_report_template,
  status,
} = require("../../config/inspectionReportConfig");
const userService = require("../users/users.service");
// import mail service
const mailSender = require("../../mailHub/miler");
const { inspection_status } = require("../../config/vehicleConfig");
// QR code generator
var QRCode = require("qrcode");

// import search field append service
const appendService = require("../../services/searchFieldAppendService");

// object ID for mongodb
const ObjectId = require("mongodb").ObjectID;

/**
 * GET all data set
 * @input
 * @output {array}
 */
module.exports.getAll = async (queryParams) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = { is_deleted: false };
      // search by vehicle
      query = appendService.appendQueryParams(
        queryParams,
        "vehicle",
        query,
        true
      );
      // search by mechanic
      query = appendService.appendQueryParams(
        queryParams,
        "mechanic",
        query,
        true
      );
      // search by vehicle
      query = appendService.appendQueryParams(queryParams, "status", query);

      const data = await repository.findAll(query);
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
      const data = await repository.save(obj);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * POST object cancel vehicle inspection.
 * @input {object}
 * @output {object}
 */
module.exports.cancel = async (obj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await this.updateSingleObj({
        ...obj,
        status: "unassigned",
        mechanic: null,
      });

      // extract inspection data
      const inspec_data = await this.getById(data._id);
      // extract inspection data
      const { _id, inspection_time } = inspec_data;
      const { name, email } = inspec_data.seller;
      // send email to seller about inspection cancelation.
      await mailSender.cancelInspection(email, name, _id, inspection_time);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * POST object generate report.
 * @input {object}
 * @output {object}
 */
module.exports.generateReport = async (obj) => {
  return new Promise(async (resolve, reject) => {
    try {
      // extract inspection data
      const inspec_data = await this.getById(obj._id);

      // check for valid inspection
      if (
        inspec_data.status !== status.assigned ||
        inspec_data.status !== status.completed
      ) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // extract vehicle details
        const { brand, model, yom, address } = inspec_data.vehicle;

        // extract inspection data
        const { vehicle_rego, inspection_time } = inspec_data;
        // mechanic details
        const { name } = inspec_data.mechanic;

        // send email related to additional mechanic notes
        if (inspec_data.additional_note) {
          const sellerData = inspec_data.seller;

          await mailSender.inspectionAdditionalInformation(
            sellerData.email,
            sellerData.name,
            `${brand} ${model}`,
            inspection_time,
            inspec_data.additional_note,
            name
          );
        }

        // inspection checklist
        let inspect_body = "";

        inspec_data.checklist.forEach((value, key) => {
          inspect_body = `${inspect_body}
               <div class="inspection-item">
                <div class="comments"><strong>${key}:</strong> ${value}</div>
            </div>`;
        });

        const qrCode = await QRCode.toDataURL(
          `${process.env.SERVER_PATH}uploads/${obj._id}.pdf`
        );

        const html_body = inspection_report_template(
          brand,
          model,
          yom,
          vehicle_rego,
          inspection_time,
          name,
          address,
          inspect_body,
          qrCode
        );

        // Set the content as HTML
        await page.setContent(html_body);

        // Generate PDF
        await page.pdf({
          path: `uploads/${obj._id}.pdf`,
          format: "A4",
        });
        await browser.close();

        // *** //
        // send email about additional note.

        resolve({
          report_path: `${process.env.SERVER_PATH}uploads/${obj._id}.pdf`,
        });
      } else {
        reject("Inspection not assigned with mechanic.");
      }
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
        // check for inspection status update
        if (obj.status && obj.status === status.assigned) {
          if (data.mechanic) {
            // extract inspection data
            const inspec_data = await this.getById(id);
            // extract inspection data
            const { inspection_time } = inspec_data;
            const { seller } = inspec_data;
            const { mechanic } = inspec_data;
            // send email to seller about inspection acceptance.
            await mailSender.acceptInspection(
              seller.email,
              seller.name,
              id,
              inspection_time,
              mechanic.name
            );
          }
        }
        // update vehicle status
        if (obj.status && data.vehicle) {
          const vehicle_update_object = {
            _id: data.vehicle,
            inspection_status:
              obj.status === status.assigned
                ? inspection_status.accepted
                : obj.status === status.completed
                ? inspection_status.completed
                : undefined,
          };

          if (vehicle_update_object.inspection_status) {
            await vehicleService.updateSingleObj(vehicle_update_object);
          }
        }

        resolve(data);
      }
    } catch (error) {
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
