import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter' })(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(10),
      paddingBottom: 20
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  text: {
    flex: 1,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left'
    }
  },
  counterWrap: {
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(10, 0, 5)
    }
  },
  counterItem: {
    alignItems: 'center',
    margin: theme.spacing(0, 5),
    display: 'flex',
    [theme.breakpoints.between('sm', 'md')]: {
      textAlign: 'center',
      flexDirection: 'column'
    },
    '& figure': {
      margin: 0,
      marginRight: theme.spacing(5),
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: 10,
      width: 100,
      height: 100,
      lineHeight: '100px',
      textAlign: 'center',
      verticalAlign: 'middle',
      transform: 'rotate(45deg)',
      [theme.breakpoints.down('md')]: {
        transform: 'translateX(24px) rotate(45deg)',
      },
      [theme.breakpoints.down('sm')]: {
        width: 70,
        height: 70,
        lineHeight: '70px',
        transform: 'translateX(0) rotate(45deg)',
      },
      '& img': {
        transform: 'translateY(15px) rotate(-45deg)',
        filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
        width: '55%',
        maxHeight: '55%',
        margin: '0 auto'
      },
      '&:after': {
        content: "''",
        background: theme.palette.primary.main,
        width: 23,
        height: 23,
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        right: -10
      }
    },
    '& h4': {
      fontSize: 36,
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(3)
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 24
      }
    },
    '& h6': {
      color: theme.palette.text.secondary
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
