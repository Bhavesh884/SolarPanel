// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";

import data from "./data.json";
import Home from "./Home";

import ProductDetail from "./ProductDetail";
import Products from "./Products";

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
    <div className="bg-secondary">
      <Router>
        <Navbar onSearch={handleSearchChange} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={
              <Products
                handleSubCategorySelect={handleSubCategorySelect}
                filteredCards={filteredCards}
              />
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetail cards={cards} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
