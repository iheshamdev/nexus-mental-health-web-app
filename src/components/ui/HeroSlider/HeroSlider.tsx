import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import './HeroSlider.scss';
import { Typography, Button } from '@components';

const { Title, Paragraph } = Typography;

interface HeroSliderProps {
  images: string[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  const settings = {
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    pagination: { clickable: true },
    // loop: true,
    // autoplay: { delay: 3000, disableOnInteraction: false },
    modules: [Autoplay, Pagination],
  };
  return (
    <Swiper {...settings} className="hero-slider">
      {images.map((image, index) => (
        <SwiperSlide key={index} style={{ backgroundImage: `url(${image})` }}>
          <div className="container">
            <div className="hero-slider__content">
              <Title>This is the place for your convenience</Title>
              <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard
              </Paragraph>
              <Button type="primary">Learn more</Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
