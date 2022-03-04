import React from 'react';

const YourTable = () => {
  return (
    <div className="flex bg-[#FFFFEF]">
      <div className="w-3/5 p-10">
        <div className="flex justify-center text-xl">
          <h1 className="text-[#56593D]">Your Table Your Time</h1>
        </div>
        <p className="p-5 text-center text-[#56593D]">
          Our modern lives keep us in constant motion. But what keeps us moving isnot always what
          moves us. Our time at the table is our pause button. Meals can become moments and moments
          can become memories. So grab a plate, pull up a seat, and stay a while
        </p>
      </div>
      <div className="p-10">
        <img src="../../assets/YourTable.png" alt="img" />
      </div>
    </div>
  );
};

export default YourTable;
