import React from 'react';
import images from "../Images/index";

const ItemsCard = ({ mydata }) => {
  const { id, title } = mydata;

  return (
    <div className=' border p-5 border-blue-700'>
      <div className="">
        <img src={images.images1} className='w-[239px] ' />
      </div>
      <div className="">
        <p className="text-blue-500 p-4">{id}</p>
        <p className="text-red-600 p-4">{title}</p>
        <p><a href="#" className="text-blue-600 p-4 flex hover:underline">See all Offers</a></p>
      </div>
    </div>
  );
};

export default ItemsCard;
