// import validator class
const joi = require("joi");
// import payment status
const { paid, pending } = require("../../config/paymentConfig").status;

// add object schema
module.exports.addOneRecord = joi.object().keys({
  amount: joi.string().required(),
  currency: joi.string().required(),
  inspection_report: joi.string().required(),
  payment_email: joi.string().required(),
  status: joi.string().valid(pending),
});

// update object schema
module.exports.updateOneRecord = joi.object().keys({
  _id: joi.string().required(),
  amount: joi.string(),
  currency: joi.string(),
  inspection_report: joi.string(),
  payment_email: joi.string(),
  status: joi.string().valid(pending),
});
