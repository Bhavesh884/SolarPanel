// src/pages/VendorDetail.js
import { useParams, Link } from "react-router-dom";
import vendorsData from "./Vendor.json"; // Adjust path as needed
import Card from "./Card";
import Footer from "./Footer";

function VendorDetail() {
  const { vendorId } = useParams();
  const vendor = vendorsData.find((v) => v.id === parseInt(vendorId));

  return (
    <>
      <div className="p-6 bg-mybg text-mytext">
        {vendor ? (
          <>
            <div className=" w-full  bg-boxbg rounded p-6">
              <div className="">
                <h1 className="text-2xl font-bold mb-4">{vendor.name}</h1>
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-[50vw] md:h-[18vw] object-cover object-center shrink-0 mb-4 rounded"
                />
              </div>
              <div className="w-40% flex flex-col justify-end pb-[1.5vw]">
                <p className="mb-4">{vendor.description}</p>
                <p>
                  <strong>Address:</strong> {vendor.address}
                </p>
                <p>
                  <strong>Contact:</strong> {vendor.contact}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${vendor.email}`}
                    className="text-blue-500 underline"
                  >
                    {vendor.email}
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href={vendor.website}
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {vendor.website}
                  </a>
                </p>
              </div>
            </div>
            <div className=" w-full  bg-boxbg rounded px-6 my-4">
              <h2 className="text-2xl font-semibold mt-10 pt-8  px-2">
                Products
              </h2>
              <div className="grid md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {vendor.products.map((card, index) => (
                  <Card key={index} {...card} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <p>Vendor not found</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default VendorDetail;
