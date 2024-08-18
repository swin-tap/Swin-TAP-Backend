// import permission list
const permissionList = require("../../config/permissionConfig").userRoles;

module.exports.permission_list = {
  card_get_all: {
    path: "/",
    granted: [
      permissionList.admin,
      permissionList.seller,
      permissionList.mechanic,
    ],
  },
  card_get_by_id: {
    path: "/:id",
    granted: [
      permissionList.admin,
      permissionList.seller,
      permissionList.mechanic,
    ],
  },
  card_save: {
    path: "/",
    granted: [permissionList.admin, permissionList.seller],
  },
  card_update: {
    path: "/",
    granted: [permissionList.admin, permissionList.seller],
  },
  card_remove: {
    path: "/:id",
    granted: [permissionList.admin],
  },
};
