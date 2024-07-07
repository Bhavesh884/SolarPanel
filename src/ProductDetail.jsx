import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

const ProductDetails = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));

  const [formData, setFormData] = useState({
    pinCode: "",
    state: "",
    city: "",
    address: "",
    dateOfDelivery: "",
    quantity: 1,
    unitType: "Wp",
    enquiryDetail: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Submitted: ", formData);
    // Add API call or further form submission handling here
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 p-4">
          <img src={product.image} alt={product.name} className="w-full" />
          <div className="flex mt-4 space-x-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index}`}
                className="w-24 h-24"
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="mt-4">
            <input
              type="text"
              readOnly
              value={`https://links.solruf.com/products/${id}`}
              className="border rounded-md p-2 w-full"
            />
            <button className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded-md">
              Copy
            </button>
          </div>
          <p className="mt-4 text-xl font-semibold">
            Avg. Pricing: {product.price} per watt ₹
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Features</h2>
        <div className="bg-white shadow-md rounded-lg p-4 mt-4">
          <div className="flex justify-between">
            <div>Average Price</div>
            <div>{product.price} per watt ₹</div>
          </div>
          <div className="flex justify-between mt-2">
            <div>Open Circuit Voltage</div>
            <div>{product.voltage}</div>
          </div>
          <div className="flex justify-between mt-2">
            <div>Short Circuit Current</div>
            <div>{product.current}</div>
          </div>
          <div className="flex justify-between mt-2">
            <div>Frame</div>
            <div>{product.frame}</div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Create an Enquiry</h2>
        <form
          className="bg-white shadow-md rounded-lg p-4 mt-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="pinCode"
              placeholder="Pin Code"
              value={formData.pinCode}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City / District"
              value={formData.city}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
            />
            <input
              type="date"
              name="dateOfDelivery"
              placeholder="Date of delivery"
              value={formData.dateOfDelivery}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity / Capacity"
              value={formData.quantity}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              min="1"
              required
            />
            <select
              name="unitType"
              value={formData.unitType}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
            >
              <option value="Wp">Wp</option>
              <option value="KW">KW</option>
              <option value="MW">MW</option>
            </select>
          </div>
          <textarea
            name="enquiryDetail"
            placeholder="Type your enquiry detail here"
            value={formData.enquiryDetail}
            onChange={handleChange}
            className="border rounded-md p-2 w-full mt-4"
            rows="4"
            required
          />
          <button
            type="submit"
            className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-md"
          >
            SUBMIT ENQUIRY
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
