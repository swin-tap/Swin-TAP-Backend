// import validator Schemas
const express = require('express');
const { addOneRecord, updateOneRecord } = require('./vehicle.schema');
// import controllers
const {
  getAll,
  getOne,
  postData,
  putData,
  deleteData,
} = require('./vehicle.controller');
// import Validator class
const { validateHeader, validateBody } = require('../../validators/validator');
// Import Express
// user router
const router = express.Router();
// import permission
const {
  vehicle_get_all,
  vehicle_get_by_id,
  vehicle_save,
  vehicle_update,
  vehicle_remove,
} = require('./vehicle.permission').permission_list;

router.route(vehicle_get_all.path).get(getAll);
router
  .route(vehicle_get_all_inspection_requests.path)
  .get(validateHeader(vehicle_get_all_inspection_requests.granted), getAll);
router.route(vehicle_get_by_id.path).get(getOne);
router
  .route(vehicle_save.path)
  .post(
    validateHeader(vehicle_save.granted),
    validateBody(addOneRecord),
    postData
  );
router
  .route(vehicle_update.path)
  .put(
    validateHeader(vehicle_update.granted),
    validateBody(updateOneRecord),
    putData
  );
router
  .route(vehicle_remove.path)
  .delete(validateHeader(vehicle_remove.granted), deleteData);

module.exports = router;
