// import service
const service = require('./vehicle.service');
// import response service to handle the output
const {
  customError,
  successWithData,
} = require('../../services/responseService');

// GET all data set
module.exports.getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // For pagination
    const limit = parseInt(req.query.limit) || 10; // For pagination
    const brand = req.query.brand || null; // For filtering by brand
    const model = req.query.model || null; // For filtering by model
    const title = req.query.title || null; // For filtering by title
    const inspection = req.query.inspection || false; // For filtering inspected vehicles
    const sortPrice = parseInt(req.query.sortPrice) || null; // For request custom sorting
    const postal_code = parseInt(req.query.postalCode) || null; // For filtering by postal code
    const minPrice = parseInt(req.query.minPrice) || null; // For min price
    const maxPrice = parseInt(req.query.maxPrice) || null; // For max price
    const output = await service.getAll(
      page,
      limit,
      brand,
      model,
      title,
      inspection,
      postal_code,
      sortPrice,
      minPrice,
      maxPrice
    );
    return successWithData(output, res);
  } catch (error) {
    return customError(error, res);
  }
};

// GET all data set for requested inspection
module.exports.getAllInspectionRequests = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // For pagination
    const limit = parseInt(req.query.limit) || 10; // For pagination
    const brand = req.query.brand || null; // For filtering by brand
    const model = req.query.model || null; // For filtering by model
    const title = req.query.title || null; // For filtering by title
    const sortPrice = parseInt(req.query.sortPrice) || null; // For request custom sorting
    const postal_code = parseInt(req.query.postalCode) || null; // For filtering by postal code
    const minPrice = parseInt(req.query.minPrice) || null; // For min price
    const maxPrice = parseInt(req.query.maxPrice) || null; // For max price
    const output = await service.getAllInspectionRequests(
      page,
      limit,
      brand,
      model,
      title,
      postal_code,
      sortPrice,
      minPrice,
      maxPrice
    );
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

// Delete single object
module.exports.deleteData = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log('req.params.id');
    const output = await service.DeleteSingleObject(req.params.id);
    return successWithData(output, res);
  } catch (error) {
    return customError(error, res);
  }
};
