// import validator class
const joi = require('joi');

// add object schema
module.exports.addOneRecord = joi.object().keys({
  title: joi.string().required(),
  color: joi.string().required(),
  brand: joi.string().required(),
  model: joi.string().required(),
  yom: joi.number().required(),
  condition: joi.string().valid('new', 'used').required(),
  transmission: joi.string().valid('auto', 'manual', 'triptonic').required(),
  body_type: joi.string().required(),
  fuel_type: joi
    .string()
    .valid('petrol', 'diesel', 'gas', 'hybrid', 'electric')
    .required(),
  mileage: joi.number().required(),
  description: joi.string().required(),
  price: joi.number().required(),
  seller_id: joi.string().required(),
  files: joi.array().items(Joi.object()).required(),
  inspection_status: joi
    .string()
    .valid('not_requested', 'requested', 'accepted', 'completed')
    .required(),
  inspection_id: joi.string().optional(),
});

// update object schema
module.exports.updateOneRecord = joi.object().keys({
  _id: joi.string().required(),
  title: joi.string(),
  color: joi.string(),
  brand: joi.string(),
  model: joi.string(),
  yom: joi.number(), // Year of manufacture as a number
  condition: joi.string().valid('new', 'used'),
  transmission: joi.string().valid('auto', 'manual', 'triptonic'),
  body_type: joi.string(),
  fuel_type: joi
    .string()
    .valid('petrol', 'diesel', 'gas', 'hybrid', 'electric'),
  mileage: joi.number(),
  description: joi.string(),
  price: joi.number(), // Price as a number
  seller_id: joi.string(),
  files: joi.array().items(joi.object()),
  inspection_status: joi
    .string()
    .valid('not_requested', 'requested', 'accepted', 'completed'),
  inspection_id: joi.string().optional(),
});
