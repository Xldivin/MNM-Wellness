import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const statList = [
  {
    num: '24/7',
    label: 'Skilled Care & Support',
    desc: 'Round-the-clock licensed nurse and caregiver presence',
    icon: <HealthAndSafetyIcon sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    num: '100+',
    label: 'Families Served',
    desc: 'Empowering children and adults with developmental care',
    icon: <FamilyRestroomIcon sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    num: '5+',
    label: 'Years Experience',
    desc: 'Dedicated experience in community-based care',
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    num: '100%',
    label: 'Customized Plans',
    desc: 'Tailored therapy, nutrition, and skill-building itineraries',
    icon: <VerifiedUserIcon sx={{ fontSize: 40, color: 'primary.main' }} />
  }
];

function Stats() {
  return (
    <Box sx={{ py: 8, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {statList.map((stat, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'rgba(0, 188, 212, 0.15)',
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFDFD 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 28px rgba(0, 188, 212, 0.15)',
                    borderColor: 'primary.main'
                  }
                }}
              >
                <Box sx={{ mb: 2, display: 'inline-flex', p: 1.5, borderRadius: '50%', bgcolor: 'rgba(0, 188, 212, 0.08)' }}>
                  {stat.icon}
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 1, fontSize: { xs: '2.2rem', md: '2.6rem' } }}>
                  {stat.num}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1.1rem' }}>
                  {stat.label}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {stat.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Stats;
