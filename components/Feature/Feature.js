// import React, { useState } from 'react';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import CountUp from 'react-countup';
// import ScrollAnimation from 'react-scroll-animation-wrapper';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import { useTranslation } from 'next-i18next';
// import { useText } from 'theme/common';
// import Title from '../Title';
// import useStyles from './feature-style';

// function Feature() {
//   const { classes } = useStyles();
//   const { classes: text } = useText();
//   const { t } = useTranslation('common');

//   // Media Query
//   const theme = useTheme();
//   const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

//   const [play, setPlay] = useState(false);

//   const countup = (val, isPlay) => (
//     <span>
//       {isPlay ? <CountUp end={val} /> : 0}
//     </span>
//   );

//   const handlePlay = visible => {
//     if (visible.inViewport) {
//       setTimeout(() => { setPlay(true); }, 500);
//     }
//   };

//   return (
//     <div className={classes.root}>
//       <Container maxWidth="md">
//         <Title
//           head={t('education-landing.feature_title')}
//           desc={t('education-landing.feature_desc')}
//           align="center"
//           color="primary"
//         />
//         <ScrollAnimation animateOnce animateIn="fadeIn" offset={100} afterAnimatedIn={handlePlay}>
//         </ScrollAnimation>
//       </Container>
//     </div>
//   );
// }

// export default Feature;
