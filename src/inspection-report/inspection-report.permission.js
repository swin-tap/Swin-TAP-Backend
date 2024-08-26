// import permission list
const { admin, mechanic } = require('../../config/permissionConfig').userRoles;

module.exports.permission_list = {
  inspection_report_get_all: {
    path: '/',
  },
  inspection_report_get_by_id: {
    path: '/:id',
  },
  inspection_report_save: {
    path: '/',
    granted: [admin, mechanic],
  },
  inspection_report_update: {
    path: '/',
    granted: [admin, mechanic],
  },
  inspection_report_remove: {
    path: '/:id',
    granted: [admin, mechanic],
  },
};
