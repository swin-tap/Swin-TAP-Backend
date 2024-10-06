// import validator class
const joi = require("joi");

// add object schema
module.exports.addOneRecord = joi.object().keys({
  body: joi.string().required(),
  category: joi.string().required(),
  price: joi.string().required(),
});

// custom email schema
module.exports.customEmailValidations = joi.object().keys({
  toAddress: joi.string().required(),
  title: joi.string().required(),
  toName: joi.string().required(),
  body: joi.string().required(),
});

// update object schema
module.exports.updateOneRecord = joi.object().keys({
  _id: joi.string().required(),
  body: joi.string(),
  category: joi.string(),
  price: joi.string(),
});
