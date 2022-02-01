import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import MapleCollection from './components/MapleCollection';
import OurDesignStory from './components/OurDesignStory';
import YourTable from './components/YourTable';
import SignUp from './components/SignUp';
// import LeftSide from "./components/LeftSide/LeftSide";
// import CenterSide from "./components/CenterSide/CenterSide";
// import RightSide from "./components/RightSide/RightSide";

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <MapleCollection />
      <OurDesignStory />
      <YourTable />
      <SignUp />
    </div>
  );
};

export default App;
