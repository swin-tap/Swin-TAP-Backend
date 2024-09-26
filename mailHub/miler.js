const nodemailer = require("nodemailer");
const mailConfig = require("../config/mailConfig");
const mailTemplates = require("./emailTemplate");

const mailSender = {};
const config = require("../config/config");

const transporter = nodemailer.createTransport({
  host: mailConfig.host,
  port: mailConfig.port,
  secureConnection: mailConfig.secure_connection, // false for TLS - as a boolean not string
  requiresAuth: mailConfig.request_auth,
  domains: mailConfig.domains,
  auth: {
    user: mailConfig.email,
    pass: mailConfig.password,
  },
});

mailSender.welcomeMail = function (toAddress, firstName) {
  const mailSubject = `Welcome to ${config.app_name}`;
  return setMailConfiguration(
    toAddress,
    mailSubject,
    mailTemplates.welcomeEmail(firstName)
  );
};

mailSender.userCreation = function (toAddress, name, password) {
  const mailSubject = `Welcome To ${config.app_name}`;
  return setMailConfiguration(
    toAddress,
    mailSubject,
    mailTemplates.userCreation(name, toAddress, password)
  );
};

mailSender.resetPassword = function (toAddress, first_name) {
  const mailSubject = "Password Reset";
  return setMailConfiguration(
    toAddress,
    mailSubject,
    mailTemplates.passwordReset(first_name)
  );
};

mailSender.forgetPassword = function (toAddress, first_name, password) {
  const mailSubject = "Forget Password";
  return setMailConfiguration(
    toAddress,
    mailSubject,
    mailTemplates.passwordForget(first_name, password)
  );
};

mailSender.contactUs = function (
  toAddress,
  name,
  email,
  phone,
  subject,
  message
) {
  const mailSubject = "Contact Us";
  return setMailConfiguration(
    toAddress,
    mailSubject,
    mailTemplates.contactUs(name, email, phone, subject, message)
  );
};

mailSender.inspectionAdditionalInformation = function (
  toAddress,
  customerName,
  vehicleModel,
  inspectionDate,
  note,
  mechanicName
) {
  const mailSubject = "Additional Car Repaire Required";
  return setMailConfiguration(
    toAddress,
    mailSubject,
    mailTemplates.additionalDetails(
      customerName,
      vehicleModel,
      inspectionDate,
      note,
      mechanicName
    )
  );
};

mailSender.acceptInspection = function (
  toAddress,
  customerName,
  bookingNumber,
  bookingDate,
  mechanicName
) {
  const mailSubject = "Your Inspection is Accepted by Mechanic";
  return setMailConfiguration(
    toAddress,
    mailSubject,
    mailTemplates.inspectionAcceptance(
      customerName,
      bookingNumber,
      bookingDate,
      mechanicName
    )
  );
};

mailSender.cancelInspection = function (
  toAddress,
  customerName,
  bookingNumber,
  bookingDate
) {
  const mailSubject = "Your Inspection is Cancelled";
  return setMailConfiguration(
    toAddress,
    mailSubject,
    mailTemplates.inspectionCancel(customerName, bookingNumber, bookingDate)
  );
};

mailSender.paymentForInspection = function (
  toAddress,
  bookingNumber,
  currencyType,
  paymentAmount
) {
  const mailSubject = "Succesful Payment for Inspection Booking";
  return setMailConfiguration(
    toAddress,
    mailSubject,
    mailTemplates.paymentForInspection(
      bookingNumber,
      currencyType,
      paymentAmount
    )
  );
};

/**
 * send invoice mail with attachment
 */
// mailSender.sendInvoiceAsMail = function (invoiceID, reciever, subject) {
//     var attachment = [{
//         filename: 'Invoice.pdf',
//         path: mailConfig.invoiceAttachmentPath + invoiceID
//     }]
//     return sentMailWithAttachment(reciever, subject, mailTemplates.invoiceAttachement(), attachment)
// }

/**
 * create email configuration and send mail
 * @param {*} reciever
 * @param {*} subject
 * @param {*} mailBody
 */
function setMailConfiguration(reciever, subject, mailBody) {
  // mail send with SMTP
  const mailOptions = {
    from: mailConfig.email, // sender address (who sends)
    to: reciever, // list of receivers (who receives)
    subject, // Subject line
    html: mailBody, // mail body
  };

  return transporter.sendMail(mailOptions);
}

/**
 * create email configuration and send mail with attachment
 * @param {*} receiver
 * @param {*} subject
 * @param {*} mailBody
 */
function sentMailWithAttachment(receiver, subject, mailBody, attachment) {
  const mailOptions = {
    from: mailConfig.email, // sender address (who sends)
    to: receiver, // list of receivers (who receives)
    subject, // Subject line
    html: mailBody, // mail body
    attachments: attachment,
  };
  return transporter.sendMail(mailOptions);
}

module.exports = mailSender;
