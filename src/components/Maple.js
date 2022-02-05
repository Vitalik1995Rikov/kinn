import React from 'react';

const data = [
  {
    id: 1,
    name: 'Maple Board - Short',
    img: '../../assets/MapleShort.png',
    price: '$98.00',
  },
  {
    id: 2,
    name: 'Maple Board - Long',
    img: '../../assets/MapleMiddle.png',
    price: '$125.00',
  },
  {
    id: 3,
    name: 'Maple Board - Wide',
    img: '../../assets/MapleWide.png',
    price: '$158.00',
  },
];

const Maple = () => {
  return (
    <div>
      <ul className="flex">
        {data.map((item) => (
          <li>
            <img src={item.img} alt="img" />
            <span>{item.name}</span>
            <div>{item.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Maple;
