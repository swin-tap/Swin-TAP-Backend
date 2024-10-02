// import service
const service = require("./payments.service");
// import response service to handle the output
const {
  customError,
  successWithData,
} = require("../../services/responseService");

// GET all data set
module.exports.getAll = async (req, res) => {
  try {
    const output = await service.getAll(req.query);
    return successWithData(output, res);
  } catch (error) {
    return customError(error, res);
  }
};

// GET single object
module.exports.getOne = async (req, res) => {
  try {
    const output = await service.getById(req.params.id);
    return successWithData(output, res);
  } catch (error) {
    return customError(error, res);
  }
};

// POST single object
module.exports.postData = async (req, res) => {
  try {
    const output = await service.save(req.body);
    successWithData(output, res);
  } catch (error) {
    return customError(error, res);
  }
};

// PUT single object
module.exports.putData = async (req, res) => {
  try {
    const output = await service.updateSingleObj(req.body);
    return successWithData(output, res);
  } catch (error) {
    return customError(error, res);
  }
};

// Webhook update
module.exports.webhookData = async (req, res) => {
  try {
    const output = await service.webhookUpdate(req.headers, req.body);
    return successWithData(output, res);
  } catch (error) {
    return customError(error, res);
  }
};

// Delete single object
module.exports.deleteData = async (req, res) => {
  try {
    const output = await service.DeleteSingleObject(req.params.id);
    return successWithData(output, res);
  } catch (error) {
    return customError(error, res);
  }
};
