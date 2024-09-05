// import validator class
const joi = require('joi');
// import permission list
const { seller, mechanic, admin } =
  require('../../config/permissionConfig').userRoles;

// add object schema
module.exports.postScm = joi.object().keys({
  name: joi.string().required(),
  address: joi.string(),
  password: joi.string().required(),
  email: joi.string().required(),
  phone: joi.string(),
  role: joi.string().valid(seller, mechanic, admin),
  identity_verification_documents: joi.array().items(joi.string()),
  skill_verification_documents: joi.array().items(joi.string()),
  image: joi.string(),
});

// create object schema
module.exports.create = joi.object().keys({
  name: joi.string().required(),
  address: joi.string(),
  email: joi.string().required(),
  role: joi.string().valid(seller, mechanic, admin),
  identity_verification_documents: joi.array().items(joi.string()),
  skill_verification_documents: joi.array().items(joi.string()),
  image: joi.string(),
});

// create object schema
module.exports.contactUsSchema = joi.object().keys({
  name: joi.string().required(),
  email: joi.string().required(),
  phone: joi.string().required(),
  subject: joi.string().required(),
  message: joi.string().required(),
});

// update object schema
module.exports.putScm = joi.object().keys({
  _id: joi.string().required().max(24).min(24),
  name: joi.string(),
  address: joi.string(),
  password: joi.string(),
  email: joi.string(),
  phone: joi.string(),
  role: joi.string().valid(seller, mechanic, admin),
  identity_verification_documents: joi.array().items(joi.string()),
  skill_verification_documents: joi.array().items(joi.string()),
  image: joi.string(),
});

// login
module.exports.loginScm = joi.object().keys({
  password: joi.string(),
  email: joi.string(),
});

// reset password
module.exports.resetPasswordScm = joi.object().keys({
  email: joi.string().required(),
  new_password: joi.string().required(),
  password: joi.string().required(),
});

// forget password
module.exports.forgetPasswordScm = joi.object().keys({
  email: joi.string().required(),
});
