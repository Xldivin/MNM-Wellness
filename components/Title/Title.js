import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useText } from 'theme/common';
import useStyles from './title-style';

export default function Title(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const {
    align, head, desc,
    color, dark
  } = props;
  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;
      case 'right':
        return classes.right;
      case 'center':
        return classes.center;
      default:
        return classes.left;
    }
  };
  const setColor = clr => {
    if (clr === 'secondary') {
      return classes.secondary;
    }
    return classes.primary;
  };
  return (
    <div className={cx(setAlign(align), classes.title, dark && classes.dark)}>
      <Typography variant="h4" className={cx(setColor(color), text.title)}>
        <span>
          {head}
        </span>
      </Typography>
      <Typography className={cx(classes.desc, text.subtitle2)}>
        {desc}
      </Typography>
    </div>
  );
}

Title.propTypes = {
  align: PropTypes.string,
  head: PropTypes.string.isRequired,
  desc: PropTypes.string,
  color: PropTypes.string,
  dark: PropTypes.bool,
};

Title.defaultProps = {
  align: 'left',
  dark: false,
  desc: '',
  color: 'primary',
};
