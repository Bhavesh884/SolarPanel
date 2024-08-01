import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import vendorsData from "./Vendor.json";
import Footer from "./Footer";

const Vendors = () => {
  const [search, setSearch] = useState("");
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    setVendors(vendorsData);
  }, []);

  const filteredVendors = vendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="p-6 bg-mybg text-mytext min-h-[80vh]">
        <h1 className="text-2xl font-bold mb-4 ">Vendors</h1>
        <input
          type="text"
          placeholder="Search vendors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2  border-[0.5px] border-solid border-slate-500 rounded mb-4 bg-mybg"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
          {filteredVendors.map((vendor) => (
            <div
              key={vendor.id}
              className="border-[0.5px] border-solid border-slate-500 p-4 rounded-md bg-mybg shadow-lg"
            >
              <img
                src={vendor.image}
                alt={vendor.name}
                className="w-full h-32 object-cover mb-2"
              />
              <h2 className="text-xl font-semibold">{vendor.name}</h2>
              <p>{vendor.description}</p>
              <Link
                to={`/vendor/${vendor.id}`}
                className="w-full py-2 block mt-2 text-center bg-orange-600 text-white"
              >
                Visit Page
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vendors;
