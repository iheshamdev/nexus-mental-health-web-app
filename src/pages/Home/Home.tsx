import { HeroSlider } from '@components';
import React from 'react';
import image1 from '@assets/img/login-bg.jpg';
import AnnouncementsSection from './Announcements';
import './Home.scss';

const Home: React.FC = () => {
  const images = [image1, image1, image1];
  return (
    <>
      <HeroSlider images={images} />
      <div className="container ">
        <AnnouncementsSection />
      </div>
    </>
  );
};

export default Home;
