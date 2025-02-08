import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Set this in your .env file
      pass: process.env.EMAIL_PASS, // Set this in your .env file
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Admin Email
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to send email" }), { status: 500 });
  }
}
