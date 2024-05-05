import React, { useRef } from 'react';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Title from '../Title';
import useStyle from './popular-course-style';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function PopularCourse() {
  const slider = useRef(null);

  const theme = useTheme();
  const { classes } = useStyle();

  if (theme.direction === 'rtl') {
    const lastSlide = Math.floor(courseData.length - 2);
    slider.current.slickGoTo(lastSlide);
  }

  return (
    <div>
      <Title
        head='About Us'
        align="center"
        color="primary"
      />
      <Container>
        <Grid container spacing={6} className={classes.bannerContainer}>
          <Grid item lg={6} md={7} xs={12}>
            <Typography sx={{ marginTop: {xs:"0rem", lg:"4rem"} }} >
              At MNM Wellness, our core values revolve around enhancing the quality of life, ensuring safety, and fostering nurturing environments for all our residents. We specialize in providing comprehensive care and support for children and adults with developmental disabilities, offering round-the-clock skilled assistance alongside community-based living solutions.
            </Typography>
          </Grid>
          <Grid item lg={6} className={classes.decoGrid}>
            <div className={classes.bannerText}>
              <Box
                component="img"
                sx={{ width: '60%', marginLeft: { xs: "5rem", lg: "10rem" } }}
                src="/images/Dvpt2.png"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PopularCourse;
