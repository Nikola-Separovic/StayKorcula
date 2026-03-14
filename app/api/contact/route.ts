import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

/**
 * Unified contact API - Resend only.
 * Subject line includes source: Accommodation (property name) or Service (service name).
 */

const contactApiSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  message: z.string().optional(),
  // Accommodation-specific
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  guests: z.union([z.number(), z.string().transform(Number)]).optional(),
  // Service-specific
  date: z.string().optional(),
  // Source identification for subject line
  sourceType: z.enum(['accommodation', 'service']).optional(),
  propertyName: z.string().optional(),
  serviceName: z.string().optional(),
});

type ContactPayload = z.infer<typeof contactApiSchema>;

const toEmail = process.env.TO_EMAIL || 'staykorcula@gmail.com';
const resendFrom =
  process.env.RESEND_FROM_EMAIL || 'StayKorčula <onboarding@resend.dev>';

function buildSubject(payload: ContactPayload): string {
  if (payload.sourceType === 'service' && payload.serviceName) {
    return `Inquiry: ${payload.serviceName}`;
  }
  if (payload.sourceType === 'accommodation' && payload.propertyName) {
    return `Inquiry: ${payload.propertyName}`;
  }
  if (payload.propertyName) {
    return `Inquiry: ${payload.propertyName}`;
  }
  if (payload.serviceName) {
    return `Inquiry: ${payload.serviceName}`;
  }
  return 'Inquiry: StayKorčula';
}

function buildEmailHtml(payload: ContactPayload): string {
  const guests = payload.guests ? (typeof payload.guests === 'number' ? payload.guests : parseInt(String(payload.guests), 10) || '') : '';
  const sourceLabel =
    payload.sourceType === 'service' && payload.serviceName
      ? `Service: ${payload.serviceName}`
      : payload.sourceType === 'accommodation' && payload.propertyName
        ? `Accommodation: ${payload.propertyName}`
        : payload.propertyName
          ? `Accommodation: ${payload.propertyName}`
          : payload.serviceName
            ? `Service: ${payload.serviceName}`
            : 'General';

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0ea5e9;">New Inquiry - ${sourceLabel}</h2>
      
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Phone:</strong> ${payload.phone}</p>
      </div>
      
      ${
        payload.checkIn || payload.checkOut || guests
          ? `
      <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Booking Details</h3>
        ${payload.checkIn ? `<p><strong>Check-in:</strong> ${payload.checkIn}</p>` : ''}
        ${payload.checkOut ? `<p><strong>Check-out:</strong> ${payload.checkOut}</p>` : ''}
        ${guests ? `<p><strong>Guests:</strong> ${guests}</p>` : ''}
        ${payload.date ? `<p><strong>Preferred Date:</strong> ${payload.date}</p>` : ''}
      </div>
      `
          : payload.date
            ? `
      <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Request Details</h3>
        <p><strong>Preferred Date:</strong> ${payload.date}</p>
        ${guests ? `<p><strong>Guests:</strong> ${guests}</p>` : ''}
      </div>
      `
            : ''
      }
      
      ${
        payload.message
          ? `
      <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Message</h3>
        <p style="white-space: pre-wrap;">${payload.message}</p>
      </div>
      `
          : ''
      }
      
      <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; color: #065f46;">
          <strong>Submitted:</strong> ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/Zagreb' })}
        </p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          message:
            'Email service not configured. Add RESEND_API_KEY to .env (get one at resend.com)',
        },
        { status: 503 }
      );
    }

    const body = await request.json();
    const payload = contactApiSchema.parse(body);

    const subject = buildSubject(payload);
    const html = buildEmailHtml(payload);

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: resendFrom,
      to: toEmail,
      subject,
      html,
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid form data' },
        { status: 400 }
      );
    }

    const message =
      error instanceof Error
        ? error.message
        : 'Failed to send message. Please try again.';

    return NextResponse.json({ message }, { status: 500 });
  }
}
