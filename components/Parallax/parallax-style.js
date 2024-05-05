import { makeStyles } from 'tss-react/mui';

const parallaxStyles = makeStyles({ uniqId: 'parallax' })(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    zIndex: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& [class="figure"]': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute',
      '& svg': {
        position: 'absolute',
      }
    },
  },
  dotsWrap: {
    top: -200,
    left: -200
  },
  crossWrap: {
    zIndex: 10,
    top: -100,
    right: -120,
    left: 'auto'
  },
  parallaxDot: {
    fill: theme.palette.text.disabled,
    width: 1015,
    height: 800,
    opacity: 0.2,
    top: 90,
    left: 0,
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
    position: 'absolute',
  },
  parallaxBox: {
    width: '100%',
    height: 350,
    top: -2400,
    right: 0,
    position: 'absolute'
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default parallaxStyles;
