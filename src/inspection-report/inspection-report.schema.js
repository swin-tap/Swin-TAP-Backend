// import validator class
const joi = require("joi");
// status
const {
  not_requested,
  requested,
  assigned,
  completed,
} = require("../../config/inspectionReportConfig").status;

// add object schema
module.exports.addOneRecord = joi.object().keys({
  mechanic: joi.string(),
  seller: joi.string().required(),
  vehicle: joi.string().required(),
  inspection_time: joi.date().required(),
  additional_note: joi.string(),
  images: joi.array().items(joi.string()),
  vehicle_rego: joi.string(),
  postal_code: joi.string(),
  additional_requests: joi.array().items(joi.string()),
  checklist: joi.object().pattern(joi.string(), joi.string()),
  status: joi.string().valid(not_requested, requested, assigned, completed),
});

// cancel object schema
module.exports.cancelInspection = joi.object().keys({
  _id: joi.string().required(),
});

// generate report object schema
module.exports.generateReport = joi.object().keys({
  _id: joi.string().required(),
});

// update object schema
module.exports.updateOneRecord = joi.object().keys({
  _id: joi.string().required(),
  mechanic: joi.string(),
  vehicle: joi.string(),
  seller: joi.string(),
  inspection_time: joi.date(),
  additional_note: joi.string(),
  images: joi.array().items(joi.string()),
  vehicle_rego: joi.string(),
  postal_code: joi.string(),
  additional_requests: joi.array().items(joi.string()),
  checklist: joi.object().pattern(joi.string(), joi.string()),
  status: joi.string().valid(not_requested, requested, assigned, completed),
});
