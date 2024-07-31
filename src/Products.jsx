import React from "react";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
import Card from "./Card";

const Products = ({ handleSubCategorySelect, filteredCards }) => {
  return (
    <>
      <div className="p-4 mt-8 container mx-auto bg-secondary">
        <div className="mx-4 sm:mx-20">
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
      <div className="bg-secondary mt-2 container mx-auto p-4">
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
