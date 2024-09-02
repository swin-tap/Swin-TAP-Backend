// import validator class
const joi = require("joi");

// add object schema
module.exports.addOneRecord = joi.object().keys({
  amount: joi.string().required(),
  currency: joi.string().required(),
});

// update object schema
module.exports.updateOneRecord = joi.object().keys({
  _id: joi.string().required(),
  amount: joi.string(),
  currency: joi.string(),
});
