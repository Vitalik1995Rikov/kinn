const data = [
  {
    id: 1,
    img: '../../assets/Moment1.png',
  },
  {
    id: 2,
    img: '../../assets/Moment2.png',
  },
  {
    id: 3,
    img: '../../assets/Moment3.png',
  },
  {
    id: 4,
    img: '../../assets/Moment4.png',
  },
];

const Moments = () => {
  return (
    <div>
      <span>#KinnMoments</span>
      <ul className="flex">
        {data.map((item) => (
          <li className="px-1">
            <img src={item.img} alt="img" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Moments;
