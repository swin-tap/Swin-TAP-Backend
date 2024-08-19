// import permission list
const { admin, seller } = require("../../config/permissionConfig").userRoles;

module.exports.permission_list = {
  card_get_all: {
    path: "/",
  },
  card_get_by_id: {
    path: "/:id",
  },
  card_save: {
    path: "/",
    granted: [admin, seller],
  },
  card_update: {
    path: "/",
    granted: [admin, seller],
  },
  card_remove: {
    path: "/:id",
    granted: [admin, seller],
  },
};
