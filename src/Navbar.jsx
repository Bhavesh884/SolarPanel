import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaStore,
  FaCalculator,
  FaBlog,
  FaPhone,
  FaInfoCircle,
  FaHandshake,
  FaSitemap,
  FaSignInAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-primary p-2 text-xs md:text-sm text-white flex justify-between items-center">
        <span>support@solruf.com</span>
        <span>Pan India Services</span>
        <span className="flex items-center">
          <FaPhone className="mr-2" />
          +91-8976588792
        </span>
      </div>

      {/* Main Navbar */}
      <nav className="bg-secondary p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to={"/"}>
            <img
              src="https://i.ibb.co/CzpgVFq/51.png"
              alt="Solruf Logo"
              className=" w-32 sm:w-28 lg:w-40 mr-2 "
            />
          </Link>
          <div className="relative hidden lg:flex pl-[-1vw]">
            <input
              type="text"
              placeholder="Search Product"
              className="pl-4 bg-secondary pr-8 py-2 text-xs lg:text-sm rounded-md border border-white focus:outline-none lg:w-[14vw] text-white "
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="hidden md:flex items-center space-x-4 text-white text-xs lg:text-sm ">
            <Link to="/vendors" className="hover:underline">
              Vendors
            </Link>
            <Link to="/products" className="hover:underline">
              Products
            </Link>
            <a href="#" className="hover:underline">
              Solar Calculator
            </a>
            <a href="#" className="hover:underline">
              Blogs
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
          </div>
          <div className="hidden md:block text-xs lg:text-sm ">
            <button className="bg-orange-500 text-white py-2 px-4 rounded">
              Login Or Register
            </button>
          </div>
        </div>
        <button className="md:hidden text-white" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-mybg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 bg-secondary text-white">
          <img
            src="https://i.ibb.co/CzpgVFq/51.png"
            alt="Logo"
            className="h-8"
          />
          <button onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className="p-4">
          <input
            type="text"
            placeholder="Search Product"
            className="pl-4 pr-8 py-2 rounded-full border border-gray-400 focus:outline-none w-full"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            to={"/products"}
            className="flex items-center space-x-2 text-gray-800 hover:bg-gray-200 p-2 rounded"
          >
            <FaStore />
            <span>Products</span>
          </Link>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-800 hover:bg-gray-200 p-2 rounded"
          >
            <FaCalculator />
            <span>Solar Calculator</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-800 hover:bg-gray-200 p-2 rounded"
          >
            <FaBlog />
            <span>Blogs</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-800 hover:bg-gray-200 p-2 rounded"
          >
            <FaPhone />
            <span>Contact Us</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-800 hover:bg-gray-200 p-2 rounded"
          >
            <FaInfoCircle />
            <span>About Us</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-800 hover:bg-gray-200 p-2 rounded"
          >
            <FaHandshake />
            <span>Affiliate Partner</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-800 hover:bg-gray-200 p-2 rounded"
          >
            <FaSitemap />
            <span>Channel Partner</span>
          </a>
          <button className="flex items-center space-x-2 text-gray-800 hover:bg-gray-200 p-2 rounded mt-auto">
            <FaSignInAlt />
            <span>Login Or Register</span>
          </button>
        </nav>
      </div>

      {/* Enquiry Bar */}
      <div className="bg-tertiary p-2 text-sm text-white flex justify-center items-center">
        <span>In case of enquiry, contact us</span>
        <a
          href="https://wa.me/9189765888792"
          className="ml-4 flex items-center"
        >
          <FaWhatsapp className="mr-2" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Navbar;
