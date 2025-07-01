import { defineConfig } from "cypress";
import nodemailer from "nodemailer";
export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        sendEmail({ emailHtml }) {
          const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
              user: "test@gmail.com",
              pass: "test",
            },
          });
          const mailOptions = {
            from: '"GM Imran" <test@gmail.com>',
            to: "test@gmail.com",
            subject: "Stickler Automation Test Result",
            html: emailHtml,
          };
          return transporter
            .sendMail(mailOptions)
            .then((info) => {
              console.log("Email sent: " + info.response);
              return null;
            })
            .catch((error) => {
              console.error("Error sending email: ", error);
              throw error;
            });
        },
      });
      return config;
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
