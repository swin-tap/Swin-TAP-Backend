const templates = {};
const config = require("../config/config");

templates.welcomeEmail = function (firstName) {
  return `<table width="100%" cellpadding="0" cellspacing="0">
  <tbody><tr>
  <td style="width:100%;margin:0;padding:0;background-color:#fff" align="center">
			  <table width="100%" cellpadding="0" cellspacing="0">
				  <tbody>
					  <tr>
						  <td style="text-align:center">
							  <img width="200" style="padding: 10px" src="https://i.imgur.com/goYWLzk.jpeg">
						  </td>
					  </tr>
  
  
			  <tr>
				  <td style="width:100%;margin:0;padding:0;border-top:1px solid #edeff2;border-bottom:1px solid #edeff2;background-color:#fff" width="100%">
					  <table style="width:auto;max-width:570px;margin:0 auto;padding:0" align="center" width="570" cellpadding="0" cellspacing="0">
						  <tbody><tr>
							  <td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;padding:35px">
  
								  <h1 style="margin-top:0;color:#2f3133;font-size:19px;text-align:left">
									  Hello ${firstName}!
								  </h1>
  
  
								  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
									  Welcome to ${config.app_name}
									  <br>
									  <br>
									You have successfully created a new account in ${config.app_name}.
									
								  </p>
								  <br>
							  <br><br>
								  <p style="margin-top:10px;color:#74787e;font-size:16px;line-height:1.5em">
									  Thanks,<br>Your Friends at ${config.app_name}
								  </p>
							  </td>
						  </tr>
						  </tbody></table>
				  </td>
			  </tr>
  
  
			  <tr>
			  <td>
			  <table style="width:auto;max-width:570px;margin:0 auto;padding:0;text-align:center" align="center" width="570" cellpadding="0" cellspacing="0">
				  <tbody><tr>
					  <td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#aeaeae;padding:35px;text-align:center">
						  <p style="margin-top:0;color:#000;font-size:12px;line-height:1.5em">
							  © ${new Date().getFullYear()}
							  <a style="color:#000" href="https://autoassure.me/" target="_blank">${
                  config.app_name
                }</a>.
							  All rights reserved.
						  </p>
					  </td>
				  </tr>
				  </tbody></table>
		  </td>
			  </tr>
			  </tbody></table>
	  </td>
  </tr>
  </tbody>
  </table>`;
};

templates.passwordReset = function (first_name) {
  return `<table width="100%" cellpadding="0" cellspacing="0">
	<tbody><tr>
	<td style="width:100%;margin:0;padding:0;background-color:#fff" align="center">
				<table width="100%" cellpadding="0" cellspacing="0">
					<tbody>
						<tr>
							<td style="text-align:center">
								<img width="200" style="padding: 10px" src="https://i.imgur.com/goYWLzk.jpeg">
							</td>
						</tr>
	
	
				<tr>
					<td style="width:100%;margin:0;padding:0;border-top:1px solid #edeff2;border-bottom:1px solid #edeff2;background-color:#fff" width="100%">
						<table style="width:auto;max-width:570px;margin:0 auto;padding:0" align="center" width="570" cellpadding="0" cellspacing="0">
							<tbody><tr>
								<td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;padding:35px">
	
									<h1 style="margin-top:0;color:#2f3133;font-size:19px;text-align:left">
										Hi ${first_name},
									</h1>
	
	
									<p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
										Your password has been successfully reset.
										<br>
									</p>
	
									<br>
									<p style="margin-top:10px;color:#74787e;font-size:16px;line-height:1.5em">
										Thanks,<br>Your Friends at ${config.app_name}
									</p>
								</td>
							</tr>
							</tbody></table>
					</td>
				</tr>
	
	
				<tr>
				<td>
				<table style="width:auto;max-width:570px;margin:0 auto;padding:0;text-align:center" align="center" width="570" cellpadding="0" cellspacing="0">
					<tbody><tr>
						<td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#aeaeae;padding:35px;text-align:center">
							<p style="margin-top:0;color:#000;font-size:12px;line-height:1.5em">
								© ${new Date().getFullYear()}
								<a style="color:#000" href="https://autoassure.me/" target="_blank">${
                  config.app_name
                }</a>.
								All rights reserved.
							</p>
						</td>
					</tr>
					</tbody></table>
			</td>
				</tr>
				</tbody></table>
		</td>
	</tr>
	</tbody>
	</table>`;
};

