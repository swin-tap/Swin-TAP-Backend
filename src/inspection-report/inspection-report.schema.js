// import validator class
const joi = require("joi");
// status
const {
  not_assign,
  assigned,
  completed,
} = require("../../config/inspectionReportConfig").status;

const {
  road_worthy,
  inspection,
  simple_check,
} = require("../../config/inspectionReportConfig").additional_request;

// add object schema
module.exports.addOneRecord = joi.object().keys({
  mechanic: joi.string(),
  vehicle: joi.string(),
  inspection_time: joi.string(),
  additional_note: joi.string(),
  images: joi.array().items(joi.string()),
  vehicle_rego: joi.string(),
  postal_code: joi.string(),
  additional_requests: joi
    .array()
    .items(joi.string().valid(...[road_worthy, inspection, simple_check])),
  checklist: joi.object().pattern(joi.string(), joi.string()),
  status: joi.string().valid(not_assign, assigned, completed),
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
  inspection_time: joi.string(),
  additional_note: joi.string(),
  images: joi.array().items(joi.string()),
  vehicle_rego: joi.string(),
  postal_code: joi.string(),
  additional_requests: joi
    .array()
    .items(joi.string().valid(...[road_worthy, inspection, simple_check])),
  checklist: joi.object().pattern(joi.string(), joi.string()),
  status: joi.string().valid(not_assign, assigned, completed),
});
