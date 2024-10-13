// import model
const model = require('./inspection-report.model');

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
    model
      .find(query)
      .populate('mechanic')
      .populate('seller')
      .populate({
        path: 'vehicle',
        populate: {
          path: 'files', // Populating files inside vehicle
          select: 'new_filename', // select specific fields
          options: { limit: 1 }, // Limit the population to only the first item
        },
      })
      .populate('images')
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
      .populate('mechanic')
      .populate('seller')
      .populate('vehicle')
      .populate('images')
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
