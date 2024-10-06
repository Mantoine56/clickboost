import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const content = {
      to: 'antoine@clickboost.ca', // Replace with your actual email
      from: 'antoine@clickboost.ca', // Replace with your SendGrid verified sender email
      subject: `New message from ${name} via ClickBoost contact form`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    try {
      console.log('Attempting to send email...');
      await sgMail.send(content);
      console.log('Email sent successfully');
      res.status(200).json({ status: 'Ok' });
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      if (error instanceof Error && 'response' in error) {
        console.error((error as any).response?.body);
      }
      res.status(500).json({ error: 'Error sending email', details: error instanceof Error ? error.message : 'Unknown error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}