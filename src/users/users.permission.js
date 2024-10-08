// import permission list
const {
  admin,
  seller,
  mechanic,
} = require("../../config/permissionConfig").userRoles;

module.exports.permission_list = {
  users_get_all: {
    path: "/",
    granted: [admin],
  },
  count_users: {
    path: "/count",
    granted: [admin],
  },
  users_get_by_id: {
    path: "/:id",
  },
  users_save: {
    path: "/",
  },
  users_create: {
    path: "/create",
    granted: [admin],
  },
  contact_us: {
    path: "/contact-us",
  },
  users_login_email: {
    path: "/login",
  },
  users_forget_password: {
    path: "/forget-password",
  },
  users_reset_password: {
    path: "/reset-password",
    granted: [admin, seller, mechanic],
  },
  users_update: {
    path: "/",
    granted: [admin, seller, mechanic],
  },
  users_remove: {
    path: "/:id",
    granted: [admin],
  },
};
