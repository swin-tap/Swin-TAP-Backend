// import repository
const repository = require('./vehicle.repository');

// import from vehicle config
const { inspection_status } = require('../../config/vehicleConfig');

/**
 * COUNT all data set
 * @input
 * @output {array}
 */
module.exports.adminCount = async (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = { is_deleted: false };
      query.inspection_status = inspection_status.completed;
      const data_inspection_completed = await repository.count(query);

      query.inspection_status = inspection_status.not_requested;
      const data_inspection_not_requested = await repository.count(query);

      query.inspection_status = inspection_status.accepted;
      const data_inspection_accepted = await repository.count(query);

      query.inspection_status = inspection_status.requested;
      const data_inspection_requested = await repository.count(query);

      if (
        (!data_inspection_completed ||
          data_inspection_completed.length === 0) &&
        (!data_inspection_not_requested ||
          data_inspection_not_requested.length === 0) &&
        (!data_inspection_accepted || data_inspection_accepted.length === 0) &&
        (!data_inspection_requested || data_inspection_requested.length === 0)
      ) {
        resolve({
          completed: 0,
          not_requested: 0,
          accepted: 0,
          requested: 0,
        });
      } else {
        resolve({
          completed: data_inspection_completed,
          not_requested: data_inspection_not_requested,
          accepted: data_inspection_accepted,
          requested: data_inspection_requested,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * GET all data set
 * @input
 * @output {array}
 */
module.exports.getAll = async (
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
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const offset = (page - 1) * limit; // For pagination
      const vehicle_model = model;
      const data = await repository.findAll({
        offset,
        limit,
        brand,
        vehicle_model,
        title,
        inspection,
        postal_code,
        sortPrice,
        sortDate,
        minPrice,
        maxPrice,
        sellerId,
      });
      if (!data || data.length == 0) {
        resolve([]);
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * GET data set with inspection_status as requested
 * @input
 * @output {array}
 */
module.exports.getAllInspectionRequests = async (
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
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const offset = (page - 1) * limit;
      const vehicle_model = model;
      const data = await repository.findAll({
        inspection_status: inspection_status.requested,
        offset,
        limit,
        brand,
        vehicle_model,
        title,
        postal_code,
        sortPrice,
        sortDate,
        minPrice,
        maxPrice,
        sellerId,
      });
      if (!data || data.length == 0) {
        resolve([]);
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * GET single object
 * @input {id}
 * @output {obj}
 */
module.exports.getById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await repository.findById({ _id: id });

      if (!data || data.length == 0) {
        reject('No data found from given id');
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * POST object
 * @input {object}
 * @output {object}
 */
module.exports.save = async (obj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await repository.save(obj);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * PUT object
 * @input {objId}
 * @output {object}
 */
module.exports.updateSingleObj = async (obj) => {
  return new Promise(async (resolve, reject) => {
    const id = obj._id;
    delete obj._id;
    try {
      const data = await repository.updateSingleObject({ _id: id }, obj);
      if (!data) {
        reject('No data found from given id');
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * DELETE object
 * @input {objId}
 * @output {object}
 */
module.exports.DeleteSingleObject = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await repository.removeObject({ _id: id });
      if (!data) {
        reject('No data found from given id');
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
