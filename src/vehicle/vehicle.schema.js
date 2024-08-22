// import validator class
const joi = require('joi');

const {
  condition,
  transmission,
  fuel_type,
  inspection_status,
} = require('../../config/vehicleConfig');

// add object schema
module.exports.addOneRecord = joi.object().keys({
  title: joi.string().required(),
  color: joi.string().required(),
  brand: joi.string().required(),
  model: joi.string().required(),
  yom: joi.number().required(),
  condition: joi.string().valid(condition.new, condition.used).required(),
  transmission: joi
    .string()
    .valid(transmission.auto, transmission.manual, transmission.triptonic)
    .required(),
  body_type: joi.string().required(),
  fuel_type: joi
    .string()
    .valid(
      fuel_type.petrol,
      fuel_type.diesel,
      fuel_type.gas,
      fuel_type.hybrid,
      fuel_type.electric
    )
    .required(),
  mileage: joi.number().required(),
  description: joi.string().required(),
  price: joi.number().required(),
  seller_id: joi.string().required(),
  files: joi.array().items(joi.object()), /// /Need to update.required(),
  inspection_status: joi
    .string()
    .valid(
      inspection_status.not_requested,
      inspection_status.requested,
      inspection_status.accepted,
      inspection_status.completed
    )
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
  condition: joi.string().valid(condition.new, condition.used),
  transmission: joi
    .string()
    .valid(transmission.auto, transmission.manual, transmission.triptonic),
  body_type: joi.string(),
  fuel_type: joi
    .string()
    .valid(
      fuel_type.petrol,
      fuel_type.diesel,
      fuel_type.gas,
      fuel_type.hybrid,
      fuel_type.electric
    ),
  mileage: joi.number(),
  description: joi.string(),
  price: joi.number(), // Price as a number
  seller_id: joi.string(),
  files: joi.array().items(joi.object()),
  inspection_status: joi
    .string()
    .valid(
      inspection_status.not_requested,
      inspection_status.requested,
      inspection_status.accepted,
      inspection_status.completed
    ),
  inspection_id: joi.string().optional(),
});
