import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxDots() {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.parallaxWrap, classes.parallaxBox)}>
      <ParallaxProvider>
        <div className={classes.innerParallax}>
          <Parallax
            className="figure"
            translateY={[-10, -10]}
          >
            <div className={classes.bigBox} />
          </Parallax>
          <Parallax
            className="figure"
            translateY={[-10, -10]}
          >
            <div className={classes.smallBox} />
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