templates.passwordForget = function (first_name, password) {
  return `<table width="100%" cellpadding="0" cellspacing="0">
	<tbody><tr>
	<td style="width:100%;margin:0;padding:0;background-color:#fff" align="center">
				<table width="100%" cellpadding="0" cellspacing="0">
					<tbody>
						<tr>
							  <td style="text-align:center">
								  <img width="200" style="padding: 10px" src="https://i.imgur.com/goYWLzk.jpeg">
							  </td>
						  </tr>
				<tr>
					<td style="width:100%;margin:0;padding:0;border-top:1px solid #edeff2;border-bottom:1px solid #edeff2;background-color:#fff" width="100%">
						<table style="width:auto;max-width:570px;margin:0 auto;padding:0" align="center" width="570" cellpadding="0" cellspacing="0">
							<tbody><tr>
								<td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;padding:35px">
	
									<h1 style="margin-top:0;color:#2f3133;font-size:19px;text-align:left">
										Hi ${first_name},
									</h1>
	
	
									<p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
										Your password has been successfully reset.
										<br>
										<br>
										New password :- ${password}
										<br>
									</p>
									<P style="margin-top:0;color:#74787e;font-size:12px;line-height:1.5em;color: red">* Don't copy spaces before and after the password</P>
	
	
									<br>
									<p style="margin-top:10px;color:#74787e;font-size:16px;line-height:1.5em">
										Thanks,<br>Your Friends at ${config.app_name}
									</p>
								</td>
							</tr>
							</tbody></table>
					</td>
				</tr>
				<tr>
				<td>
				<table style="width:auto;max-width:570px;margin:0 auto;padding:0;text-align:center" align="center" width="570" cellpadding="0" cellspacing="0">
					  <tbody><tr>
						  <td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#aeaeae;padding:35px;text-align:center">
							  <p style="margin-top:0;color:#000;font-size:12px;line-height:1.5em">
								  © ${new Date().getFullYear()}
								  <a style="color:#000" href="https://autoassure.me/" target="_blank">${
                    config.app_name
                  }</a>.
								  All rights reserved.
							  </p>
						  </td>
					  </tr>
					  </tbody></table>
			</td>
				</tr>
				</tbody></table>
		</td>
	</tr>
	</tbody>
	</table>`;
};

templates.userCreation = function (name, email, password) {
  return `<table width="100%" cellpadding="0" cellspacing="0">
	<tbody><tr>
	<td style="width:100%;margin:0;padding:0;background-color:#fff" align="center">
				<table width="100%" cellpadding="0" cellspacing="0">
					<tbody>
						<tr>
							<td style="text-align:center">
								<img width="200" src="https://i.imgur.com/goYWLzk.jpeg" />
							</td>
						</tr>
	
	
				<tr>
					<td style="width:100%;margin:0;padding:0;border-top:1px solid #edeff2;border-bottom:1px solid #edeff2;background-color:#fff" width="100%">
						<table style="width:auto;max-width:570px;margin:0 auto;padding:0" align="center" width="570" cellpadding="0" cellspacing="0">
							<tbody><tr>
								<td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;padding:35px">
	
									<h1 style="margin-top:0;color:#2f3133;font-size:19px;text-align:left">
										Hi ${name},
									</h1>
	
	
									<p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
										You have successfully registered with the ${
                      config.app_name
                    }. Use the following credentials to log in to the system. 
										<br>
										<br>
										Email :- ${email}
										<br>
										Password :- ${password}
										<br>
									</p>
									<P style="margin-top:0;color:#74787e;font-size:12px;line-height:1.5em;color: red">* Don't copy spaces before and after the password</P>

								   <br>
									  <br>
									<p style="margin-top:10px;color:#74787e;font-size:16px;line-height:1.5em">
										Thanks,<br>Your Friends at ${config.app_name}
									</p>
								</td>
							</tr>
							</tbody></table>
					</td>
				</tr>
	
	
				<tr>
				<td>
				<table style="width:auto;max-width:570px;margin:0 auto;padding:0;text-align:center" align="center" width="570" cellpadding="0" cellspacing="0">
					<tbody><tr>
						<td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#aeaeae;padding:35px;text-align:center">
							<p style="margin-top:0;color:#000;font-size:12px;line-height:1.5em">
								© ${new Date().getFullYear()}
								<a style="color:#000" href="https://autoassure.me/" target="_blank">${
                  config.app_name
                }</a>.
								All rights reserved.
							</p>
						</td>
					</tr>
					</tbody></table>
			</td>
				</tr>
				</tbody></table>
		</td>
	</tr>
	</tbody>
	</table>`;
};

