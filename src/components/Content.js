import React from 'react';
import Header from '../components/Header';
import MapleCollection from '../components/MapleCollection';
import OurDesignStory from '../components/OurDesignStory';
import YourTable from '../components/YourTable';
import SignUp from '../components/SignUp';
import Text from './Text/Text';
import Footer from './Footer';
import Moments from './Moments';

const Content = () => {
  return (
    <div className="p-10">
      <Header />
      <img src="../../assets/Rectangle.png" alt="img" />
      <Text />
      <MapleCollection />
      <OurDesignStory />
      <YourTable />
      <SignUp />
      <Moments />
      <Footer />
    </div>
  );
};

export default Content;
