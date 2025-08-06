import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // false for STARTTLS (port 587)
  requireTLS: true, // ensure STARTTLS is used
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false // allow self-signed certs if needed
  }
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, eventType, eventDate, message } = body

    // Validate required fields
    if (!name || !email || !eventType || !message /* || !phone */) {
      return NextResponse.json(
        { error: 'Missing required fields. Please fill in all required fields.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // Test connection
    try {
      await transporter.verify()
    } catch (error) {
      console.error('SMTP connection failed:', error)
      let errorMsg = 'Email service is currently unavailable. Please try again later.'
      if (error && error.code === 'ETIMEDOUT') {
        errorMsg = 'SMTP connection timed out. Please check your SMTP host, port, and network/firewall settings.'
      } else if (error && error.code === 'ECONNREFUSED') {
        errorMsg = 'SMTP connection refused. Please check your SMTP server and port.'
      }
      return NextResponse.json(
        { error: errorMsg },
        { status: 500 }
      )
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `🎯 New Booking Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #3D0066 0%, #FFD700 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🎯 New Booking Request</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Obinna Events - Direct Booking</p>
          </div>

          <div style="background-color: white; padding: 30px;">
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3D0066;">
              <h3 style="margin-top: 0; color: #3D0066; font-size: 18px;">👤 Contact Information</h3>
              <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3D0066; text-decoration: none;">${email}</a></p>
              <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #3D0066; text-decoration: none;">${phone || 'Not provided'}</a></p>
            </div>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FFD700;">
              <h3 style="margin-top: 0; color: #3D0066; font-size: 18px;">🎉 Event Details</h3>
              <p style="margin: 8px 0;"><strong>Event Type:</strong> <span style="background-color: #FFD700; color: #0E0E0E; padding: 4px 8px; border-radius: 4px; font-weight: bold;">${eventType}</span></p>
              <p style="margin: 8px 0;"><strong>Event Date:</strong> ${eventDate || 'Not specified - to be discussed'}</p>
            </div>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
              <h3 style="margin-top: 0; color: #3D0066; font-size: 18px;">💬 Event Details & Requirements</h3>
              <div style="background-color: white; padding: 15px; border-radius: 6px; border: 1px solid #e9ecef;">
                <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; color: #333;">${message}</p>
              </div>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${email}" style="display: inline-block; background-color: #3D0066; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 0 10px;">Reply to Client</a>
            </div>
          </div>

          <div style="background-color: #3D0066; color: white; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="margin: 0; font-size: 14px;">
              📧 <strong>Quick Reply:</strong> <a href="mailto:${email}" style="color: #FFD700;">${email}</a><br>
              ⏰ <strong>Received:</strong> ${new Date().toLocaleString()}<br>
              🎯 <strong>Priority:</strong> Respond within 24 hours
            </p>
          </div>
        </div>
      `
    }

    // Confirmation email to client
    const clientMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: '🎉 Booking Request Received - Obinna Events',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #3D0066 0%, #FFD700 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 32px; font-weight: bold;">🎉 Thank You, ${name}!</h1>
            <p style="margin: 15px 0 0 0; font-size: 18px; opacity: 0.9;">Your booking request has been received</p>
          </div>

          <div style="background-color: white; padding: 40px 30px;">
            <h2 style="color: #3D0066; margin-top: 0; font-size: 24px; text-align: center;">What happens next?</h2>
            
            <div style="margin: 30px 0;">
              <div style="display: flex; align-items: flex-start; margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                <div style="background-color: #FFD700; color: #0E0E0E; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 20px; flex-shrink: 0; font-size: 18px;">1</div>
                <div>
                  <h4 style="margin: 0 0 5px 0; color: #3D0066; font-size: 16px;">Quick Review</h4>
                  <p style="margin: 0; color: #666; line-height: 1.5;">We'll review your request within 24 hours and check availability for your event date.</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: flex-start; margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                <div style="background-color: #FFD700; color: #0E0E0E; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 20px; flex-shrink: 0; font-size: 18px;">2</div>
                <div>
                  <h4 style="margin: 0 0 5px 0; color: #3D0066; font-size: 16px;">Personal Contact</h4>
                  <p style="margin: 0; color: #666; line-height: 1.5;">We'll contact you directly to discuss availability, pricing, and customize the perfect package for your event.</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: flex-start; margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                <div style="background-color: #FFD700; color: #0E0E0E; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 20px; flex-shrink: 0; font-size: 18px;">3</div>
                <div>
                  <h4 style="margin: 0 0 5px 0; color: #3D0066; font-size: 16px;">Event Planning</h4>
                  <p style="margin: 0; color: #666; line-height: 1.5;">We'll finalize all the details and start planning to make your event absolutely unforgettable! 🎊</p>
                </div>
              </div>
            </div>

            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #3D0066;">
              <h3 style="margin-top: 0; color: #3D0066; font-size: 18px;">📋 Your Request Summary</h3>
              <div style="background-color: white; padding: 20px; border-radius: 6px; margin-top: 15px;">
                <p style="margin: 8px 0;"><strong>Event Type:</strong> <span style="color: #3D0066;">${eventType}</span></p>
                <p style="margin: 8px 0;"><strong>Preferred Date:</strong> <span style="color: #3D0066;">${eventDate || 'To be discussed'}</span></p>
                <p style="margin: 8px 0;"><strong>Contact Email:</strong> <span style="color: #3D0066;">${email}</span></p>
                <p style="margin: 8px 0;"><strong>Contact Phone:</strong> <span style="color: #3D0066;">${phone || 'Not provided'}</span></p>
                <p style="margin: 8px 0;"><strong>Request ID:</strong> <span style="color: #666; font-family: monospace;">#OE${Date.now().toString().slice(-6)}</span></p>
              </div>
            </div>

            <div style="background-color: #e8f4fd; border: 1px solid #b3d7ff; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <h4 style="margin-top: 0; color: #0066cc; font-size: 16px;">💡 Important Notes:</h4>
              <ul style="margin: 10px 0; padding-left: 20px; color: #333;">
                <li style="margin-bottom: 8px;">Keep this email for your records</li>
                <li style="margin-bottom: 8px;">Check your spam folder if you don't hear from us within 24 hours</li>
                <li style="margin-bottom: 8px;">Feel free to reply to this email with any additional questions</li>
              </ul>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #666; font-size: 14px; line-height: 1.6;">
                🎭 <strong>Direct bookings only</strong> • No third-party agencies<br>
                📞 <strong>Quick response</strong> • We'll contact you within 24 hours<br>
                ⭐ <strong>Premium service</strong> • Tailored to make your event amazing
              </p>
            </div>
          </div>

          <div style="background-color: #3D0066; color: white; padding: 25px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="margin: 0; font-size: 14px; line-height: 1.5;">
              <strong>Obinna Events</strong><br>
              Making every event unforgettable 🎉<br>
              <span style="opacity: 0.8;">This is an automated confirmation. Please do not reply to this email.</span>
            </p>
          </div>
        </div>
      `
    }

    // Send emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(clientMailOptions)

    return NextResponse.json(
      { message: 'Booking request sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send booking request' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}