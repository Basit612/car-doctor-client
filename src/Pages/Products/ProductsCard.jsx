import React from 'react';

const ProductsCard = ({product}) => {
  const { title,img,price}=product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold flex justify-center">{title}</h2>
        <p className="text-xl text-[#ff3811] text-center">Price: ${price}</p>
        <div className="card-actions">
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;