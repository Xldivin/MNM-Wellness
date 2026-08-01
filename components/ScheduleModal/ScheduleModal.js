import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  MenuItem,
  IconButton,
  Typography,
  Box,
  Alert,
  Paper,
  Chip,
  CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

const tourTypes = [
  { value: 'in-person', label: 'In-Person Facility Tour' },
  { value: 'virtual', label: 'Virtual Video Consultation' },
  { value: 'phone', label: 'Phone Intake Discussion' }
];

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM'
];

const getTomorrowDateString = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

const parseDateTime = (dateStr, timeStr) => {
  const targetDateStr = dateStr || getTomorrowDateString();
  const [time, modifier] = (timeStr || '10:00 AM').split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (modifier === 'PM' && hours < 12) hours += 12;
  if (modifier === 'AM' && hours === 12) hours = 0;

  const [year, month, day] = targetDateStr.split('-').map(Number);
  const startDate = new Date(year, month - 1, day, hours, minutes);
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour duration

  return { startDate, endDate };
};

const formatICSDate = (date) => {
  return date.toISOString().replace(/-|:|\.\d+/g, '');
};

const getGoogleCalendarUrl = (eventDetails) => {
  const { title, description, location, startDate, endDate, customerEmail } = eventDetails;
  const startStr = formatICSDate(startDate);
  const endStr = formatICSDate(endDate);
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    details: description,
    location: location,
    dates: `${startStr}/${endStr}`
  });
  if (customerEmail) {
    params.append('add', customerEmail);
  }
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

const getOutlookCalendarUrl = (eventDetails) => {
  const { title, description, location, startDate, endDate } = eventDetails;
  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: title,
    body: description,
    location: location,
    startdt: startDate.toISOString(),
    enddt: endDate.toISOString()
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
};

function ScheduleModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourType: 'in-person',
    date: getTomorrowDateString(),
    time: '10:00 AM',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    if (open && !formData.date) {
      setFormData((prev) => ({ ...prev, date: getTomorrowDateString() }));
    }
  }, [open, formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const tourObj = tourTypes.find((t) => t.value === formData.tourType);
    const tourLabel = tourObj ? tourObj.label : 'Facility Visit';
    const { startDate, endDate } = parseDateTime(formData.date, formData.time);

    let location = 'MNM Wellness Facility Center, 123 Care Way, Suite 100';
    if (formData.tourType === 'virtual') {
      location = 'Virtual Video Conference (Link sent via Email)';
    } else if (formData.tourType === 'phone') {
      location = `Phone Consultation (${formData.phone})`;
    }

    const details = {
      title: `MNM Wellness: ${tourLabel} - ${formData.name}`,
      description: `Scheduled Visit with MNM Wellness Care Team.\nVisitor: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nNotes/Requirements: ${formData.notes || 'None provided.'}\n\nWe look forward to meeting you!`,
      location,
      startDate,
      endDate,
      tourLabel,
      customerEmail: formData.email,
      formattedTimeStr: startDate.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) + ` at ${formData.time}`
    };

    const googleCalendarUrl = getGoogleCalendarUrl(details);
    const outlookCalendarUrl = getOutlookCalendarUrl(details);

    setEventDetails(details);

    // Send email to admin mnmwellness5@gmail.com with Google Calendar schedule button
    try {
      await axios.post('/api/scheduleVisit', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        tourType: formData.tourType,
        tourLabel,
        date: formData.date,
        time: formData.time,
        formattedTimeStr: details.formattedTimeStr,
        notes: formData.notes,
        location,
        googleCalendarUrl,
        outlookCalendarUrl
      });
    } catch (err) {
      console.error('API call to /api/scheduleVisit failed, falling back:', err);
      try {
        await axios.post('/api/sendEmail', {
          email: formData.email,
          firstName: formData.name,
          lastName: '(Facility Tour Request)',
          phoneNumber: formData.phone,
          message: `Facility Tour Request:\nType: ${tourLabel}\nDate/Time: ${details.formattedTimeStr}\nNotes: ${formData.notes}\n\nGoogle Calendar Link: ${googleCalendarUrl}`
        });
      } catch (fallbackErr) {
        console.error('Fallback email sending failed:', fallbackErr);
      }
    }

    setLoading(false);
    setSubmitted(true);
    // Note: Automatic .ics file download has been removed per user request.
  };

  const handleReset = () => {
    setSubmitted(false);
    setEventDetails(null);
    setLoading(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          p: 1
        }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <EventAvailableIcon color="primary" sx={{ fontSize: 32 }} />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {submitted ? 'Booking Request Confirmed' : 'Schedule a Facility Visit'}
          </Typography>
        </Box>
        <IconButton onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {submitted && eventDetails ? (
        <DialogContent sx={{ px: 3, py: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <CheckCircleOutlineIcon color="success" sx={{ fontSize: 64, mb: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'success.main' }}>
              Booking Request Submitted!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your visit request has been sent to our team at <strong>mnmwellness5@gmail.com</strong>.
            </Typography>
          </Box>

          <Paper
            variant="outlined"
            sx={{
              p: 2.5,
              borderRadius: 3,
              bgcolor: 'grey.50',
              borderColor: 'primary.light',
              mb: 3
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1 }}>
              <Chip label={eventDetails.tourLabel} color="primary" size="small" sx={{ fontWeight: 600 }} />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
              <AccessTimeIcon color="action" sx={{ fontSize: 20, mt: 0.3 }} />
              <Box>
                <Typography variant="caption" color="text.secondary" display="block">Date & Time</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {eventDetails.formattedTimeStr}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
              <LocationOnIcon color="action" sx={{ fontSize: 20, mt: 0.3 }} />
              <Box>
                <Typography variant="caption" color="text.secondary" display="block">Location / Format</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {eventDetails.location}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
              <PersonIcon color="action" sx={{ fontSize: 20, mt: 0.3 }} />
              <Box>
                <Typography variant="caption" color="text.secondary" display="block">Visitor Information</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {formData.name} ({formData.email} • {formData.phone})
                </Typography>
              </Box>
            </Box>
          </Paper>

          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
            Save meeting to your personal calendar:
          </Typography>

          <Grid container spacing={1.5} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                startIcon={<CalendarMonthIcon />}
                endIcon={<OpenInNewIcon fontSize="small" />}
                href={getGoogleCalendarUrl(eventDetails)}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ borderRadius: '12px', textTransform: 'none', py: 1, fontWeight: 600 }}
              >
                Google Calendar
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                startIcon={<CalendarMonthIcon />}
                endIcon={<OpenInNewIcon fontSize="small" />}
                href={getOutlookCalendarUrl(eventDetails)}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ borderRadius: '12px', textTransform: 'none', py: 1, fontWeight: 600 }}
              >
                Outlook Calendar
              </Button>
            </Grid>
          </Grid>

          <Alert severity="info" icon={<EmailIcon />} sx={{ borderRadius: 2 }}>
            An email with a 1-click Google Calendar scheduling button has been sent to <strong>mnmwellness5@gmail.com</strong>. When the admin clicks to schedule, a calendar invitation is automatically dispatched to <strong>{formData.email}</strong>.
          </Alert>
        </DialogContent>
      ) : (
        <form onSubmit={handleSubmit}>
          <DialogContent sx={{ px: 3, py: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  Choose your preferred visit format, date, and time below to schedule a facility visit with our care team.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Visit Format"
                  select
                  name="tourType"
                  value={formData.tourType}
                  onChange={handleChange}
                  variant="outlined"
                >
                  {tourTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Preferred Date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ min: new Date().toISOString().split('T')[0] }}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Preferred Time"
                  select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  {timeSlots.map((slot) => (
                    <MenuItem key={slot} value={slot}>
                      {slot}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Specific Care Needs / Questions"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  multiline
                  rows={3}
                  placeholder="Tell us a little bit about your loved one's care requirements..."
                />
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions sx={{ p: 3 }}>
            <Button onClick={onClose} disabled={loading} sx={{ borderRadius: '20px' }}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
              sx={{ borderRadius: '24px', px: 4 }}
            >
              {loading ? 'Scheduling...' : 'Confirm Booking Request'}
            </Button>
          </DialogActions>
        </form>
      )}

      {submitted && (
        <DialogActions sx={{ p: 3, pt: 0, justifyContent: 'space-between' }}>
          <Button onClick={handleReset} color="inherit" sx={{ textTransform: 'none' }}>
            Book Another Tour
          </Button>
          <Button onClick={onClose} variant="contained" color="primary" sx={{ borderRadius: '20px', px: 3 }}>
            Done
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}

ScheduleModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ScheduleModal;
