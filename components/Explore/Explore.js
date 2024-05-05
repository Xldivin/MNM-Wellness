import { Box, Container, Typography } from '@mui/material';
import Title from '../Title';

const Explore = () => {
  return (
    <Box sx={{ pb: 10 }}>
      <Container>
      <Title
        head='Service'
        color="primary"
      />
        <Typography sx={{  color: '#000', fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }, }}>
        At MNM, our mission is simple yet profound: to empower individuals with developmental disabilities to lead fulfilling lives.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 5, justifyContent: 'space-around', gap: 10 }}>
          <Box>
            <Box sx={{ display: 'flex', gap: 1, pb: 2 }}>
              <Typography sx={{  fontWeight: 600, fontSize: '1.1rem', color: '#000000' }}>Residential Care</Typography>
            </Box>
            <Typography sx={{  fontSize: { xs: '.9rem', sm: '.9rem', md: '1rem', lg: '1rem' }, lineHeight: 1.2 }}>
            MNM could provide 24-hour residential  care  for <br /> children  and adults with   developmental disabilities <br /> offering a safe and supportive <br /> living environment tailored to their needs.
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', gap: 1, pb: 2 }}>
              <Typography sx={{  fontWeight: 600, fontSize: '1.1rem', color: '#000000' }}>Recreational Activities</Typography>
            </Box>
            <Typography sx={{  fontSize: { xs: '.9rem', sm: '.9rem', md: '1rem', lg: '1rem' }, lineHeight: 1.2 }}>
            MNM may offer recreational and leisure <br /> activities designed to promote social <br /> interaction, physical fitness, and overall well-being, <br /> providing opportunities for individuals to <br /> engage in enjoyable and meaningful <br /> activities suited to their interests and abilities.
            </Typography>
          </Box>
          <Box >
            <Box sx={{ display: 'flex', gap: 1, pb: 2 }}>
              <Typography sx={{
                fontWeight: 600,
                fontSize: '1.1rem',
                color: '#000000',
                lineHeight: 1.3,
              }}>
              Skilled Nursing
              </Typography>
            </Box>
            <Typography sx={{  fontSize: { xs: '.9rem', sm: '.9rem', md: '1rem', lg: '1rem' }, lineHeight: 1.2, }}>
            Skilled nursing services could be provided by <br /> licensed  nurses who are trained to  address  the <br /> medical  needs of individuals  with  developmental <br /> disabilities, ensuring  they  receive  prope r medical <br /> attention and care.
            </Typography>
          </Box>

          <Box>
            <Box sx={{ display: 'flex', gap: 1, pb: 2 }}>
              <Typography sx={{  fontWeight: 600, fontSize: '1.1rem', color: '#000000' }}>Therapeutic Services</Typography>
            </Box>
            <Typography sx={{  fontSize: { xs: '.9rem', sm: '.9rem', md: '1rem', lg: '1rem' }, lineHeight: 1.2 }}>
            MNM might offer a range of therapeutic services <br /> including occupational therapy, physical therapy <br />, speech therapy, and behavioral therapy <br /> to help individuals  develop essential <br /> life skills, improve communication, and <br />  manage behaviors.
            </Typography>
          </Box>

          <Box>
            <Box sx={{ display: 'flex', gap: 1, pb: 2 }}>
              <Typography sx={{  fontWeight: 600, fontSize: '1.1rem', color: '#000000' }}>Educational Programs</Typography>
            </Box>
            <Typography sx={{  fontSize: { xs: '.9rem', sm: '.9rem', md: '1rem', lg: '1rem' }, lineHeight: 1.2 }}>
              MNM could provide educational programs tailored <br /> to the needs of each individual, <br />focusing on academic, social, and vocational <br /> skills development to promote independence <br /> and integration into the community.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Explore;
