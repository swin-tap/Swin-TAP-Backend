// create router
const router = require("express").Router();
// Import body parser
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json({ limit: "50mb" }));
router.use(bodyParser.json());
router.use(
  bodyParser.text({
    limit: "50mb",
    type: "*/xml",
  })
);

// set user routes
router.use("/users", require("../src/users/users.router"));
// set card routes
router.use("/leads", require("../src/lead/lead.router"));
// set vehicle routes
router.use("/vehicle", require("../src/vehicle/vehicle.router"));
// set payment routes
router.use("/payments", require("../src/payments/payments.router"));
// set inspection report routes
router.use(
  "/inspection-report",
  require("../src/inspection-report/inspection-report.router")
);
// set image routes
router.use("/files", require("../src/file-uploader/files.router"));

module.exports = router;
