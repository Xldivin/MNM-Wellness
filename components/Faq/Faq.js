import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Title from '../Title';

const faqItems = [
  {
    q: 'What types of developmental care services does MNM Wellness provide?',
    a: 'MNM Wellness offers 24-hour community residential care, skilled nursing, therapeutic services (occupational, physical, speech, and behavioral therapy), recreational activities, and tailored educational/vocational programs for both children and adults.'
  },
  {
    q: 'How does the intake and assessment process work?',
    a: 'Our intake process begins with a comprehensive consultation and evaluation by our clinical team. We review medical history, daily living support needs, and personal goals to design a custom-fit care itinerary.'
  },
  {
    q: 'How are staffing ratios and overnight medical care structured?',
    a: 'We maintain low staff-to-resident ratios to ensure personalized attention. Registered and licensed practical nurses are available around the clock to handle specialized medical procedures and health monitoring.'
  },
  {
    q: 'Are family visitations and community outings supported?',
    a: 'Yes, absolutely! We encourage active family involvement and organize regular community outings, recreational trips, and holiday celebrations to ensure residents feel connected and engaged.'
  }
];

function Faq() {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ pt: 6, pb: 2, bgcolor: 'background.default' }} id="faq">
      <Container maxWidth="md">
        <Title
          head="Frequently Asked Questions"
          align="center"
          color="primary"
        />
        <Typography
          align="center"
          sx={{ color: 'text.secondary', mb: 6, maxWidth: 650, mx: 'auto' }}
        >
          Find answers to common questions about our developmental care programs, admission process, and daily living support.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqItems.map((item, idx) => (
            <Accordion
              key={idx}
              expanded={expanded === idx}
              onChange={handleChange(idx)}
              elevation={0}
              sx={{
                borderRadius: '16px !important',
                border: '1px solid',
                borderColor: expanded === idx ? 'primary.main' : 'divider',
                boxShadow: expanded === idx ? '0 8px 24px rgba(0, 188, 212, 0.12)' : 'none',
                transition: 'all 0.3s ease',
                '&:before': { display: 'none' }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                sx={{ p: 3 }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem', color: 'text.primary' }}>
                  {item.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {item.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Faq;
