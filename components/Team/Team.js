import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Chip } from '@mui/material';
import Title from '../Title';


const teamMembers = [
  {
    name: 'Jovelin Doe',
    role: 'Clinical Care Director',
    tag: 'Licensed Medical Lead',
    bio: 'Over 12 years of specialized nursing experience overseeing round-the-clock medical care and individualized health plans for developmental care.',
    avatar: 'S'
  },
  {
    name: 'John Doe',
    role: 'Residential Operations Lead',
    tag: 'Community Care',
    bio: 'Passionate about creating safe, home-like residential environments where residents thrive, build friendships, and gain independence.',
    avatar: 'M'
  },
  {
    name: 'Jane Doe',
    role: 'Lead Occupational Therapist',
    tag: 'Therapy & Skill Building',
    bio: 'Dedicated to helping residents master daily living skills, mobility, and sensory integration through supportive therapy sessions.',
    avatar: 'E'
  },
  {
    name: 'Jihan Doe',
    role: 'Behavioral Specialist',
    tag: 'Positive Support',
    bio: 'Expert in developing individualized positive behavior support strategies that encourage communication, confidence, and social growth.',
    avatar: 'D'
  }
];

function Team() {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.paper' }} id="team">
      <Container maxWidth="lg">
        <Title
          head="Our Compassionate Team"
          align="center"
          color="primary"
        />
        <Typography
          align="center"
          sx={{ color: 'text.secondary', mb: 6, maxWidth: 650, mx: 'auto' }}
        >
          Meet our dedicated medical directors, licensed nurses, and therapy specialists committed to nurturing every resident.
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'rgba(0, 188, 212, 0.15)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFDFD 100%)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 14px 30px rgba(0, 188, 212, 0.15)',
                    borderColor: 'primary.main'
                  }
                }}
              >
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: 'primary.main',
                      fontSize: '2rem',
                      fontWeight: 700,
                      mb: 2,
                      boxShadow: '0 6px 16px rgba(0, 188, 212, 0.25)'
                    }}
                  >
                    {member.avatar}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: '1.15rem' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: 'primary.dark', fontWeight: 600, mb: 1.5 }}>
                    {member.role}
                  </Typography>
                  <Chip label={member.tag} size="small" sx={{ mb: 2, bgcolor: 'rgba(0, 188, 212, 0.1)', color: 'primary.dark', fontWeight: 600 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '0.9rem' }}>
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Team;
