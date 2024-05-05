import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'next-i18next';
import navMenu from '../Header/menu';
import useStyles from './pagenav-style';

function createData(id, name, url) {
  return {
    id,
    name,
    url,
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function PageNav() {
  const { t } = useTranslation('common');
  const [show, setShow] = useState(false);
  let flagShow = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagShow = (scroll > 500);
    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const { classes, cx } = useStyles();
  const [menuList] = useState([
    createData(1, navMenu[0], '#' + navMenu[0].replace(/ /g, '_')),
    createData(2, navMenu[1], '#' + navMenu[1].replace(/ /g, '_')),
    createData(3, navMenu[2], '#' + navMenu[2].replace(/ /g, '_')),
    createData(4, navMenu[3], '#' + navMenu[3].replace(/ /g, '_'))
  ]);
  return (
    <div className={cx(classes.pageNav, show && classes.show)}>
      <nav className={classes.sectionNav}>
        <Scrollspy
          items={navMenu}
          currentClassName="active"
        >
          { menuList.map(item => (
            <li
              key={item.id.toString()}
              style={{ top: 30 * (navMenu.length - item.id) }}
              data-id={item.id}
            >
              <Tooltip
                title={t('education-landing.header_' + item.name)}
                placement="left"
                classes={{
                  tooltip: classes.tooltip
                }}
              >
                <span>
                  <LinkBtn href={item.url} />
                </span>    
              </Tooltip>
            </li>
          )) }
        </Scrollspy>
      </nav>
    </div>
  );
}

export default PageNav;
