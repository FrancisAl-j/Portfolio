import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "kikobilas123@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
});

export const sendEmail = async (req, res) => {
  const { name, from, message } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name field is required." });
  }

  if (!from) {
    return res.status(400).json({ message: "Email field is required." });
  }

  if (!message) {
    return res.status(400).json({ message: "Message field is required." });
  }

  try {
    const mailOptions = {
      from: "kikobilas123@gmail.com",
      to: "kikobilas123@gmail.com",
      subject: "Message from the Portfolio",
      replyTo: from,
      html: `
        <h1>Hello I'm ${name}</h1>
        <br />
        <p>${message}</p>
        <p>Email: ${from}<p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Successfully sent." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
