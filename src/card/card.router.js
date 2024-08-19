// import validator Schemas
const express = require("express");
const { addOneRecord, updateOneRecord } = require("./card.schema");
// import controllers
const {
  getAll,
  getOne,
  postData,
  putData,
  deleteData,
} = require("./card.controller");
// import Validator class
const { validateHeader, validateBody } = require("../../validators/validator");
// Import Express
// user router
const router = express.Router();
// import permission
const {
  card_get_all,
  card_get_by_id,
  card_save,
  card_update,
  card_remove,
} = require("./card.permission").permission_list;

router.route(card_get_all.path).get(getAll);
router.route(card_get_by_id.path).get(getOne);
router
  .route(card_save.path)
  .post(
    validateHeader(card_save.granted),
    validateBody(addOneRecord),
    postData
  );
router
  .route(card_update.path)
  .put(
    validateHeader(card_update.granted),
    validateBody(updateOneRecord),
    putData
  );
router
  .route(card_remove.path)
  .delete(validateHeader(card_remove.granted), deleteData);

module.exports = router;
