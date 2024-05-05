import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'error' })(theme => ({
  errorWrap: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(20),
    [theme.breakpoints.up('md')]: {
      minHeight: '90vh'
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(20),
    },
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  deco: {
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      height: 300,
      marginTop: theme.spacing(8)
    },
    '& h3': {
      color: 'rgba(0, 0, 0, 0.54)',
      fontSize: 106,
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightBold,
      paddingTop: 40,
      paddingLeft: 10,
      position: 'relative',
      zIndex: 1,
    },
    '&:before': {
      content: '""',
      width: 210,
      height: 210,
      background: theme.palette.secondary.light,
      borderRadius: 24,
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: theme.spacing(-1),
      left: 0,
    }
  },
  text: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(5),
      borderLeft: `1px solid ${theme.palette.divider}`,
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    },
  },
  button: {
    marginTop: theme.spacing(4)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
