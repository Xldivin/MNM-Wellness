import React, { Fragment, useState } from 'react';
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
import FloatingContact from 'components/FloatingContact/FloatingContact';
import ProgramFinder from 'components/ProgramFinder/ProgramFinder';
import Stats from 'components/Stats/Stats';
import Team from 'components/Team/Team';
import Faq from 'components/Faq/Faq';
import ScheduleModal from 'components/ScheduleModal/ScheduleModal';

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
  const [openSchedule, setOpenSchedule] = useState(false);

  const handleOpenSchedule = () => setOpenSchedule(true);
  const handleCloseSchedule = () => setOpenSchedule(false);

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
        onOpenSchedule={handleOpenSchedule}
      >
        <Fragment>
          <main className={classes.containerWrap}>
            <section id="home">
              <Banner />
            </section>

            <Stats />

            <section id="about" className={classes.spaceTopShort}>
              <PopularCourse />
            </section>

            <section id="service">
              <Explore />
            </section>

            <ProgramFinder onOpenSchedule={handleOpenSchedule} />

            <Team />

            <div id="testimonials" className={classes.spaceTop}>
              <Testimonials />
            </div>

            <Faq />

            <section id="contact" style={{ paddingTop: '20px' }}>
              <Subscribe />
            </section>
          </main>
          <FloatingContact />
          <ScheduleModal open={openSchedule} onClose={handleCloseSchedule} />
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

