import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import flag from 'public/images/flag-logo.png';

const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ar"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zh"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="en"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="de"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="id"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="pt"]': {
    backgroundPosition: '0 -79px'
  },
};

const headerStyles = makeStyles({ uniqId: 'header' })((theme, _params, classes) => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  fixed: {},
  openDrawer: {},
  header: {
    height: 'auto',
    color: theme.palette.text.primary,
    background: 'none',
    boxShadow: 'none',
    transition: 'all 0.5s ease-out',
    position: 'fixed',
    zIndex: 20,
    '& .MuiContainer-root': {
      padding: 0
    },
    '& > *': {
      [theme.breakpoints.down('lg')]: {
        padding: 0
      }
    },
    '& nav': {
      transition: 'all 0.5s ease-out',
    },
    [`&.${classes.fixed}`]: {
      position: 'fixed',
      top: 0,
      boxShadow: theme.shadows[4],
      background: theme.palette.background.paper,
      zIndex: 1000,
      [`& .${classes.logo}`]: {
        '& a': {
          color: theme.palette.text.primary,
          '& span': {
            display: 'none'
          }
        },
        '& img': {
          height: 64,
          width: 64,
          margin: 0
        }
      },
      [`& .${classes.bar}`]: {
        [theme.breakpoints.down('md')]: {
          backgroundColor: theme.palette.text.secondary,
          '&:after, &:before': {
            backgroundColor: theme.palette.text.secondary
          }
        }
      },
      '& nav': {
        padding: 0
      },
      [`& .${classes.icon}`]: {
        '& svg': {
          fill: theme.palette.text.secondary
        }
      },
      [`& .${classes.navMenu}`]: {
        [theme.breakpoints.up('sm')]: {
          padding: '12px 8px'
        }
      },
      [`& .${classes.navAuth}`]: {
        '& a': {
          color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
        },
        [`& .${classes.deco}`]: {
          display: 'none'
        }
      }
    },
    [`&.${classes.openDrawer}`]: {
      zIndex: 1600,
      boxShadow: 'none',
      [`& .${classes.logo}`]: {
        '& a': {
          color: theme.palette.text.primary,
        }
      },
    }
  },
  headerContent: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-start',
    },
    '& nav': {
      alignItems: 'center',
      display: 'flex',
      height: 'auto'
    }
  },
  logo: {
    textAlign: 'center',
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      color: theme.palette.text.primary,
      textTransform: 'uppercase',
      transition: 'color 0.5s ease-out',
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: 'normal',
      '& span': {
        display: 'none'
      }
    },
    '& img': {
      margin: `0 auto ${theme.spacing()}px`,
      display: 'block',
      transition: 'all 0.3s ease-out',
      width: 80,
      height: 80,
      [theme.breakpoints.down('sm')]: {
        height: 64,
        width: 64
      }
    }
  },
  active: {},
  invert: {},
  navLogo: {
    padding: theme.spacing(),
    [`&.${classes.invert}`]: {
      [`& .${classes.logo}`]: {
        '& a': {
          color: theme.palette.text.primary,
        }
      },
      [`& .${classes.mobileMenu}`]: {
        [`& .${classes.bar}`]: {
          [theme.breakpoints.down('md')]: {
            backgroundColor: theme.palette.text.secondary,
            '&:after, &:before': {
              backgroundColor: theme.palette.text.secondary
            },
          }
        }
      },
    }
  },
  text: {
    position: 'relative',
    zIndex: 1
  },
  navMenu: {
    padding: theme.spacing(3, 1),
    '& > *': {
      margin: 0,
      [theme.breakpoints.up('lg')]: {
        margin: theme.spacing(0, 1),
      }
    },
    [`&.${classes.invert}`]: {
      '& ul': {
        '& li': {
          '& a': {
            transition: 'all 0.3s ease-out',
            color: theme.palette.text.primary,
          }
        }
      }
    },
    '& ul': {
      listStyle: 'none',
      paddingLeft: theme.spacing(6),
      '& li': {
        [theme.breakpoints.up('lg')]: {
          margin: theme.spacing(0, 1),
        },
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          marginTop: theme.spacing(0.5),
          textTransform: 'uppercase',
          background: 'none !important',
          boxShadow: 'none',
          position: 'relative',
          padding: '6px',
          margin: theme.spacing(0, 1),
          minWidth: 0,
          color: theme.palette.text.primary,
          '&:after': {
            content: '""',
            height: 8,
            background: theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
            width: '0%',
            position: 'absolute',
            bottom: 10,
            zIndex: 0,
            left: '50%',
            transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
          },
          '&:hover': {
            transition: 'all 0.3s ease-out',
            '&:after': {
              width: '80%',
              left: 4,
              background: theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
            }
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light,
            '&:after': {
              borderBottomColor: theme.palette.primary.light,
              width: '60%',
              left: 6,
            },
          }
        }
      }
    }
  },
  navAuth: {
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-end',
    padding: '28px 24px 28px 0',
    '& a': {
      fontSize: 16,
      margin: theme.spacing(0, 1.5)
    }
  },
  textBtn: {
    paddingTop: '4px !important',
    paddingBottom: '4px !important',
    color: theme.palette.common.white
  },
  btnWhite: {
    border: `1px solid ${theme.palette.primary.main}`,
    lineHeight: '21px',
    color: theme.palette.primary.dark + '!important',
    background: theme.palette.common.white,
    '&:hover': {
      background: alpha(theme.palette.common.white, 0.8),
    }
  },
  deco: {
    width: 500,
    height: 300,
    borderRadius: 40,
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.dark,
    transform: 'rotate(-10deg)',
    position: 'absolute',
    right: -140,
    top: -190
  },
  langMenu: {
    textTransform: 'capitalize',
    '& i': {
      ...flagIcon
    }
  },
  modeMenu: {
    textTransform: 'capitalize',
  },
  icon: {},
  setting: {
    [`& .${classes.icon}`]: {
      padding: 0,
      fontSize: 32,
      transition: 'all 0.3s ease',
      [theme.breakpoints.up('sm')]: {
        color: theme.palette.common.white,
      },
    },
    [`& .${classes.active}`]: {
      transform: 'rotate(30deg)'
    }
  },
  titleMenu: {
    textTransform: 'capitalize'
  },
  bar: {},
  menu: {},
  menuOpen: {},
  paperNav: {
    width: '100%',
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileMenu: {
    [`& .${classes.bar}`]: {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary
      }
    }
  },
  mobileNav: {
    background: theme.palette.background.paper,
    [`& .${classes.menu}`]: {
      padding: theme.spacing(4),
      overflow: 'auto',
      top: theme.spacing(12),
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 180px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      },
    }
  },
  menuList: {
    textTransform: 'capitalize',
    '& span': {
      fontSize: 24
    }
  },
  dividerSidebar: {
    background: theme.palette.divider,
    margin: '1rem 0'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default headerStyles;
