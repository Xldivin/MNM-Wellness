import PropTypes from 'prop-types';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'next-i18next';
import useStyles from './header-style';
import Link from '../Link';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

function MobileMenu(props) {
  const { classes, cx } = useStyles();
  const { toggleDrawer, open, onOpenSchedule } = props;
  const { t, i18n } = useTranslation('common');
  const curLang = '/' + i18n.language;

  const [menuList] = useState([
    "Home",
    "About",
    "Service",
    "Testimonials",
    "Contact"
  ]);

  const SideList = () => (
    <div
      className={classes.mobileNav}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={cx(classes.menu, open && classes.menuOpen)}>
        <List component="nav">
          {menuList.map((item, index) => (
            <ListItem
              button
              component="a"
              href={`#${item}`}
              key={index.toString()}
              style={{ animationDuration: index * 0.15 + 's' }}
            >
              <Button component={Link} to={item.toLowerCase()}>
                <ListItemText primary={item} className={classes.menuList} />
              </Button>
            </ListItem>
          ))}
          {onOpenSchedule && (
            <ListItem style={{ marginTop: '16px' }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  toggleDrawer();
                  onOpenSchedule();
                }}
                style={{ borderRadius: '24px', fontWeight: 700 }}
              >
                Schedule Tour
              </Button>
            </ListItem>
          )}
        </List>
      </div>
    </div>
  );

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{
        paper: classes.paperNav
      }}
    >
      <SideList />
    </SwipeableDrawer>
  );
}

MobileMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onOpenSchedule: PropTypes.func
};

MobileMenu.defaultProps = {
  onOpenSchedule: null
};

export default MobileMenu;