templates.contactUs = function (name, email, phone, subject, message) {
  return `<table width="100%" cellpadding="0" cellspacing="0">
	<tbody>
	  <tr>
		<td style="width:100%;margin:0;padding:0;background-color:#fff" align="center">
		  <table width="100%" cellpadding="0" cellspacing="0">
			<tbody>
			  <tr>
				<td style="text-align:center">
				  <img width="200" src="https://i.imgur.com/goYWLzk.jpeg" />
				</td>
			  </tr>
  
			  <tr>
				<td
				  style="width:100%;margin:0;padding:0;border-top:1px solid #edeff2;border-bottom:1px solid #edeff2;background-color:#fff"
				  width="100%"
				>
				  <table
					style="width:auto;max-width:570px;margin:0 auto;padding:0"
					align="center"
					width="570"
					cellpadding="0"
					cellspacing="0"
				  >
					<tbody>
					  <tr>
						<td
						  style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;padding:35px"
						>
						  <h1
							style="margin-top:0;color:#2f3133;font-size:19px;text-align:left"
						  >
							Dear Support Team,
						  </h1>
  
						  <p
							style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em"
						  >
							I hope this message finds you well. I am writing to
							reach out regarding the following:
						  </p>
						  <p
							style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em"
						  >
							<strong>Full Name:</strong> ${name}<br />
							<strong>Email Address:</strong> ${email}<br />
							<strong>Phone Number:</strong> ${phone}<br />
							<strong>Subject:</strong> ${subject}
						  </p>
  
						  <p
							style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em"
						  >
							Message: <br /> ${message}
						  </p>
  
						  <p
							style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em"
						  >
							I would appreciate your time and help in resolving
							this matter and look forward to your response.
						  </p>
  
						  <br />
  
						  <p
							style="margin-top:10px;color:#74787e;font-size:16px;line-height:1.5em"
						  >
							Best regards,<br />${name}
						  </p>
						</td>
					  </tr>
					</tbody>
				  </table>
				</td>
			  </tr>
  
			  <tr>
				<td>
				  <table
					style="width:auto;max-width:570px;margin:0 auto;padding:0;text-align:center"
					align="center"
					width="570"
					cellpadding="0"
					cellspacing="0"
				  >
					<tbody>
					  <tr>
						<td
						  style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#aeaeae;padding:35px;text-align:center"
						>
						  <p
							style="margin-top:0;color:#000;font-size:12px;line-height:1.5em"
						  >
							© ${new Date().getFullYear()}
							<a
							  style="color:#000"
							  href="https://autoassure.me/"
							  target="_blank"
							  >${config.app_name}</a
							>. All rights reserved.
						  </p>
						</td>
					  </tr>
					</tbody>
				  </table>
				</td>
			  </tr>
			</tbody>
		  </table>
		</td>
	  </tr>
	</tbody>
  </table>
  `;
};

