// import model
const model = require('./vehicle.model');

// import from vehicle config
const { inspection_status } = require('../../config/vehicleConfig');

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
  return new Promise(async (resolve, reject) => {
    try {
      const {
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
        ...filters
      } = query; // Extract pagination and other parameters

      // Add brand, model, and title to filters if they exist, using Case-insensitive regex search
      if (brand) {
        filters.brand = { $regex: new RegExp(brand, 'i') };
      }
      if (vehicle_model) {
        filters.model = { $regex: new RegExp(vehicle_model, 'i') };
      }
      if (title) {
        filters.title = { $regex: new RegExp(title, 'i') };
      }
      if (postal_code > 0) {
        filters.postal_code = postal_code;
      }
      if (inspection) {
        filters.inspection_status = inspection_status.completed;
      }
      if (sellerId) {
        filters.seller_id = sellerId;
      }

      // Add price range to filters if minPrice, maxPrice are provided
      if (minPrice !== null || maxPrice !== null) {
        filters.price = {};
        if (minPrice !== null) {
          filters.price.$gte = minPrice; // Price greater than or equal to minPrice
        }
        if (maxPrice !== null) {
          filters.price.$lte = maxPrice; // Price less than or equal to maxPrice
        }
      }

      // check for deleted items
      filters.is_deleted = false;

      // Count the total number of matching vehicles (without pagination)
      const totalCount = await model.countDocuments(filters);

      // Fetch paginated data
      const data = await model
        .find(filters)
        .sort(sortPrice ? { price: sortPrice } : { _id: sortDate || -1 }) // Sort by _id or price in descending order (-1) or ascending order (1)
        .skip(offset) // For pagination
        .limit(limit)
        .populate({
          path: 'seller_id', // The field in Vehicle schema that refers to seller
          select: 'name email', // The fields you want to retrieve from the seller model
        })
        .populate('files');

      // Return total count and the data
      resolve({
        totalCount,
        data,
      });
    } catch (err) {
      reject(err);
    }
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
      .populate('inspection_report')
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
