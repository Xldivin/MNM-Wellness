import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import brand from 'public/text/brand';
import routerLink from 'public/text/link';
import logo from 'public/images/education-logo.svg';
import { useText } from 'theme/common';
import Link from '../Link';
import useStyles from './form-style';

function AuthFrame(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { children, title, subtitle } = props;

  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <div className={classes.pageWrap}>
      {!isDesktop && (
        <div className={cx(classes.logo, classes.logoHeader)}>
          <Link href={routerLink.education.home}>
            <img src={logo} alt="logo" />
            <Typography component="span" className={text.subtitle2}>
              {brand.education.projectName}
            </Typography>
          </Link>
        </div>
      )}
      <Container maxWidth="lg" className={classes.innerWrap}>
        <Paper className={classes.formBox}>
          <IconButton
            href={routerLink.education.home}
            component={Link}
            className={classes.backtohome}
            size="large"
          >
            <span>
              <i className="ion-ios-home-outline" />
              <i className="ion-ios-arrow-round-back" />
            </span>
          </IconButton>
          <div className={classes.authFrame}>
            <Grid container spacing={0}>
              <Grid item md={5} xs={12}>
                {!isTablet && (
                  <div className={classes.greeting}>
                    <div className={classes.deco}>
                      <div className={classes.primaryLight} />
                      <div className={classes.secondaryMain} />
                      <div className={classes.secondaryLight} />
                    </div>
                    <div className={classes.logo}>
                      <img src={logo} alt="logo" />
                      <Typography className={text.subtitle2}>
                        {brand.education.projectName}
                      </Typography>
                    </div>
                    <Typography gutterBottom variant="h4">
                      { title }
                    </Typography>
                    <Typography variant="h6" className={text.subtitle2}>
                      { subtitle }
                    </Typography>
                  </div>
                )}
              </Grid>
              <Grid item md={7} xs={12}>
                <div className={classes.formWrap}>
                  {children}
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

AuthFrame.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

AuthFrame.defaultProps = {
  subtitle: '',
};

export default AuthFrame;
