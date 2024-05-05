import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSpring } from 'react-spring';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import useStyles from './banner-style';

function Banner() {
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const { t } = useTranslation('common');
  const { classes } = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container fixed={isDesktop}>
        <Grid container spacing={6} className={classes.bannerContainer}>
          <Grid item lg={6} md={7} xs={12}>
            <div className={classes.bannerText}>
              <div className={classes.title}>
                <Typography variant="h3" className={text.title}>
                    Quality, nurturing, supportive
                </Typography>
              </div>
              <Typography className={classes.subtitle} variant="h5">
                MNM Wellness is dedicated to providing a nurturing and supportive environment for individuals with developmental disabilities, both children and adults. The focus on quality of life, safety, and fostering independence is commendable.
              </Typography>
            </div>
          </Grid>
          {isDesktop && (
            <Grid item lg={6} className={classes.decoGrid}>
              <div className={classes.decoBanner}>
                <div className={classes.artworkBg}>
                  <img src="/images/Dvpt.png" alt="artwork"  style={{marginBottom:"4rem", height:"23rem"}}/>
                </div>
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;
