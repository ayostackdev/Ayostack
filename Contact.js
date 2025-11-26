/*   
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    // 1. Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your App Password
      },
    });

    // 2. Create email options
    const mailOptions = {
      from: email, // sender (visitor’s email)
      to: process.env.EMAIL_USER, // your Gmail (receiver)
      subject: `Message from ${name}`,
      text: message,
    };

    // 3. Send mail
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully ✅" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Error sending email ❌" });
  }
}

*/






/*    

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // 1. Validation: Ensure fields are present
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Must be an App Password, not your login password
      },
    });

    const mailOptions = {
      // FIX 1: The 'from' must match your authenticated email
      from: process.env.EMAIL_USER, 
      
      // FIX 2: Use 'replyTo' so when you hit reply, it goes to the visitor
      replyTo: email,
      
      to: process.env.EMAIL_USER, 
      subject: `New Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      // Optional: Add HTML for a better look
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully ✅" });
  } catch (error) {
    console.error("Email Error:", error);
    return res.status(500).json({ success: false, message: "Error sending email ❌" });
  }
}

*/

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // 1. Parse the incoming JSON (App Router specific)
    const { name, email, message } = await req.json();

    // 2. Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" }, 
        { status: 400 }
      );
    }

    // 3. Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 4. Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender: You
      to: process.env.EMAIL_USER,   // Receiver: You
      replyTo: email,               // Reply to: The Visitor
      subject: `New Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully ✅" }, 
      { status: 200 }
    );

  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { success: false, message: "Error sending email ❌" }, 
      { status: 500 }
    );
  }
}