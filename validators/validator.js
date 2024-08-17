// import validator class
const joi = require("joi");
// import json web token library
const jwt = require("jsonwebtoken");
// import json web token secret
const formidable = require("formidable");
const fileConfig = require("../config/fileConfig");
const { secret } = require("../config");
// import response class
const response = require("../services/responseService");
// import permission class
const permission = require("../services/accessMapper");

// import formidable

// validate token
const getTokenFromHeader = (req) => {
  if (
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Token") ||
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer")
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};

/**
 * validate the API request body according to the schema defined and validate the token
 * @returns validation Status
 * @param {*} schema , header tokens
 */
module.exports.validateBodyWithToken = (schema, grantedArray) => {
  return (req, res, next) => {
    try {
      // validate the API request body according to the schema defined
      joi.validate(req.body, schema);

      // verify token and check the expiration time.
      const decoded = jwt.verify(getTokenFromHeader(req), secret);
      permission.validity(decoded.role, grantedArray);
      next();
    } catch (error) {
      return response.customError(error, res);
    }

    // verify token and check the expiration time.
    jwt.verify(getTokenFromHeader(req), secret, async (err, decoded) => {
      if (err) {
        return response.customError("Invalid Token", res);
      }
      try {
        const output = await permission.validity(decoded.role, grantedArray);
        next();
        return output;
      } catch (error) {
        return response.customError(error, res);
      }
    });
    // return result;
  };
};

/**
 * Validate the query parameters in the API request
 * @param schema
 * @returns {Function}
 */
module.exports.validateQueryParameters = (schema) => {
  return (req, res, next) => {
    try {
      const result = joi.validate(req.query, schema);
      if (result.error) {
        return response.customError(result.error.details[0].message, res);
      }
      next();
    } catch (err) {
      return response.customError(err, res);
    }
  };
};

/**
 * validate the API request body according to the schema defined
 * @returns validation Status
 @param {} schema
 */
module.exports.validateBody = function (schema) {
  return (req, res, next) => {
    // validate the API request body according to the schema defined
    const result = joi.validate(req.body, schema);
    if (result.error) {
      return response.customError(result.error.details[0].message, res);
    }
    next();
  };
};

/**
 * validate the API request header
 * @returns validation Status
 * @param grantedArray
 */
module.exports.validateHeader = (grantedArray) => {
  return (req, res, next) => {
    // eslint-disable-next-line consistent-return
    return jwt.verify(getTokenFromHeader(req), secret, async (err, decoded) => {
      if (err) {
        return response.customError("Invalid Token", res);
      }
      try {
        await permission.validity(decoded.role, grantedArray);
        next();
      } catch (error) {
        return response.customError(error, res);
      }
    });
  };
};

/**
 * validate form data
 * @returns validation Status
 * @param {*} schema
 */
module.exports.validateFormData = (schema) => async (req, res, next) => {
  const form = formidable({ multiples: true });
  const data = [];

  form.parse(req, (err, fields, files) => {
    if (err) return response.customError(err);

    if (Array.isArray(files.files)) {
      for (file of files.files) {
        data.push({
          size: file.size,
          path: file.path,
          name: file.name,
          type: file.type,
        });
      }
    } else {
      data.push({
        size: files.size,
        path: files.path,
        name: files.name,
        type: files.type,
      });
    }
  });

  const result = schema.validate({ files: data });
  if (result.error) {
    return response.customError(result.error.details[0].message, res);
  }

  next();
  return null;
};

/**
 * Validate route parameters
 * @param schema
 * @returns {function(...[*]=)}
 */
module.exports.validateRouteParameters = function (schema) {
  // eslint-disable-next-line consistent-return
  return (req, res, next) => {
    const result = schema.validate(req.params);
    if (result.error) {
      return response.customError(result.error.details[0].message, res);
    }

    next();
  };
};
