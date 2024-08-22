// import permission list
const {
  admin,
  seller,
  mechanic,
} = require("../../config/permissionConfig").userRoles;

module.exports.permission_list = {
  filesAdd: {
    path: "/",
    granted: [admin, seller, mechanic],
  },
  filesDelete: {
    path: "/:id",
    granted: [admin, seller, mechanic],
  },
};
