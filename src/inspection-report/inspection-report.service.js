// import repository
const repository = require("./inspection-report.repository");
const vehicleService = require("../vehicle/vehicle.service");
const puppeteer = require("puppeteer");
const {
  inspection_report_template,
  status,
} = require("../../config/inspectionReportConfig");
const { inspection_status } = require("../../config/vehicleConfig");

/**
 * GET all data set
 * @input
 * @output {array}
 */
module.exports.getAll = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await repository.findAll({});
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
        reject("No data found from given id");
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
 * POST object cancel vehicle inspection.
 * @input {object}
 * @output {object}
 */
module.exports.cancel = async (obj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await this.updateSingleObj({
        ...obj,
        status: "unassigned",
        mechanic: null,
      });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * POST object generate report.
 * @input {object}
 * @output {object}
 */
module.exports.generateReport = async (obj) => {
  return new Promise(async (resolve, reject) => {
    try {
      // extract inspection data
      const inspec_data = await this.getById(obj._id);

      // check for valid inspection
      if (
        inspec_data.status !== status.assigned ||
        inspec_data.status !== status.completed
      ) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // check for vehicle details
        if (inspec_data.vehicle !== undefined && inspec_data.vehicle !== null) {
          // extract vehicle details
          const { brand, model, yom, address } = inspec_data.vehicle;

          // extract inspection data
          const { vehicle_rego, inspection_time } = inspec_data;
          // mechanic details
          const { name } = inspec_data.mechanic;

          // inspection checklist
          let inspect_body = "";

          inspec_data.checklist.forEach((value, key) => {
            inspect_body = `${inspect_body}
               <div class="inspection-item">
                <div class="comments"><strong>${key}:</strong> ${value}</div>
            </div>`;
          });

          const html_body = inspection_report_template(
            brand,
            model,
            yom,
            vehicle_rego,
            inspection_time,
            name,
            address,
            inspect_body
          );

          // Set the content as HTML
          await page.setContent(html_body);

          // Generate PDF
          await page.pdf({
            path: `uploads/${obj._id}.pdf`,
            format: "A4",
          });
          await browser.close();

          // *** //
          // send email about additional note.

          resolve({
            report_path: `${process.env.SERVER_PATH}uploads/${obj._id}.pdf`,
          });
        } else {
          reject("No Vehicle assigned with inspection");
        }
      } else {
        reject("Inspection not assigned with mechanic.");
      }
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
        reject("No data found from given id");
      } else {
        // update vehicle status
        if (obj.status && data.vehicle) {
          const vehicle_update_object = {
            _id: data.vehicle,
            inspection_status:
              obj.status === status.assigned
                ? inspection_status.accepted
                : obj.status === status.completed
                ? inspection_status.completed
                : undefined,
          };

          if (vehicle_update_object.inspection_status) {
            await vehicleService.updateSingleObj(vehicle_update_object);
          }
        }

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
        reject("No data found from given id");
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
