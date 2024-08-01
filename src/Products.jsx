import React from "react";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
import Card from "./Card";

const Products = ({ handleSubCategorySelect, filteredCards }) => {
  return (
    <>
      <div className="py-4 mt-8 container mx-auto bg-mybg">
        <div className="">
          <Dropdown
            label="Sub Category"
            options={[
              "Polycrystalline",
              "Monocrystalline",
              "Thin Film",
              "bifacial",
              "TopCon",
            ]}
            onSelect={handleSubCategorySelect}
          />
        </div>
      </div>
      <div className="bg-boxbg mt-2 rounded container mx-auto p-4">
        <div className="grid md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