templates.additionalDetails = function (
  customerName,
  vehicleModel,
  inspectionDate,
  note,
  mechanicName
) {
  return `<table width="100%" cellpadding="0" cellspacing="0">
	<tbody>
	  <tr>
		<td style="width:100%;margin:0;padding:0;background-color:#fff" align="center">
		  <table width="100%" cellpadding="0" cellspacing="0">
			<tbody>
			  <tr>
				<td style="text-align:center">
				  <img width="200" src="https://i.imgur.com/goYWLzk.jpeg" />
				</td>
			  </tr>
			  <tr>
				<td style="width:100%;margin:0;padding:0;border-top:1px solid #edeff2;border-bottom:1px solid #edeff2;background-color:#fff" width="100%">
				  <table style="width:auto;max-width:570px;margin:0 auto;padding:0" align="center" width="570" cellpadding="0" cellspacing="0">
					<tbody>
					  <tr>
						<td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;padding:35px">
						  <h1 style="margin-top:0;color:#2f3133;font-size:19px;text-align:left">
							Dear ${customerName},
						  </h1>
						  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
							I hope you're doing well. Please find the details of your recent vehicle inspection below.
						  </p>
						  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
							<strong>Vehicle Make/Model:</strong> ${vehicleModel}<br />
							<strong>Inspection Date:</strong> ${inspectionDate}
						  </p>
						  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
							<strong>Mechanic's Note:</strong><br />
							- ${note}
						  </p>
						  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
							Please let me know if you have any questions or need further assistance.
						  </p>
						  <br />
						  <p style="margin-top:10px;color:#74787e;font-size:16px;line-height:1.5em">
							Best regards,<br />${mechanicName}<br />AutoAssure Team
						  </p>
						</td>
					  </tr>
					</tbody>
				  </table>
				</td>
			  </tr>
			  <tr>
				<td>
				  <table style="width:auto;max-width:570px;margin:0 auto;padding:0;text-align:center" align="center" width="570" cellpadding="0" cellspacing="0">
					<tbody>
					  <tr>
						<td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#aeaeae;padding:35px;text-align:center">
						  <p style="margin-top:0;color:#000;font-size:12px;line-height:1.5em">
							© ${new Date().getFullYear()} <a style="color:#000" href="https://autoassure.me/" target="_blank">${
    config.app_name
  }</a>. All rights reserved.
						  </p>
						</td>
					  </tr>
					</tbody>
				  </table>
				</td>
			  </tr>
			</tbody>
		  </table>
		</td>
	  </tr>
	</tbody>
  </table>
  `;
};

templates.inspectionCancel = function (
  customerName,
  bookingNumber,
  bookingDate
) {
  return `<table width="100%" cellpadding="0" cellspacing="0">
	<tbody>
	  <tr>
		<td style="width:100%;margin:0;padding:0;background-color:#fff" align="center">
		  <table width="100%" cellpadding="0" cellspacing="0">
			<tbody>
			  <tr>
				<td style="text-align:center">
				  <img width="200" src="https://i.imgur.com/goYWLzk.jpeg" />
				</td>
			  </tr>
			  <tr>
				<td style="width:100%;margin:0;padding:0;border-top:1px solid #edeff2;border-bottom:1px solid #edeff2;background-color:#fff" width="100%">
				  <table style="width:auto;max-width:570px;margin:0 auto;padding:0" align="center" width="570" cellpadding="0" cellspacing="0">
					<tbody>
					  <tr>
						<td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;padding:35px">
						  <h1 style="margin-top:0;color:#2f3133;font-size:19px;text-align:left">
							Dear ${customerName},
						  </h1>
						  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
							We regret to inform you that your vehicle inspection booking (Booking Number: <strong>${bookingNumber}</strong>) scheduled for <strong>${bookingDate}</strong> has been cancelled by the assigned mechanic.
						  </p>
						  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
							However, we are currently reassigning your inspection to another mechanic, and you will be notified of the new appointment soon.
						  </p>
						  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
							We apologize for any inconvenience and appreciate your patience. If you have any questions, feel free to reach out to us.
						  </p>
						  <br />
						  <p style="margin-top:10px;color:#74787e;font-size:16px;line-height:1.5em">
							Best regards,<br />AutoAssure Team
						  </p>
						</td>
					  </tr>
					</tbody>
				  </table>
				</td>
			  </tr>
			  <tr>
				<td>
				  <table style="width:auto;max-width:570px;margin:0 auto;padding:0;text-align:center" align="center" width="570" cellpadding="0" cellspacing="0">
					<tbody>
					  <tr>
						<td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#aeaeae;padding:35px;text-align:center">
						  <p style="margin-top:0;color:#000;font-size:12px;line-height:1.5em">
							© ${new Date().getFullYear()} <a style="color:#000" href="https://autoassure.me/" target="_blank">${
    config.app_name
  }</a>. All rights reserved.
						  </p>
						</td>
					  </tr>
					</tbody>
				  </table>
				</td>
			  </tr>
			</tbody>
		  </table>
		</td>
	  </tr>
	</tbody>
  </table>
  `;
};

