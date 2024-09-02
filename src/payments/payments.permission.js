// import permission list
const { admin, seller } = require("../../config/permissionConfig").userRoles;

module.exports.permission_list = {
  payment_get_all: {
    path: "/",
    granted: [admin],
  },
  payment_get_by_id: {
    path: "/:id",
  },
  payment_save: {
    path: "/",
    granted: [admin, seller],
  },
  payment_update: {
    path: "/",
    granted: [admin, seller],
  },
  payment_remove: {
    path: "/:id",
    granted: [admin, seller],
  },
};
