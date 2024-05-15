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
    "Contact"
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Fragment>
      {isTablet && (<MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />)}
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
          <div className={classes.headerContent}>
            <nav className={cx(classes.navLogo, invert && classes.invert)}>
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
            <nav className={cx(classes.navMenu, invert && classes.invert)}>
              {isDesktop && (
                <Scrollspy>
                  {scrollPosition > 100 ? (
                    <img src="/images/blue.png" alt="logo1" style={{ width: '3rem', height: "3rem"}} />
                  ) : (
                    <img src="/images/white.png" alt="artwork" style={{ width: '3rem', height: "3rem" }} />
                  )}
                  {menuList.map(item => (
                    <li>
                      <Button component={Link} to={item.toLowerCase()}>
                        <span className={classes.text}>
                          {item}
                        </span>
                      </Button>
                    </li>
                  ))}
                </Scrollspy>
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
