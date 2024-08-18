const emailConfig = {};

emailConfig.host = "smtp.gmail.com";
emailConfig.port = 587; // secure SMTP;
emailConfig.secure_connection = false; // false for TLS - as a boolean not string
emailConfig.request_auth = true; // false for TLS - as a boolean not string

emailConfig.email = process.env.EMIAL;
emailConfig.password = process.env.EMAIL_PASSWORD;
emailConfig.domains = ["gmail.com", "googlemail.com"];
emailConfig.invoiceAttachmentPath = "";

module.exports = emailConfig;
