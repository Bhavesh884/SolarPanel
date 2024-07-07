// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./Card";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import data from "./data.json";
import Footer from "./Footer";
import ProductDetail from "./ProductDetail";

const App = () => {
  const [cards, setCards] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCards(data);
  }, []);

  const handleSubCategorySelect = (option) => {
    setSelectedSubCategory(option);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredCards = cards.filter((card) => {
    return (
      (!selectedSubCategory || card.subCategory === selectedSubCategory) &&
      (!searchTerm ||
        card.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <Router>
      <Navbar onSearch={handleSearchChange} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="p-4 mt-2 container mx-auto bg-[#f5f5f5]">
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
              <div className="bg-slate-100 mt-2 container mx-auto p-4">
                <div className="grid md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredCards.map((card, index) => (
                    <Card key={index} {...card} />
                  ))}
                </div>
              </div>
              <Footer />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetail cards={cards} />} />
      </Routes>
    </Router>
  );
};

export default App;
