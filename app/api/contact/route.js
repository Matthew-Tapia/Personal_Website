import Nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const transporter = Nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const fullMessage =
    "Name: " +
    body.name +
    "\n" +
    "Email: " +
    body.email +
    "\n\n" +
    "Message:\n" +
    body.message;

  const info = await transporter.sendMail({
    from: process.env.MY_EMAIL,
    to: process.env.BOT_EMAIL,
    subject: "PERSONAL WEBSITE MESSAGE",
    text: fullMessage,
  });

  console.log("Message sent: %s", info.messageId);

  return new Response("OK");
}
