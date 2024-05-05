import { makeStyles } from 'tss-react/mui';

const subscribeStyles = makeStyles({ uniqId: 'subscribe' })(theme => ({
  root: {
    position: 'relative',
    textAlign: 'center',
  },
  parallaxWrap: {
    height: 570,
    width: '100%'
  },
  form: {
    background: theme.palette.background.paper,
    maxWidth: 700,
    margin: '0 auto',
    marginTop: theme.spacing(-55),
    width: '100%',
    display: 'block',
    color: theme.palette.text.secondary,
    position: 'relative',
    bottom: theme.spacing(-10),
    padding: theme.spacing(5, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 10),
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(5),
    },
    '& h4': {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(3)
    }
  },
  field: {
    margin: '10px'
  },
  button: {
    margin: '0 auto',
    minWidth: 185
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default subscribeStyles;
