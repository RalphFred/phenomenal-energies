import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT!),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const subject = `Contact Form Submission - ${service || 'General Inquiry'}`;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #1e40af; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 14px; color: #6b7280;">
          <p style="margin: 0;">This message was sent from the Phenomenal Energy website contact form.</p>
          <p style="margin: 5px 0 0 0;">Timestamp: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    const textContent = `
New Contact Form Submission

Contact Details:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Service Interested In: ${service || 'Not specified'}

Message:
${message}

---
This message was sent from the Phenomenal Energy website contact form.
Timestamp: ${new Date().toLocaleString()}
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"Phenomenal Energy Contact Form" <${process.env.SMTP_USER || 'raphaelgbaorun@gmail.com'}>`,
      to: 'raphaelgbaorun@gmail.com',
      subject: subject,
      text: textContent,
      html: htmlContent,
      replyTo: email, // Allow direct reply to the customer
    });

    console.log('Email sent:', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
