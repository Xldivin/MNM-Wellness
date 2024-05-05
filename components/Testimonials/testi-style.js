import { makeStyles } from 'tss-react/mui';

const testiStyles = makeStyles({ uniqId: 'testi' })(theme => ({
  root: {
    position: 'relative',
  },
  carousel: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    }
  },
  item: {
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7, 1, 0),
    },
    '&:focus': {
      outline: 'none'
    }
  },
  nav: {
    position: 'absolute',
    top: '50%',
    borderRadius: '50%',
    marginTop: -45,
    width: 36,
    zIndex: 3,
    height: 36,
    padding: 0,
    minWidth: 0,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    transform: theme.direction === 'rtl' ? 'scale(-1.6)' : 'scale(1.6)',
    '&:hover': {
      background: theme.palette.background.paper
    },
    '& i': {
      color: theme.palette.text.primary,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  parallaxWrap: {
    position: 'absolute',
    right: 20,
    left: 'auto',
    top: 300,
    height: 500,
    overflow: 'visible',
    width: 500,
    zIndex: 0
  },
  prev: {
    left: 6,
  },
  next: {
    right: 6,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
