// import validator Schemas
const express = require('express');
const {
  create,
  postScm,
  loginScm,
  putScm,
  contactUsSchema,
  resetPasswordScm,
  forgetPasswordScm,
} = require('./users.schema');
// import controllers
const {
  getAll,
  getOne,
  post,
  login,
  put,
  deleteObject,
  resetPassword,
  forgetPassword,
  contactUSController,
  confUser,
  createUser,
} = require('./users.controller');
// import Validator class
const { validateBody, validateHeader } = require('../../validators/validator');
// Import Express
// user router
const router = express.Router();
// import permission
const {
  users_get_by_id,
  users_get_all,
  users_save,
  users_create,
  contact_us,
  users_update,
  users_remove,
  users_login_email,
  users_confirmation,
  users_reset_password,
  users_forget_password,
} = require('./users.permission').permission_list;

// get all
router
  .route(users_get_all.path)
  .get(validateHeader(users_get_all.granted), getAll);
// get single object by id
router.route(users_get_by_id.path).get(getOne);
// post object
router.route(users_save.path).post(validateBody(postScm), post);
// create object
router
  .route(contact_us.path)
  .post(validateBody(contactUsSchema), contactUSController);
// contact us
router
  .route(users_create.path)
  .post(validateHeader(users_create.granted), validateBody(create), createUser);
// login
router.route(users_login_email.path).post(validateBody(loginScm), login);
// update object
router
  .route(users_update.path)
  .put(validateHeader(users_update.granted), validateBody(putScm), put);
// delete object
router
  .route(users_remove.path)
  .delete(validateHeader(users_remove.granted), deleteObject);
// reset password object
router
  .route(users_reset_password.path)
  .post(
    validateHeader(users_reset_password.granted),
    validateBody(resetPasswordScm),
    resetPassword
  );
// forget password object
router
  .route(users_forget_password.path)
  .post(validateBody(forgetPasswordScm), forgetPassword);
// confirm password
router.route(users_confirmation.path).get(confUser);

module.exports = router;
