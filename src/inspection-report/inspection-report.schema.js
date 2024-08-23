// import validator class
const joi = require('joi');
// status
const { not_assign, pending, completed } =
  require('../../config/inspectionReportConfig').status;

// add object schema
module.exports.addOneRecord = joi.object().keys({
  mechanic: joi.string().required(),
  vehicle: joi.string(),
  additional_note: joi.string(),
  images: joi.array().items(joi.string()),
  status: joi.string().valid(not_assign, pending, completed),
});

// update object schema
module.exports.updateOneRecord = joi.object().keys({
  _id: joi.string().required(),
  mechanic: joi.string(),
  vehicle: joi.string(),
  additional_note: joi.string(),
  images: joi.array().items(joi.string()),
  status: joi.string().valid(not_assign, pending, completed),
});
