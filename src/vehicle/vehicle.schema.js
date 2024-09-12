// import validator class
const joi = require('joi');

const {
  condition,
  transmission,
  fuel_type,
  inspection_status,
  located_state,
} = require('../../config/vehicleConfig');

// add object schema
module.exports.addOneRecord = joi.object().keys({
  title: joi.string().required(),
  color: joi.string().required(),
  brand: joi.string().required(),
  model: joi.string().required(),
  yom: joi.number().required(),
  condition: joi
    .string()
    .valid(condition.brand_new, condition.used, condition.reconditioned)
    .required(),
  transmission: joi
    .string()
    .valid(
      transmission.automatic,
      transmission.manual,
      transmission.triptonic,
      transmission.other
    )
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
  files: joi.array().items(joi.string()),
  inspection_status: joi
    .string()
    .valid(
      inspection_status.not_requested,
      inspection_status.requested,
      inspection_status.accepted,
      inspection_status.completed
    )
    .required(),
  address: joi.string().required(),
  state: joi
    .string()
    .valid(
      located_state.ACT,
      located_state.NSW,
      located_state.NT,
      located_state.QLD,
      located_state.SA,
      located_state.TAS,
      located_state.VIC,
      located_state.WA
    )
    .required(),
  postal_code: joi.number().required(),
});

// update object schema
module.exports.updateOneRecord = joi.object().keys({
  _id: joi.string().required(),
  title: joi.string(),
  color: joi.string(),
  brand: joi.string(),
  model: joi.string(),
  yom: joi.number(), // Year of manufacture as a number
  condition: joi
    .string()
    .valid(condition.brand_new, condition.used, condition.reconditioned),
  transmission: joi
    .string()
    .valid(
      transmission.automatic,
      transmission.manual,
      transmission.triptonic,
      transmission.other
    ),
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
  files: joi.array().items(joi.string()),
  inspection_status: joi
    .string()
    .valid(
      inspection_status.not_requested,
      inspection_status.requested,
      inspection_status.accepted,
      inspection_status.completed
    ),
  address: joi.string(),
  state: joi
    .string()
    .valid(
      located_state.ACT,
      located_state.NSW,
      located_state.NT,
      located_state.QLD,
      located_state.SA,
      located_state.TAS,
      located_state.VIC,
      located_state.WA
    ),
  postal_code: joi.number(),
});
