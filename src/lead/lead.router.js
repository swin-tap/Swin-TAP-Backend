// import validator Schemas
const express = require("express");
const {
  addOneRecord,
  updateOneRecord,
  customEmailValidations,
} = require("./lead.schema");
// import controllers
const {
  getAll,
  getOne,
  postData,
  putData,
  deleteData,
  postEmailData,
} = require("./lead.controller");
// import Validator class
const { validateHeader, validateBody } = require("../../validators/validator");
// Import Express
// user router
const router = express.Router();
// import permission
const {
  lead_get_all,
  lead_get_by_id,
  lead_save,
  lead_update,
  lead_remove,
  lead_custom_email,
} = require("./lead.permission").permission_list;

router.route(lead_get_all.path).get(getAll);
router.route(lead_get_by_id.path).get(getOne);
router
  .route(lead_save.path)
  .post(
    validateHeader(lead_save.granted),
    validateBody(addOneRecord),
    postData
  );
router
  .route(lead_custom_email.path)
  .post(
    validateHeader(lead_custom_email.granted),
    validateBody(customEmailValidations),
    postEmailData
  );
router
  .route(lead_update.path)
  .put(
    validateHeader(lead_update.granted),
    validateBody(updateOneRecord),
    putData
  );
router
  .route(lead_remove.path)
  .delete(validateHeader(lead_remove.granted), deleteData);

module.exports = router;
