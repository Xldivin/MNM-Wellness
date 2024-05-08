// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, message, firstName, lastName, phoneNumber } = req.body;

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'xldivin@gmail.com',
          pass: 'rzfj htqu xofu ztje'
        }
      });

      let mailOptions = {
        from: email,
        to: 'xldivin@gmail.com',
        subject: 'New message from MNM Wellness App',
        html: `
        <p><strong>From:</strong> ${firstName} ${lastName} &lt;${email}&gt;</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
      };
      await transporter.sendMail(mailOptions);
      
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
