import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, company, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Create email content
        const emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #ef4444, #3b82f6); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; }
        .field { margin-bottom: 20px; }
        .label { font-weight: 600; color: #475569; margin-bottom: 8px; display: block; }
        .value { background: white; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; }
        .message-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; white-space: pre-wrap; }
        .footer { text-align: center; margin-top: 30px; padding: 20px; color: #64748b; font-size: 14px; }
        .badge { display: inline-block; background: #3b82f6; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; margin-top: 8px; }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="margin: 0; font-size: 28px;">New Contact Form Submission</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Nathan Reardon Portfolio</p>
    </div>
    
    <div class="content">
        <div class="field">
            <span class="label">From:</span>
            <div class="value">
                <strong>${name}</strong>
                <br>
                <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                ${company ? `<div class="badge">${company}</div>` : ''}
            </div>
        </div>

        <div class="field">
            <span class="label">Subject:</span>
            <div class="value">${subject}</div>
        </div>

        <div class="field">
            <span class="label">Message:</span>
            <div class="message-box">${message}</div>
        </div>
    </div>

    <div class="footer">
        <p>This message was sent through your portfolio contact form.</p>
        <p style="color: #94a3b8;">Sent on ${new Date().toLocaleString('en-US', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        })}</p>
    </div>
</body>
</html>
        `.trim();

        // Attempt to send email using Resend
        try {
            if (process.env.RESEND_API_KEY) {
                const { data, error } = await resend.emails.send({
                    from: 'Portfolio Contact <noreply@nathanreardon.com>',
                    to: ['info@nathanreardon.com'],
                    replyTo: email,
                    subject: `Portfolio Contact: ${subject}`,
                    html: emailContent,
                });

                if (error) {
                    console.error('Resend error:', error);
                    throw new Error('Failed to send via Resend');
                }

                return NextResponse.json({ 
                    success: true, 
                    message: 'Email sent successfully',
                    method: 'resend'
                });
            }
        } catch (resendError) {
            console.warn('Resend failed, falling back to mailto:', resendError);
        }

        // Fallback: Return mailto link if Resend fails or isn't configured
        const emailBody = `
Name: ${name}
Email: ${email}
Company: ${company || 'Not specified'}
Subject: ${subject}

Message:
${message}
        `.trim();

        const mailtoLink = `mailto:nathan@membershipauto.com?subject=${encodeURIComponent(`Portfolio Contact: ${subject}`)}&body=${encodeURIComponent(emailBody)}`;

        return NextResponse.json({ 
            success: true, 
            message: 'Mailto link generated',
            method: 'mailto',
            mailtoLink
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
