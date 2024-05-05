import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxDots() {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.parallaxWrap, classes.dotsWrap)}>
      <ParallaxProvider>
        <div className={classes.innerParallax}>
          <Parallax
            translateY={[-30, 40]}
            className="figure"
          >
            <svg
              fill="#cccccc"
              width={902}
              height={1042}
              className={classes.parallaxDot}
            >
              <use xlinkHref="/images/decoration/dot-deco.svg#dot" />
            </svg>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
