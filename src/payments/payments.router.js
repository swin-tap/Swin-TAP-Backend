// import validator Schemas
const express = require("express");
const { addOneRecord, updateOneRecord } = require("./payments.schema");
// import controllers
const {
  getAll,
  getOne,
  postData,
  putData,
  deleteData,
} = require("./payments.controller");
// import Validator class
const { validateHeader, validateBody } = require("../../validators/validator");
// Import Express
// user router
const router = express.Router();
// import permission
const {
  payment_get_all,
  payment_get_by_id,
  payment_save,
  payment_update,
  payment_remove,
} = require("./payments.permission").permission_list;

router
  .route(payment_get_all.path)
  .get(validateHeader(payment_get_all.granted), getAll);
router.route(payment_get_by_id.path).get(getOne);
router
  .route(payment_save.path)
  .post(
    validateHeader(payment_save.granted),
    validateBody(addOneRecord),
    postData
  );
router
  .route(payment_update.path)
  .put(
    validateHeader(payment_update.granted),
    validateBody(updateOneRecord),
    putData
  );
router
  .route(payment_remove.path)
  .delete(validateHeader(payment_remove.granted), deleteData);

module.exports = router;
