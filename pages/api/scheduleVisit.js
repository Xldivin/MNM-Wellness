import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      tourType,
      tourLabel,
      date,
      time,
      formattedTimeStr,
      notes,
      location,
      googleCalendarUrl: clientGoogleCalendarUrl,
      outlookCalendarUrl
    } = req.body;

    // Build helper function for server-side Google Calendar link with guest parameter 'add'
    const parseDateTimeStr = () => {
      const targetDate = date || new Date().toISOString().split('T')[0];
      const [tStr, modifier] = (time || '10:00 AM').split(' ');
      let [hours, minutes] = tStr.split(':').map(Number);
      if (modifier === 'PM' && hours < 12) hours += 12;
      if (modifier === 'AM' && hours === 12) hours = 0;
      const [y, m, d] = targetDate.split('-').map(Number);
      const start = new Date(y, m - 1, d, hours, minutes);
      const end = new Date(start.getTime() + 60 * 60 * 1000);
      const formatICS = (dt) => dt.toISOString().replace(/-|:|\.\d+/g, '');
      return { startStr: formatICS(start), endStr: formatICS(end) };
    };

    const { startStr, endStr } = parseDateTimeStr();

    const title = `MNM Wellness: ${tourLabel || 'Facility Visit'} - ${name}`;
    const description = `Facility Visit consultation with MNM Wellness.\nVisitor: ${name}\nEmail: ${email}\nPhone: ${phone}\nCare Needs / Notes: ${notes || 'None provided.'}`;
    
    // Ensure the 'add' parameter is included so the customer is added as an invited guest
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: title,
      details: description,
      location: location || 'MNM Wellness Facility Center',
      dates: `${startStr}/${endStr}`,
      add: email
    });
    const finalGoogleCalendarUrl = `https://calendar.google.com/calendar/render?${params.toString()}`;

    // Transporter configuration using environment variables or Gmail service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL || 'mnmwellness5@gmail.com',
        pass: process.env.PASS
      }
    });

    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 20px; color: #333; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
          .header { background: linear-gradient(135deg, #00BCD4 0%, #00838F 100%); color: #ffffff; padding: 30px 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
          .header p { margin: 8px 0 0 0; opacity: 0.9; font-size: 15px; }
          .content { padding: 32px 24px; }
          .detail-card { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px; }
          .detail-row { display: flex; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #e2e8f0; }
          .detail-row:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
          .detail-label { font-weight: bold; width: 140px; color: #475569; font-size: 14px; }
          .detail-value { color: #1e293b; font-size: 14px; flex: 1; font-weight: 600; }
          .cta-container { text-align: center; margin: 32px 0 20px 0; background-color: #f0f9ff; border: 1px solid #bae6fd; padding: 24px; border-radius: 16px; }
          .btn-google { background-color: #4285F4; color: #ffffff !important; padding: 16px 32px; text-decoration: none; border-radius: 30px; font-weight: bold; display: inline-block; font-size: 16px; box-shadow: 0 4px 14px rgba(66,133,244,0.4); margin-bottom: 12px; }
          .btn-outlook { background-color: #0078D4; color: #ffffff !important; padding: 12px 24px; text-decoration: none; border-radius: 30px; font-weight: bold; display: inline-block; font-size: 14px; margin-top: 6px; }
          .footer { background-color: #f1f5f9; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🗓 New Facility Visit Booking</h1>
            <p>MNM Wellness Care Management</p>
          </div>
          <div class="content">
            <p style="font-size: 16px; margin-top: 0;">A new facility visit meeting request has been submitted by a visitor on the website.</p>
            
            <div class="detail-card">
              <div class="detail-row">
                <span class="detail-label">Visitor Name:</span>
                <span class="detail-value">${name}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Email Address:</span>
                <span class="detail-value"><a href="mailto:${email}" style="color: #00BCD4;">${email}</a></span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Phone Number:</span>
                <span class="detail-value"><a href="tel:${phone}" style="color: #00BCD4;">${phone}</a></span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Visit Format:</span>
                <span class="detail-value">${tourLabel || tourType}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Date & Time:</span>
                <span class="detail-value" style="color: #00838F; font-size: 15px;">${formattedTimeStr || `${date} at ${time}`}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Care Needs/Notes:</span>
                <span class="detail-value">${notes || 'None provided.'}</span>
              </div>
            </div>

            <div class="cta-container">
              <p style="font-weight: bold; margin-bottom: 12px; color: #0f172a; font-size: 16px;">
                1-Click Google Calendar Scheduling:
              </p>
              <p style="font-size: 13px; color: #475569; margin-top: 0; margin-bottom: 18px;">
                Clicking the button below opens Google Calendar pre-filled with this event and automatically invites <strong>${email}</strong>. Saving adds the meeting to both your calendar and the customer's calendar!
              </p>
              <a href="${finalGoogleCalendarUrl}" target="_blank" class="btn-google">
                📅 Add Event & Invite Customer on Google Calendar
              </a>
              ${
                outlookCalendarUrl
                  ? `<br/><a href="${outlookCalendarUrl}" target="_blank" class="btn-outlook">Schedule on Outlook</a>`
                  : ''
              }
            </div>
          </div>
          <div class="footer">
            MNM Wellness Automated System • Sent to mnmwellness5@gmail.com
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"${name} (MNM Wellness Visit)" <${process.env.EMAIL || 'mnmwellness5@gmail.com'}>`,
      to: 'mnmwellness5@gmail.com',
      replyTo: email,
      subject: `🗓 New Facility Visit Request: ${name} (${tourLabel || 'Tour'}) - ${formattedTimeStr || date}`,
      html: htmlTemplate
    };

    if (process.env.EMAIL && process.env.PASS) {
      await transporter.sendMail(mailOptions);
      console.log('Email successfully sent to mnmwellness5@gmail.com');
    } else {
      console.log('Nodemailer notification created for mnmwellness5@gmail.com:', {
        to: mailOptions.to,
        subject: mailOptions.subject,
        googleCalendarUrl: finalGoogleCalendarUrl
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Facility visit request submitted and email sent to admin successfully.'
    });
  } catch (error) {
    console.error('Error sending schedule visit email:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
}
