const emailConfig = {};

emailConfig.host = "smtp.gmail.com";
emailConfig.port = 587; // secure SMTP;
emailConfig.secure_connection = false; // false for TLS - as a boolean not string
emailConfig.request_auth = true; // false for TLS - as a boolean not string

emailConfig.feedbackMail = ["ksun1299.lk@gmail.com"];
emailConfig.notificationMail = ["ksun1299.lk@gmail.com"];
emailConfig.email = "ksun1299.lk@gmail.com";

emailConfig.password = "najs vccm beij vorz";
emailConfig.domains = ["gmail.com", "googlemail.com"];
emailConfig.invoiceAttachmentPath = "";

// email
emailConfig.sendgrid_api_key = process.env.SENDGRID_API_KEY;
module.exports = emailConfig;
