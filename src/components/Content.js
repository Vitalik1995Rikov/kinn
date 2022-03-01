import React from 'react';
import Header from '../components/Header';
import MapleCollection from '../components/MapleCollection';
import OurDesignStory from '../components/OurDesignStory';
import YourTable from '../components/YourTable';
import SignUp from '../components/SignUp';
import Text from './Text/Text';
import Footer from './Footer';
import Moments from './Moments';
import Essentials from './Essentials';
import Image from './Image';

const Content = () => {
  return (
    <div className="p-10">
      <Header />
      <Image />
      <Text />
      <MapleCollection />
      <Essentials />
      <OurDesignStory />
      <YourTable />
      <SignUp />
      <Moments />
      <Footer />
    </div>
  );
};

export default Content;
