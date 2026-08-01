import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';
import Title from '../Title';

const services = [
  {
    title: 'Residential Care',
    desc: 'MNM provides 24-hour residential care for children and adults with developmental disabilities, offering a safe, nurturing, and supportive living environment tailored to their individual needs.',
    icon: <HouseIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    color: '#B3E5FC'
  },
  {
    title: 'Recreational Activities',
    desc: 'Engaging recreational and leisure programs designed to promote social interaction, physical fitness, and overall well-being in a fun and supportive atmosphere.',
    icon: <FitnessCenterIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    color: '#FFF8E1'
  },
  {
    title: 'Skilled Nursing',
    desc: 'Around-the-clock medical care provided by licensed nurses trained specifically to address the complex medical needs of individuals with developmental disabilities.',
    icon: <MedicalServicesIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    color: '#E3F2FD'
  },
  {
    title: 'Therapeutic Services',
    desc: 'Comprehensive therapy options including occupational, physical, speech, and behavioral therapy to help develop essential life skills and foster independence.',
    icon: <PsychologyIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    color: '#F3E5F5'
  },
  {
    title: 'Educational Programs',
    desc: 'Tailored academic, social, and vocational skill-building programs designed to promote personal growth, independence, and seamless community integration.',
    icon: <SchoolIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    color: '#FFF3E0'
  }
];

const Explore = () => {
  return (
    <Box sx={{ pb: 10, pt: 4, position: 'relative' }}>
      <Container maxWidth="lg">
        <Title
          head="Our Services"
          color="primary"
          align="center"
        />
        <Typography
          align="center"
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '1rem', md: '1.15rem' },
            maxWidth: 750,
            mx: 'auto',
            mb: 6,
            lineHeight: 1.6
          }}
        >
          At MNM Wellness, our mission is to empower individuals with developmental disabilities to lead fulfilling, independent, and enriched lives through comprehensive care.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'rgba(0, 188, 212, 0.18)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFDFB 100%)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 32px rgba(0, 188, 212, 0.18)',
                    borderColor: 'primary.main',
                    '& .service-icon-bg': {
                      transform: 'scale(1.1) rotate(4deg)',
                    }
                  }
                }}
              >
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Avatar
                    className="service-icon-bg"
                    sx={{
                      bgcolor: item.color,
                      width: 64,
                      height: 64,
                      mb: 3,
                      transition: 'transform 0.3s ease',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      mb: 1.5,
                      fontSize: '1.25rem'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.7,
                      fontSize: '0.95rem'
                    }}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Explore;
