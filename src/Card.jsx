// src/Card.jsx
import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  id,
  name,
  title,
  category,
  subCategory,
  brand,
  price,
  voltage,
}) => {
  return (
    <div className="bg-mybg text-mytext shadow-md rounded-lg overflow-hidden m-4 flex flex-col">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src="https://th.bing.com/th/id/OIP.qRRPj9J0_clslBK2l8lXHgHaEK?rs=1&pid=ImgDetMain"
          alt={title}
          className="min-w-full h-48 object-cover object-center"
        />
      </div>
      <div className="text-sm sm:text-base lg:text-lg p-4 flex-1">
        <h2 className=" font-bold mb-2 ">{name}</h2>
        <p className="  mb-1">
          <strong>Category:</strong> {category}
        </p>
        <p className="mb-1">
          <strong>Sub Category:</strong> {subCategory}
        </p>
        <p className=" mb-1">
          <strong>Brand:</strong> {brand}
        </p>
        <p className=" mb-1">
          <strong>Average Price:</strong> {price}
        </p>
        <p className="">
          <strong>Open Circuit Voltage:</strong> {voltage}
        </p>
      </div>
      <div className="p-4 pt-2 text-sm sm:text-base lg:text-lg uppercase">
        <Link
          to={`/product/${id}`}
          className=" w-full text-center font-semibold bg-orange-600 text-white py-2 px-4 rounded inline-block"
        >
          Enquiry
        </Link>
      </div>
    </div>
  );
};

export default Card;
