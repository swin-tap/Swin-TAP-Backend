// import model
const model = require('./vehicle.model');

// count
module.exports.count = (query) => {
  return new Promise((resolve, reject) => {
    model
      .count(query)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// find all
module.exports.findAll = (query) => {
  return new Promise((resolve, reject) => {
    const { offset, limit, ...filters } = query; // Extract offset and limit, and remove them from the query object and Separate filters from pagination parameters
    model
      .find(filters)
      .skip(offset) // For pagination
      .limit(limit)
      .populate({
        path: 'seller_id', // The field in Vehicle schema that refers to seller
        select: 'name email', // The fields you want to retrieve from the seller model
      })
      .populate('files')
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// get By Id
module.exports.findById = (query) => {
  return new Promise((resolve, reject) => {
    model
      .findById(query)
      .populate({
        path: 'seller_id', // The field in Vehicle schema that refers to seller
        select: 'name email', // The fields you want to retrieve from the seller model
      })
      .populate('files')
      .then((data) => {
        resolve(data);
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// save object
module.exports.save = (obj) => {
  return new Promise((resolve, reject) => {
    new model(obj)
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// update object
module.exports.updateSingleObject = (query, obj) => {
  return new Promise((resolve, reject) => {
    model
      .findByIdAndUpdate(query, obj, { new: true, safe: true })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// remove object
module.exports.removeObject = (query) => {
  return new Promise((resolve, reject) => {
    model
      .findByIdAndDelete(query)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
