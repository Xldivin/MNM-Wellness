import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { useText } from 'theme/common';
import useStyles from './cards-style';

export default function General(props) {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const {
    img,
    title,
    desc,
    rating,
    price
  } = props;
  return (
    <Paper className={classes.generalCard}>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className={classes.desc}>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography className={text.paragraph}>
          {desc}
        </Typography>
        <div className={classes.property}>
          <div className={classes.rating}>
            {[...Array(rating)].map((e, index) => (
              <StarIcon className={classes.starIcon} key={index.toString()} />
            ))}
          </div>
          <strong>
            $
            {price}
          </strong>
        </div>
        <Button
          className={classes.button}
          color="primary"
          variant="outlined"
        >
          Explore
        </Button>
      </div>
    </Paper>
  );
}

General.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
