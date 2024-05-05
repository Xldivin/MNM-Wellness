import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainContainer from 'components/MainContainer';
import Banner from 'components/Banner';
import PopularCourse from 'components/PopularCourse';
import Explore from 'components/Explore';
import Testimonials from 'components/Testimonials';
import Subscribe from 'components/SubscribeForm';
import PageNav from 'components/PageNav';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  spaceBottom: {
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      paddingBottom: sectionMargin(6),
    }
  },
  spaceBottomShort: {
    paddingBottom: theme.spacing(10),
  },
  spaceTop: {
    paddingTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      paddingTop: sectionMargin(6),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: sectionMargin(4),
    }
  },
  spaceTopShort: {
    paddingTop: theme.spacing(10),
  },
  containerWrap: {
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));

  return (
    <Fragment>
      <Head>
        <title>
          { 'MNM Wellness' }
        </title>
      </Head>
      <CssBaseline />
      <MainContainer
        onToggleDark={onToggleDark}
        onToggleDir={onToggleDir}
      >
        <Fragment>
          <main className={classes.containerWrap}>
            <section id="home">
              <Banner />
            </section>
            <section id="about" className={classes.spaceTopShort}>
              <PopularCourse />
            </section>
            <section id="service">
              <Explore />
            </section>
            <div id="testimonials" className={classes.spaceTop}>
              <Testimonials />
            </div>
            <section id="contact" className={classes.spaceTopShort}>
              <Subscribe />
            </section>
          </main>
          {!isTablet && (
            <Fragment>
              <PageNav />
            </Fragment>
          )}
        </Fragment>
      </MainContainer>
    </Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;

export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

