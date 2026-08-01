import React from 'react';
import { Fab, Tooltip, Box, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function FloatingContact() {
  const handleClick = (e) => {
    e.preventDefault();
    const message = encodeURIComponent('Hello MNM Wellness, I would like to inquire about your developmental care services.');
    window.open(`https://wa.me/+14806651669?text=${message}`, '_blank');
  };

  return (
    <Zoom in={true}>
      <Box
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1200,
        }}
      >
        <Tooltip title="Chat on WhatsApp" placement="left" arrow>
          <Fab
            aria-label="whatsapp contact"
            onClick={handleClick}
            sx={{
              bgcolor: '#25D366',
              color: '#FFFFFF',
              boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#1EBE57',
                transform: 'scale(1.1)',
                boxShadow: '0 12px 28px rgba(37, 211, 102, 0.5)',
              }
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 32 }} />
          </Fab>
        </Tooltip>
      </Box>
    </Zoom>
  );
}

export default FloatingContact;
