import React from 'react';

const names = [
  {
    id: 1,
    name: 'SHOP',
  },
  {
    id: 2,
    name: 'STYLE QUIZ',
  },
  {
    id: 3,
    name: 'ABOUT US',
  },
  {
    id: 4,
    name: 'STORIES',
  },
];

const Header = () => {
  return (
    <div className="flex justify-between">
      <ul className="flex">
        {names.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>KINN</div>
      <div className="flex">
        <img src="../../assets/Human.png" alt="img" />
        <img src="../../assets/Zoom.png" alt="img" />
        <img src="../../assets/Bag.png" alt="img" />
      </div>
    </div>
  );
};

export default Header;
