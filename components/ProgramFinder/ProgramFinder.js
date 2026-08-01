import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Grid,
  Chip,
  Card,
  CardContent,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReplayIcon from '@mui/icons-material/Replay';
import Title from '../Title';

const ageGroups = [
  { value: 'children', label: 'Children (Under 18)', desc: 'Developmental support, pediatric therapy, and early education' },
  { value: 'adults', label: 'Adults (18+)', desc: '24/7 residential care, vocational skill building, & independent living' }
];

const careNeeds = [
  { id: 'residential', label: '24/7 Residential Care', desc: 'Safe community-based home with 24-hour skilled supervision' },
  { id: 'nursing', label: 'Skilled Nursing', desc: 'Licensed medical care and health monitoring' },
  { id: 'therapy', label: 'Therapeutic Services', desc: 'Occupational, physical, speech & behavioral therapy' },
  { id: 'recreation', label: 'Recreational & Leisure', desc: 'Social engagement, physical activities & community outings' },
  { id: 'education', label: 'Educational & Vocational', desc: 'Life skill building & vocational training' }
];

const recommendations = {
  'children-residential': {
    title: 'Pediatric Residential & Family Support Plan',
    desc: 'Our specialized pediatric program offers a warm, family-like environment with round-the-clock nursing supervision and tailored developmental activities.',
    highlights: ['24/7 Skilled Pediatric Care', 'Individualized Education Plan', 'Behavioral & Speech Therapy']
  },
  'adults-residential': {
    title: 'Adult Community Residential Living',
    desc: 'Empowering adult residents with dignified living arrangements, community participation, skill-building, and continuous professional support.',
    highlights: ['24/7 Resident Supervision', 'Vocational Skill Building', 'Social Outings & Recreation']
  },
  'default': {
    title: 'Customized Wellness & Care Program',
    desc: 'Based on your selections, our team will craft a personalized care itinerary balancing healthcare, therapy, and social well-being.',
    highlights: ['Multi-disciplinary Care Team', 'Custom Therapy Schedule', 'Flexible Family Engagement']
  }
};

const steps = ['Target Group', 'Care Needs', 'Recommended Plan'];

function ProgramFinder({ onOpenSchedule }) {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAge, setSelectedAge] = useState('children');
  const [selectedNeed, setSelectedNeed] = useState('residential');

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setSelectedAge('children');
    setSelectedNeed('residential');
  };

  const getResultKey = () => `${selectedAge}-${selectedNeed}`;
  const result = recommendations[getResultKey()] || recommendations['default'];

  return (
    <Box sx={{ py: 10, bgcolor: 'background.paper' }} id="program-finder">
      <Container maxWidth="md">
        <Title
          head="Find Your Ideal Care Program"
          align="center"
          color="primary"
        />
        <Typography
          align="center"
          sx={{ color: 'text.secondary', mb: 6, maxWidth: 650, mx: 'auto' }}
        >
          Use our interactive program finder to identify the best care plan tailored to your loved one’s unique needs.
        </Typography>

        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'rgba(0, 188, 212, 0.2)',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F4FBFD 100%)'
          }}
        >
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                Step 1: Who is this program for?
              </Typography>
              <Grid container spacing={3}>
                {ageGroups.map((group) => (
                  <Grid item xs={12} sm={6} key={group.value}>
                    <Card
                      onClick={() => setSelectedAge(group.value)}
                      sx={{
                        cursor: 'pointer',
                        borderRadius: 3,
                        border: '2px solid',
                        borderColor: selectedAge === group.value ? 'primary.main' : 'divider',
                        bgcolor: selectedAge === group.value ? 'rgba(0, 188, 212, 0.05)' : 'background.paper',
                        transition: 'all 0.2s ease',
                        '&:hover': { borderColor: 'primary.main' }
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
                          {group.label}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {group.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ borderRadius: '20px', px: 4 }}
                >
                  Next Step
                </Button>
              </Box>
            </Box>
          )}

          {activeStep === 1 && (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                Step 2: What primary care services are needed?
              </Typography>
              <Grid container spacing={2}>
                {careNeeds.map((need) => (
                  <Grid item xs={12} key={need.id}>
                    <Paper
                      onClick={() => setSelectedNeed(need.id)}
                      sx={{
                        p: 2.5,
                        cursor: 'pointer',
                        borderRadius: 3,
                        border: '2px solid',
                        borderColor: selectedNeed === need.id ? 'primary.main' : 'divider',
                        bgcolor: selectedNeed === need.id ? 'rgba(0, 188, 212, 0.05)' : 'background.paper',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                          {need.label}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {need.desc}
                        </Typography>
                      </Box>
                      <Radio
                        checked={selectedNeed === need.id}
                        onChange={() => setSelectedNeed(need.id)}
                        color="primary"
                      />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button onClick={handleBack} sx={{ borderRadius: '20px' }}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ borderRadius: '20px', px: 4 }}
                >
                  View Recommendation
                </Button>
              </Box>
            </Box>
          )}

          {activeStep === 2 && (
            <Box>
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Chip label="Recommended Match" color="primary" sx={{ fontWeight: 700, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  {result.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
                  {result.desc}
                </Typography>
              </Box>

              <Paper sx={{ p: 3, bgcolor: 'background.default', borderRadius: 3, mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: 'primary.dark' }}>
                  Program Highlights:
                </Typography>
                <Grid container spacing={2}>
                  {result.highlights.map((item, idx) => (
                    <Grid item xs={12} sm={4} key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon color="primary" fontSize="small" />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Paper>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Button startIcon={<ReplayIcon />} onClick={handleReset} sx={{ borderRadius: '20px' }}>
                  Start Over
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={onOpenSchedule || (() => {
                    const contact = document.getElementById('contact');
                    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                  })}
                  sx={{ borderRadius: '24px', px: 4 }}
                >
                  Schedule a Facility Tour
                </Button>
              </Box>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default ProgramFinder;
