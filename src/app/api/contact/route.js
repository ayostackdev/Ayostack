

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