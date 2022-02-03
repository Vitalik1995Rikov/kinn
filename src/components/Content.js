import React from 'react';
import Header from '../components/Header';
import MapleCollection from '../components/MapleCollection';
import OurDesignStory from '../components/OurDesignStory';
import YourTable from '../components/YourTable';
import SignUp from '../components/SignUp';
import Text from './Text/Text';

const Content = () => {
  return (
    <div>
      <Header />
      <img src="../../assets/Rectangle.png" alt="img" />
      <Text />
      <MapleCollection />
      <OurDesignStory />
      <YourTable />
      <SignUp />
    </div>
  );
};

export default Content;
