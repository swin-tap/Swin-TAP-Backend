// import validator Schemas
const express = require("express");
const { addOneRecord, updateOneRecord } = require("./inspection-report.schema");
// import controllers
const {
  getAll,
  getOne,
  postData,
  putData,
  deleteData,
} = require("./inspection-report.controller");
// import Validator class
const { validateHeader, validateBody } = require("../../validators/validator");
// Import Express
// user router
const router = express.Router();
// import permission
const {
  inspection_report_get_all,
  inspection_report_get_by_id,
  inspection_report_save,
  inspection_report_update,
  inspection_report_remove,
} = require("./inspection-report.permission").permission_list;

router.route(inspection_report_get_all.path).get(getAll);
router.route(inspection_report_get_by_id.path).get(getOne);
router
  .route(inspection_report_save.path)
  .post(
    validateHeader(inspection_report_save.granted),
    validateBody(addOneRecord),
    postData
  );
router
  .route(inspection_report_update.path)
  .put(
    validateHeader(inspection_report_update.granted),
    validateBody(updateOneRecord),
    putData
  );
router
  .route(inspection_report_remove.path)
  .delete(validateHeader(inspection_report_remove.granted), deleteData);

module.exports = router;
