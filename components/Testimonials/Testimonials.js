import React from 'react';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import Title from '../Title';
import TestiCard from '../Cards/Testimonial';
import useStyle from './testi-style';
import DotParallax from '../Parallax/Dots';

const testiContent = [
  {
    text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    name: 'John Doe',
    title: 'Chief Digital Officer',
  },
  {
    text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jena Doe',
    title: 'Graphic Designer',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jihan Doe',
    title: 'CEO Software House',
  },
  {
    text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
  },
];

function Testimonials() {
  const { t } = useTranslation('common');

  const { classes } = useStyle();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    arrows: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  };
  return (
    <div className={classes.root}>
      <div className={classes.parallaxWrap}>
        <DotParallax />
      </div>
      <Title
        head= "Testimonials"
        align="center"
        color="primary"
      />
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel {...settings}>
            {testiContent.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <TestiCard
                  text={item.text}
                  name={item.name}
                />
              </div>
            ))}
          </Carousel>
          <div
            style={{
              width: '120px',
              height: '4px',
              backgroundColor: 'rgba(0, 188, 212, 0.2)',
              borderRadius: '2px',
              margin: '24px auto 0',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <div
              style={{
                height: '100%',
                backgroundColor: '#00BCD4',
                borderRadius: '2px',
                animation: 'slideProgress 3s linear infinite'
              }}
            />
          </div>
          <style jsx global>{`
            @keyframes slideProgress {
              0% { width: 0%; }
              100% { width: 100%; }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
