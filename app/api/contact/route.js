import Nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const transporter = Nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.NEXT_PUBLIC_MY_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  const fullMessage =
    "Name: " + body.name + "\n\n" + "Message:\n" + body.message;

  const info = await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_MY_EMAIL,
    to: process.env.NEXT_PUBLIC_BOT_EMAIL,
    subject: body.email,
    text: fullMessage,
  });

  console.log("Message sent: %s", info.messageId);

  return new Response("OK");
}
