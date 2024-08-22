// import permission list
const { admin, seller } = require('../../config/permissionConfig').userRoles;

module.exports.permission_list = {
  vehicle_get_all: {
    path: '/',
  },
  vehicle_get_by_id: {
    path: '/:id',
  },
  vehicle_save: {
    path: '/',
    granted: [admin, seller],
  },
  vehicle_update: {
    path: '/',
    granted: [admin, seller],
  },
  vehicle_remove: {
    path: '/:id',
    granted: [admin, seller],
  },
};
