import { ReactNode } from 'react';
import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailParams {
    to: string;
    subject: string;
    react: ReactNode;
}

export async function sendEmail({ to, subject, react }: SendEmailParams) {
    try {
        await resend.emails.send({
            from: 'YouFlow <onboarding@resend.dev>',
            to,
            subject,
            react,
        });
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}