templates.inspectionAcceptance = function (
  customerName,
  bookingNumber,
  bookingDate,
  mechanicName
) {
  return `<table width="100%" cellpadding="0" cellspacing="0">
	<tbody>
	  <tr>
		<td style="width:100%;margin:0;padding:0;background-color:#fff" align="center">
		  <table width="100%" cellpadding="0" cellspacing="0">
			<tbody>
			  <tr>
				<td style="text-align:center">
				  <img width="200" src="https://i.imgur.com/goYWLzk.jpeg" />
				</td>
			  </tr>
			  <tr>
				<td style="width:100%;margin:0;padding:0;border-top:1px solid #edeff2;border-bottom:1px solid #edeff2;background-color:#fff" width="100%">
				  <table style="width:auto;max-width:570px;margin:0 auto;padding:0" align="center" width="570" cellpadding="0" cellspacing="0">
					<tbody>
					  <tr>
						<td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;padding:35px">
						  <h1 style="margin-top:0;color:#2f3133;font-size:19px;text-align:left">
							Dear ${customerName},
						  </h1>
						  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
							We are pleased to inform you that your vehicle inspection booking (Booking Number: <strong>${bookingNumber}</strong>) scheduled for <strong>${bookingDate}</strong> has been accepted by our mechanic.
						  </p>
						  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
							Your inspection will be carried out by <strong>${mechanicName}</strong>. Please be ready for your scheduled inspection on the mentioned date.
						  </p>
						  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
							If you have any questions or need to reschedule, feel free to contact us.
						  </p>
						  <br />
						  <p style="margin-top:10px;color:#74787e;font-size:16px;line-height:1.5em">
							Best regards,<br />AutoAssure Team
						  </p>
						</td>
					  </tr>
					</tbody>
				  </table>
				</td>
			  </tr>
			  <tr>
				<td>
				  <table style="width:auto;max-width:570px;margin:0 auto;padding:0;text-align:center" align="center" width="570" cellpadding="0" cellspacing="0">
					<tbody>
					  <tr>
						<td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#aeaeae;padding:35px;text-align:center">
						  <p style="margin-top:0;color:#000;font-size:12px;line-height:1.5em">
							© ${new Date().getFullYear()} <a style="color:#000" href="https://autoassure.me/" target="_blank">${
    config.app_name
  }</a>. All rights reserved.
						  </p>
						</td>
					  </tr>
					</tbody>
				  </table>
				</td>
			  </tr>
			</tbody>
		  </table>
		</td>
	  </tr>
	</tbody>
  </table>
  `;
};

