const cron = require("node-cron");

// import service
const inspectionRepository = require("../src/inspection-report/inspection-report.repository");

//email
const mailer = require("../mailHub/miler");

module.exports.sendReminderEmail = () => {
  cron.schedule("0 0 * * *", async () => {
    try {
      const oneDayLater = new Date();
      oneDayLater.setDate(oneDayLater.getDate() + 1);
      const sData = new Date(oneDayLater.setHours(0, 0, 0, 0));
      const eDate = new Date(oneDayLater.setHours(23, 59, 59, 999));

      // Find inspections where inspection_time is exactly 24 hours away
      const upcomingInspections = await inspectionRepository.findAll({
        inspection_time: {
          $gte: sData, // Start of the day, 24 hours later
          $lt: eDate, // End of the same day
        },
      });

      if (upcomingInspections && upcomingInspections.length > 0) {
        // Send an email to each assigned mechanic
        for (const inspection of upcomingInspections) {
          const { vehicle, mechanic, inspection_time } = inspection;
          await mailer.inspectionReminder(
            mechanic.email,
            mechanic.name,
            new Date(inspection_time).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
            vehicle.title,
            vehicle.address
          );
        }
      }
    } catch (error) {
      console.error("Error fetching inspections: ", error);
    }
  });
};
