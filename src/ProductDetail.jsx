import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import Footer from "./Footer";

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
    <>
      <div className="container mx-auto p-4 mt-8 mb-[8vw]">
        <div className="bg-[#24273C] text-white rounded p-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-sm"
            />
            <div className="flex mt-4 space-x-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Product ${index}`}
                  className="w-24 h-24 rounded-sm"
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-white">{product.description}</p>
            <div className="mt-4">
              <input
                type="text"
                readOnly
                value={`https://links.solruf.com/products/${id}`}
                className="border rounded-md p-2 w-full bg-secondary text-white"
              />
              <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md">
                Copy
              </button>
            </div>
            <p className="mt-4 text-xl font-semibold">
              Avg. Pricing: {product.price} per watt ₹
            </p>
          </div>
        </div>
        <div className="mt-8 bg-[#24273C] text-white p-4 rounded">
          <h2 className="text-2xl font-bold">Features</h2>
          <div className=" mt-4">
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
        <div className="mt-8 bg-[#24273C] text-white rounded p-4">
          <h2 className="text-2xl font-bold">Create an Enquiry</h2>
          <form className=" mt-4" onSubmit={handleSubmit}>
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="pinCode"
                placeholder="Pin Code"
                value={formData.pinCode}
                onChange={handleChange}
                className="border rounded-md p-2 w-full bg-secondary text-white"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="border rounded-md p-2 w-full bg-secondary text-white"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City / District"
                value={formData.city}
                onChange={handleChange}
                className="border rounded-md p-2 w-full bg-secondary text-white"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="border rounded-md p-2 w-full bg-secondary text-white"
                required
              />
              <input
                type="date"
                name="dateOfDelivery"
                placeholder="Date of delivery"
                value={formData.dateOfDelivery}
                onChange={handleChange}
                className="border rounded-md p-2 w-full bg-secondary text-white "
                required
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity / Capacity"
                value={formData.quantity}
                onChange={handleChange}
                className="border rounded-md p-2 w-full bg-secondary text-white"
                min="1"
                required
              />
              <select
                name="unitType"
                value={formData.unitType}
                onChange={handleChange}
                className="border rounded-md p-2 w-full bg-secondary text-white"
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
              className="border rounded-md p-2 w-full mt-4 bg-secondary text-white"
              rows="4"
              required
            />
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
