import { HeroSlider } from '@components';
import React from 'react';
import image1 from '@assets/img/login-bg.jpg';

const Home: React.FC = () => {
  const images = [image1, image1, image1];
  return (
    <>
      <HeroSlider images={images} />
      <h1>Home page</h1>
    </>
  );
};

export default Home;
