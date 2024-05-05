import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import Header from '../Header';
import Footer from '../Footer/Footer';

const useStyles = makeStyles({ uniqId: 'main_container' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
}));

function MainContainer(props) {
  const { classes } = useStyles();
  const {
    onToggleDark, onToggleDir, 
    children, invert
  } = props;

  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert={invert}
        />
        {children}
        <Footer toggleDir={onToggleDir} invert />
      </div>
    </Fragment>
  );
}

MainContainer.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  invert: PropTypes.bool,
};

MainContainer.defaultProps = {
  invert: false,
};

export default MainContainer;