templates.paymentForInspection = function (
  bookingNumber,
  currencyType,
  paymentAmount
) {
  return `<table width="100%" cellpadding="0" cellspacing="0">
	<tbody>
	  <tr>
		<td style="width:100%;margin:0;padding:0;background-color:#fff" align="center">
		  <table width="100%" cellpadding="0" cellspacing="0">
			<tbody>
			  <tr>
				<td style="text-align:center">
				  <img width="200" src="https://i.imgur.com/goYWLzk.jpeg" />
				</td>
			  </tr>
			  <tr>
				<td style="width:100%;margin:0;padding:0;border-top:1px solid #edeff2;border-bottom:1px solid #edeff2;background-color:#fff" width="100%">
				  <table style="width:auto;max-width:570px;margin:0 auto;padding:0" align="center" width="570" cellpadding="0" cellspacing="0">
					<tbody>
					  <tr>
						<td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;padding:35px">
						  <h1 style="margin-top:0;color:#2f3133;font-size:19px;text-align:left">
							Dear Customer,
						  </h1>
						  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
							We are pleased to confirm that your payment for the vehicle inspection (Booking Number: <strong>${bookingNumber}</strong>) has been successfully processed.
						  </p>
						  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
							<strong>Payment Details:</strong><br />
							Amount Paid: ${currencyType}. ${paymentAmount} 
						  </p>
						  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
							If you have any questions or need further assistance, feel free to contact us.
						  </p>
						  <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
							Thank you for choosing AutoAssure. We appreciate your business!
						  </p>
						  <br />
						  <p style="margin-top:10px;color:#74787e;font-size:16px;line-height:1.5em">
							Best regards,<br />AutoAssure Team
						  </p>
						</td>
					  </tr>
					</tbody>
				  </table>
				</td>
			  </tr>
			  <tr>
				<td>
				  <table style="width:auto;max-width:570px;margin:0 auto;padding:0;text-align:center" align="center" width="570" cellpadding="0" cellspacing="0">
					<tbody>
					  <tr>
						<td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#aeaeae;padding:35px;text-align:center">
						  <p style="margin-top:0;color:#000;font-size:12px;line-height:1.5em">
							© ${new Date().getFullYear()} <a style="color:#000" href="https://autoassure.me/" target="_blank">${
    config.app_name
  }</a>. All rights reserved.
						  </p>
						</td>
					  </tr>
					</tbody>
				  </table>
				</td>
			  </tr>
			</tbody>
		  </table>
		</td>
	  </tr>
	</tbody>
  </table>
  `;
};

templates.remindInspection = function (
  mechanicName,
  inspectionDate,
  vehicleModel,
  inspectionLocation
) {
  return `<table width="100%" cellpadding="0" cellspacing="0">
  <tbody>
    <tr>
      <td style="width:100%;margin:0;padding:0;background-color:#fff" align="center">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td style="text-align:center">
                <img width="200" src="https://i.imgur.com/goYWLzk.jpeg" />
              </td>
            </tr>
            <tr>
              <td style="width:100%;margin:0;padding:0;border-top:1px solid #edeff2;border-bottom:1px solid #edeff2;background-color:#fff" width="100%">
                <table style="width:auto;max-width:570px;margin:0 auto;padding:0" align="center" width="570" cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr>
                      <td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;padding:35px">
                        <h1 style="margin-top:0;color:#2f3133;font-size:19px;text-align:left">
                          Hello ${mechanicName},
                        </h1>
                        <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
                          This is a reminder that you have an upcoming vehicle inspection scheduled.
                        </p>
                        <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
                          <strong>Inspection Date:</strong> ${inspectionDate}<br />
                          <strong>Vehicle Model:</strong> ${vehicleModel}<br />
                          <strong>Inspection Location:</strong> ${inspectionLocation}<br />
                        </p>
                        <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em">
                          Please make sure to arrive at the scheduled time and complete the inspection. If you have any questions, feel free to contact us.
                        </p>
                        <br />
                        <p style="margin-top:10px;color:#74787e;font-size:16px;line-height:1.5em">
                          Best regards,<br />AutoAssure Team
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table style="width:auto;max-width:570px;margin:0 auto;padding:0;text-align:center" align="center" width="570" cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr>
                      <td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#aeaeae;padding:35px;text-align:center">
                        <p style="margin-top:0;color:#000;font-size:12px;line-height:1.5em">
                          © ${new Date().getFullYear()} <a style="color:#000" href="https://autoassure.me/" target="_blank">${
    config.app_name
  }</a>. All rights reserved.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
`;
};

module.exports = templates;
