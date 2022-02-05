import React from 'react';
import Maple from './Maple';

const MapleCollection = () => {
  return (
    <div className="bg-amber-100 p-8">
      <span>Maple Board Collection</span>
      <div className="flex">
        <Maple />
      </div>
    </div>
  );
};

export default MapleCollection;
