import nodemailer from 'nodemailer';
import { LeadFormData } from './validators';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendLeadEmail(data: LeadFormData): Promise<boolean> {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'florissima.u@gmail.com';
    const fromEmail = process.env.SMTP_FROM_EMAIL || 'noreply@essencegroup.ua';
    const fromName = process.env.SMTP_FROM_NAME || 'Essence Aesthetic Group';

    const emailHtml = `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a3a52; margin-bottom: 24px;">Нова заявка від ${data.firstName} ${data.lastName}</h2>
        
        <div style="background: #f8f6f3; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
          <p><strong>Ім'я:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Телефон:</strong> ${data.phone}</p>
          <p><strong>Компанія:</strong> ${data.company}</p>
          <p><strong>Напрямок інтересу:</strong> ${data.interest}</p>
          ${data.message ? `<p><strong>Повідомлення:</strong></p><p>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
        </div>

        <p style="color: #a89f96; font-size: 0.875rem;">
          Це автоматичне повідомлення від системи Essence Aesthetic Group.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: adminEmail,
      replyTo: data.email,
      subject: `Нова заявка: ${data.firstName} ${data.lastName} - ${data.interest}`,
      html: emailHtml,
    });

    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

export async function verifyEmailConfig(): Promise<boolean> {
  try {
    await transporter.verify();
    return true;
  } catch (error) {
    console.error('SMTP verification failed:', error);
    return false;
  }
}