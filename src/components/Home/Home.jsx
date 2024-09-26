import React from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import AppStoreBanner from '../AppStoreBanner/AppStoreBanner';
import Footer from '../Footer/Footer';
import Aabout from '../AAbout/Aabout';
import CarsList from '../CarsList/CarsList';

const Home = ({ theme }) => { // Destructure the theme prop if needed
  
  return (
    <div>
      {/* If the Hero component requires a 'theme' prop, uncomment and pass the theme prop */}
      <Hero theme={theme} />
      <Aabout />
      <Services />
      <CarsList />
      <Testimonial />
      <AppStoreBanner />
      <Footer />
    </div>
  );
};

export default Home;
