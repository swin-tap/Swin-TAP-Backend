// import service
const service = require('./vehicle.service');
const inspection_report_service = require('../inspection-report/inspection-report.service');

// object ID for mongodb
const ObjectId = require('mongodb').ObjectID;

// import response service to handle the output
const {
  customError,
  successWithData,
} = require('../../services/responseService');

const { inspection_status } = require('../../config/vehicleConfig');

// GET all data set - vehicles
module.exports.getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // For pagination
    const limit = parseInt(req.query.limit) || 10; // For pagination
    const brand = req.query.brand || null; // For filtering by brand
    const model = req.query.model || null; // For filtering by model
    const title = req.query.title || null; // For filtering by title
    const inspection = req.query.inspection || false; // For filtering inspected vehicles
    const sortPrice = parseInt(req.query.sortPrice) || null; // For request custom sorting
    const sortDate = parseInt(req.query.sortDate) || null; // For request custom sorting
    const postal_code = parseInt(req.query.postalCode) || null; // For filtering by postal code
    const minPrice = parseInt(req.query.minPrice) || null; // For min price
    const maxPrice = parseInt(req.query.maxPrice) || null; // For max price
    const sellerId = req.query.sellerId || null; // For the seller ID
    const output = await service.getAll(
      page,
      limit,
      brand,
      model,
      title,
      inspection,
      postal_code,
      sortPrice,
      sortDate,
      minPrice,
      maxPrice,
      sellerId
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
    const sortDate = parseInt(req.query.sortDate) || null; // For request custom sorting
    const postal_code = parseInt(req.query.postalCode) || null; // For filtering by postal code
    const minPrice = parseInt(req.query.minPrice) || null; // For min price
    const maxPrice = parseInt(req.query.maxPrice) || null; // For max price
    const sellerId = req.query.sellerId || null; // For the seller ID
    const output = await service.getAllInspectionRequests(
      page,
      limit,
      brand,
      model,
      title,
      postal_code,
      sortPrice,
      sortDate,
      minPrice,
      maxPrice,
      sellerId
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
module.exports.postData = (req, res) => {
  try {
    const { inspection_report, ...filteredBody } = req.body;

    // Save filteredBody first
    service
      .save(filteredBody)
      .then(async (output) => {
        // Clone the output object to change it from immutable
        const finalOutput = { ...output._doc };
        if (output.inspection_status === inspection_status.requested) {
          // Modify the vehicle field in the inspection_report
          inspection_report.vehicle = output.id;

          // Save inspection_report
          const report_output = await inspection_report_service.save(
            inspection_report
          );

          // Add report_output to finalOutput as inspection_report
          finalOutput.inspection_report = report_output;

          successWithData(finalOutput, res);
        } else {
          successWithData(output, res);
        }
      })
      .catch((error) => {
        return customError(error, res);
      });
  } catch (error) {
    return customError(error, res);
  }
};

// PUT single object
module.exports.putData = async (req, res) => {
  try {
    const { inspection_report, ...filteredBody } = req.body;

    // Update filteredBody first
    const output = await service.updateSingleObj(filteredBody);

    // Clone the output object to change it from immutable
    const finalOutput = { ...output._doc };
    console.log(finalOutput);
    if (finalOutput.inspection_status === inspection_status.requested) {
      console.log(finalOutput);
      // Update inspection_report
      const report_output =
        await inspection_report_service.updateSingleObjByVehicleId(
          inspection_report
        );
      console.log(report_output);
      // Add report_output to finalOutput as inspection_report
      finalOutput.inspection_report = report_output;
      successWithData(finalOutput, res);
    } else {
      successWithData(output, res);
    }
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
