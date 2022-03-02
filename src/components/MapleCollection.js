import React from 'react';
import Maple from './Maple';

const MapleCollection = () => {
  return (
    <div className="bg-[#FFFFEF] my-6 px-4 py-4">
      <div className="flex justify-center">
        <span className="py-16">Maple Board Collection</span>
      </div>
      <div className="flex justify-center">
        <Maple />
      </div>
    </div>
  );
};

export default MapleCollection;
