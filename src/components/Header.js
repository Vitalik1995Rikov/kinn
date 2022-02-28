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
    <div className="flex justify-between content-center p-10">
      <ul className="flex">
        {names.map((item) => (
          <li className="px-4" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
      <div>KINN</div>
      <div className="flex">
        <img className="px-2" src="../../assets/Human.png" alt="img" />
        <img className="px-2" src="../../assets/Zoom.png" alt="img" />
        <img className="px-2" src="../../assets/Bag.png" alt="img" />
      </div>
    </div>
  );
};

export default Header;
