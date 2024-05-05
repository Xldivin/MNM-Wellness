import { makeStyles } from 'tss-react/mui';
import { alpha, darken, lighten } from '@mui/material/styles';

const iconOne = '/images/education/parallax-one.png';
const iconTwo = '/images/education/parallax-two.png';
const iconThree = '/images/education/parallax-three.png';
const iconFour = '/images/education/parallax-four.png';

const useStyles = makeStyles({ uniqId: 'banner' })((theme, _params, classes) => ({
  decoTop: {},
  decoBottom: {},
  heroContent: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '50%',
      background: theme.palette.mode === '#01579b' ? alpha(theme.palette.primary.light, 0.3) : alpha(theme.palette.primary.dark, 0.7)
    },
    '& > div': {
      paddingLeft: 0,
      paddingRight: 0
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(6),
      marginBottom: 0
    }
  },
  bannerContainer: {
    position: 'relative'
  },
  bannerText: {
    position: 'relative',
    zIndex: 10,
    color: theme.palette.text.primary,
    padding: theme.spacing(4, 0),
    marginTop: theme.spacing(12),
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1, 1, 4),
      maxWidth: 640,
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center'
    }
  },
  title: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(3),
    display: 'inline-block',
    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(15),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),
    }
  },
  subtitle: {
    marginBottom: theme.spacing(3),
    fontSize: 24,
    fontWeight: theme.typography.fontWeightRegular,
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(8)
    },
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 20
    }
  },
  decoGrid: {
    position: 'static'
  },
  artworkBg: {
    position: 'absolute',
    top: -480,
    left: -100,
    borderRadius: 40,
    transform: 'rotate(-10deg)',
    width: '120%',
    overflow: 'hidden',
    height: 1024,
    background: theme.palette.mode === 'light' ? lighten(theme.palette.primary.light, 0.7) : darken(theme.palette.primary.dark, 0.7),
    [theme.breakpoints.down('md')]: {
      height: 1120
    },
    '& img': {
      zIndex: 5,
      position: 'absolute',
      bottom: -60,
      width: 400,
      transform: 'rotate(10deg)',
      right: '20%',
      [theme.breakpoints.down('lg')]: {
        right: '15%'
      }
    }
  },
  oval: {
    background: theme.palette.mode === 'light' ? theme.palette.secondary.light : theme.palette.secondary.dark,
    width: 250,
    height: 250,
    borderRadius: '50%',
    position: 'absolute',
    right: '27%',
    bottom: 60
  },
  back: {},
  front: {},
  parallaxScene: {
    right: 320,
    top: 480,
    transform: 'rotate(10deg)',
    transformOrigin: 'top',
    width: 1200,
    position: 'absolute',
    '& > div': {
      position: 'absolute',
      right: '28%',
      top: 100,
      '& > div': {
        position: 'absolute'
      }
    },
    [`&.${classes.back}`]: {
      zIndex: 4,
    },
    [`&.${classes.front}`]: {
      zIndex: 6,
    },
    '& span': {
      display: 'block',
      position: 'absolute'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  iconOne: {
    top: 240,
    left: -20,
    width: 510,
    height: 600,
    background: `url(${iconOne}) no-repeat`
  },
  iconTwo: {
    top: 270,
    left: -40,
    width: 450,
    height: 560,
    background: `url(${iconTwo}) no-repeat`
  },
  iconThree: {
    top: 30,
    left: -60,
    width: 400,
    height: 560,
    background: `url(${iconThree}) no-repeat`
  },
  iconFour: {
    top: 210,
    left: 250,
    width: 400,
    height: 560,
    background: `url(${iconFour}) no-repeat`
  },
  searchBanner: {
    position: 'relative',
    marginTop: theme.spacing(3),
    fontSize: 18,
    overflow: 'visible',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
    }
  },
  search: {
    fontSize: 18,
    width: '100%',
    '& input': {
      borderRadius: 10,
      padding: theme.spacing(4, 7, 3, 1),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4, 10, 3, 3)
      }
    },
    '& label': {
      fontSize: 20,
      left: theme.spacing(3),
      top: 4,
    },
    '& label + div': {
      marginTop: 0,
      '&:after, &:before': {
        display: 'none'
      }
    }
  },
  action: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  button: {
    width: 48,
    height: 48,
    color: theme.palette.primary.main,
    '& svg': {
      width: 48
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
