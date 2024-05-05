import { makeStyles } from 'tss-react/mui';

const titleStyles = makeStyles({ uniqId: 'title' })((theme, _params, classes) => ({
  dark: {},
  desc: {},
  primary: {},
  secondary: {},
  left: {
    textAlign: 'left',
    '& h4': {
      '&:before': {
        left: -2
      }
    }
  },
  right: {
    textAlign: 'right',
    '& h4': {
      '&:before': {
        right: -2
      }
    }
  },
  center: {
    textAlign: 'center',
    '& h4': {
      '&:before': {
        width: '80%',
        left: '10%'
      }
    }
  },
  title: {
    marginBottom: theme.spacing(3),
    '& h4': {
      textTransform: 'capitalize',
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(),
      position: 'relative',
      display: 'inline-block',
      '& span': {
        position: 'relative'
      },
      [`&.${classes.primary}`]: {
        '&:before': {
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
        }
      },
      [`&.${classes.secondary}`]: {
        '&:before': {
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.secondary.light : theme.palette.secondary.dark,
        }
      },
      '&:before': {
        content: '""',
        height: 15,
        width: '90%',
        position: 'absolute',
        bottom: 10,
        zIndex: 0,
        [theme.breakpoints.down('sm')]: {
          height: 8
        }
      }
    },
    [`&.${classes.dark}`]: {
      '& h4': {
        color: theme.palette.common.white,
        '&:before': {
          backgroundColor: 'rgba(255, 255, 255, 0.5) !important'
        }
      },
      [`& .${classes.desc}`]: {
        position: 'relative',
        color: theme.palette.common.white
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default titleStyles;
