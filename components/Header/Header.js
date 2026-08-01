import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Scrollspy from 'react-scrollspy';
import { useTranslation } from 'next-i18next';
import MobileMenu from './MobileMenu';
import useStyles from './header-style';
import Link from '../Link';
import Logo1 from '../../public/images/blue.png';
import Logo2 from '../../public/images/white.png';

function Header(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [scrollPosition, setScrollPosition] = useState(0);

  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 80);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const { classes, cx } = useStyles();
  const {
    onToggleDark,
    onToggleDir,
    invert,
  } = props;
  const { t } = useTranslation('common');

  const [menuList] = useState([
    "Home",
    "About",
    "Service",
    "Testimonials",
    "FAQ",
    "Contact"
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Fragment>
      {isTablet && (<MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} onOpenSchedule={props.onOpenSchedule} />)}
      <AppBar
        component="div"
        position="relative"
        id="header"
        className={cx(
          classes.header,
          fixed && classes.fixed,
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            {/* Logo on Left */}
            <div className={classes.logo} style={{ display: 'flex', alignItems: 'center' }}>
              <Link href="#home">
                {scrollPosition > 80 ? (
                  <img src={Logo1} alt="MNM Wellness" style={{ width: '3.2rem', height: '3.2rem' }} />
                ) : (
                  <img src={Logo2} alt="MNM Wellness" style={{ width: '3.2rem', height: '3.2rem' }} />
                )}
              </Link>
            </div>

            {/* Menus on Right */}
            <nav className={cx(classes.navMenu, invert && classes.invert)} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {isDesktop && (
                <Scrollspy style={{ display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
                  {menuList.map((item, idx) => (
                    <li key={idx.toString()} style={{ listStyle: 'none' }}>
                      <Button component={Link} href={`#${item.toLowerCase()}`}>
                        <span className={classes.text}>
                          {item}
                        </span>
                      </Button>
                    </li>
                  ))}
                </Scrollspy>
              )}
              {isDesktop && props.onOpenSchedule && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={props.onOpenSchedule}
                  sx={{
                    borderRadius: '20px',
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 700,
                    boxShadow: '0 4px 14px rgba(0, 188, 212, 0.3)'
                  }}
                >
                  Schedule Tour
                </Button>
              )}
              {isTablet && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={cx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active')}
                  size="large"
                >
                  <span className="hamburger-box">
                    <span className={cx(classes.bar, 'hamburger-inner')} />
                  </span>
                </IconButton>
              )}
            </nav>
          </div>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};

Header.defaultProps = {
  invert: false
};

export default Header;
