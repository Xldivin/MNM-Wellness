import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxCross() {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.parallaxWrap, classes.crossWrap)}>
      <ParallaxProvider>
        <div className={classes.innerParallax}>
          <Parallax
            translateY={[0, 0]}
            className="figure"
          >
            <div className={classes.parallaxCross} />
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
