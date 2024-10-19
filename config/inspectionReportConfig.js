const status = {
  not_requested: "not_requested",
  requested: "requested",
  assigned: "assigned",
  completed: "completed",
};

const additional_request = {
  road_worthy: "road worthy",
  periodical_service: "periodical_service",
};

const inspection_report_template = (
  make,
  model,
  year,
  rego,
  date,
  mechanic,
  address,
  result,
  qr
) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AUTOASSURE Vehicle Inspection Report</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
          }
          .container {
              max-width: 800px;
              margin: 20px auto;
              background-color: #fff;
              padding: 20px;
              page-break-inside: avoid;
          }
          h1 {
              text-align: center;
              color: #333;
          }
          .section {
              margin-bottom: 20px;
          }
          .section h2 {
              border-bottom: 2px solid #333;
              padding-bottom: 10px;
              margin-bottom: 10px;
              color: #555;
          }
          .section p, .section li {
              margin: 5px 0;
              line-height: 1.6;
              color: #555;
          }
          .inspection-item {
              margin: 10px 0;
              padding: 10px;
              border: 1px solid #ddd;
              border-radius: 5px;
              background-color: #f9f9f9;
              page-break-inside: avoid;
          }
          .inspection-item label {
              font-weight: bold;
              color: #333;
          }
          .inspection-item span {
              display: inline-block;
              margin-left: 10px;
          }
          .result-pass {
              color: green;
              font-weight: bold;
          }
          .result-fail {
              color: red;
              font-weight: bold;
          }
          .comments {
              margin-top: 10px;
          }
          .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 12px;
              color: #888;
              position: fixed;
              bottom: 0;
              width: 100%;
          }
          .qr-code {
              text-align: center;
              margin-top: 20px;
          }
          .qr-code img {
              width: 150px;
              height: 150px;
          }
          .header {
              display: flex;
              justify-content: center;
              align-items: center;
              padding-bottom: 0px;
              margin-bottom: 0px;
          }
          .logo {
              max-height: 50px;
          }
          .name {
              font-size: 18px;
              font-weight: bold;
          }
      </style>
  </head>
  <body>
      <div class="container">
        <div class="header">
            <img src="https://autoassure.me/images/logo.webp" alt="Logo" class="logo">
        </div>
          <h1>Vehicle Inspection Report</h1>
          <br>
          <div class="section">
              <h2>Vehicle Information</h2>
              <p><strong>Make:</strong> ${make}</p>
              <p><strong>Model:</strong> ${model}</p>
              <p><strong>Year:</strong> ${year}</p>
              <p><strong>Rego:</strong> ${rego}</p>
          </div>
          <div class="section">
              <h2>Inspection Details</h2>
              <p><strong>Inspection Date:</strong> ${date}</p>
              <p><strong>Inspector Name:</strong> ${mechanic}</p>
              <p><strong>Inspection Location:</strong> ${address}</p>
          </div>
          <div class="section">
              <h2>Inspection Results</h2>
              ${result}
          </div>
          <!-- QR Code Section -->
          <div class="qr-code">
              <img src=${qr} alt="QR Code">
          </div>
          <div class="footer">
              <p>© 2024 AUTOASSURE. All rights reserved. || <a href="https://autoassure.me" target="_blank">https://autoassure.me</a></p>
          </div>
      </div>
  </body>
  </html>`;
};

module.exports = { status, additional_request, inspection_report_template };
