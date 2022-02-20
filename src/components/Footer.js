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

const helpes = [
  {
    id: 1,
    name: 'FAQS+SHIPPING',
  },
  {
    id: 2,
    name: 'CONTACT',
  },
  {
    id: 3,
    name: 'TERMS',
  },
  {
    id: 4,
    name: 'TRADE',
  },
];

const Footer = () => {
  return (
    <div className="flex justify-between bg-[#717353] h-96 w-full mt-16 text-[#FFFFEF]">
      <div>
        <div>
          <span>2021 Kinn Home</span>
        </div>
        <div>
          <span>
            Need to get in touch? Just email us <br /> at hello@kinnhome.co
          </span>
        </div>
      </div>
      <div>
        <ul>
          {names.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {helpes.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="flex h-5">
        <img src="../../assets/facebook.png" alt="img" />
        <img src="../../assets/pinst.png" alt="img" />
        <img src="../../assets/inst.png" alt="img" />
      </div>
    </div>
  );
};

export default Footer;
