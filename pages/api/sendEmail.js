// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, message, firstName, lastName, phoneNumber, googleCalendarUrl } = req.body;

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL || 'mnmwellness5@gmail.com',
          pass: process.env.PASS
        }
      });

      const senderName = `${firstName || ''} ${lastName || ''}`.trim() || email;

      let htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
          <h2 style="color: #00BCD4; margin-top: 0;">New Message from MNM Wellness App</h2>
          <p><strong>From:</strong> ${senderName} &lt;${email}&gt;</p>
          <p><strong>Phone Number:</strong> ${phoneNumber || 'Not provided'}</p>
          <p><strong>Message Details:</strong></p>
          <div style="background-color: #f9f9f9; border-left: 4px solid #00BCD4; padding: 12px 16px; margin: 16px 0; border-radius: 4px; white-space: pre-wrap;">${message}</div>
      `;

      if (googleCalendarUrl) {
        htmlContent += `
          <div style="text-align: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee;">
            <p style="font-weight: bold; color: #333;">Schedule this visit on Google Calendar:</p>
            <a href="${googleCalendarUrl}" target="_blank" style="background-color: #4285F4; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 24px; font-weight: bold; display: inline-block;">
              📅 Schedule on Google Calendar
            </a>
          </div>
        `;
      }

      htmlContent += `</div>`;

      let mailOptions = {
        from: `"${senderName}" <${process.env.EMAIL || 'mnmwellness5@gmail.com'}>`,
        to: 'mnmwellness5@gmail.com',
        replyTo: email,
        subject: `New Request from ${senderName} - MNM Wellness`,
        html: htmlContent
      };

      if (process.env.EMAIL && process.env.PASS) {
        await transporter.sendMail(mailOptions);
      } else {
        console.log('Nodemailer info: EMAIL or PASS env variables not set. Simulated send to mnmwellness5@gmail.com');
      }
      
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
