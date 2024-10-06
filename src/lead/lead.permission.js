// import permission list
const { admin, seller } = require("../../config/permissionConfig").userRoles;

module.exports.permission_list = {
  lead_get_all: {
    path: "/",
  },
  lead_get_by_id: {
    path: "/:id",
  },
  lead_custom_email: {
    path: "/custom-email",
    granted: [admin],
  },
  lead_save: {
    path: "/",
    granted: [admin, seller],
  },
  lead_update: {
    path: "/",
    granted: [admin, seller],
  },
  lead_remove: {
    path: "/:id",
    granted: [admin, seller],
  },
};
