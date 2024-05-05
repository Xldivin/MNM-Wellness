import { makeStyles } from 'tss-react/mui';

const blogStyles = makeStyles({ uniqId: 'blog' })(theme => ({
  parallaxWrap: {
    position: 'absolute',
    left: 200,
    top: 200,
    width: 500
  },
  props: {
    '& > div': {
      width: 440,
      height: 2
    },
    '&:focus': {
      outline: 'none'
    }
  },
  floatingTitle: {
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2),
      width: 300,
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: '3.5%',
      top: theme.spacing(15),
      width: 370
    },
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  carousel: {
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      marginBottom: -20
    }
  },
  item: {
    padding: theme.spacing(0, 1),
    marginBottom: theme.spacing(5),
    '&:focus': {
      outline: 'none'
    },
    '& > *': {
      margin: '0 auto'
    }
  },
  link: {
    padding: 0,
    '& span': {
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
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
  prev: {
    left: 6,
  },
  next: {
    right: 6,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default blogStyles;
