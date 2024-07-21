// src/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
        <div className="w-full md:w-auto mb-6 md:mb-0 flex flex-col sm:flex-row md:flex-col sm:gap-2 md:gap-0 items-center md:items-start">
          <img
            src="https://i.ibb.co/CzpgVFq/51.png"
            alt="Solruf Logo"
            className="mb-4 w-32 lg:w-48"
          />
          <div className="">
            <img
              src="https://i.ibb.co/vqS8MCs/FIEO-Logo-Trans-removebg-preview.png"
              alt="FIEO Logo"
              className="mb-4 w-16 lg:w-24"
            />
          </div>
          <p className="mb-2">WE ARE ON ONDC NETWORK</p>
        </div>

        <div className="w-full md:w-auto mb-6 md:mb-0">
          <h3 className="mb-4 font-semibold">LEGAL INFO</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-auto mb-6 md:mb-0">
          <h3 className="mb-4 font-semibold">COMPANY</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Channel Partner
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Book a solar session
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Solar Calculator
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-auto mb-6 md:mb-0">
          <h3 className="mb-4 font-semibold">CONTACT</h3>
          <address className="not-italic mb-4">
            D115, Neptune Magnet Mall, Eastern Business District, Bhandup West,
            Mumbai - 400078
          </address>
          <p className="mb-2">
            <a href="tel:+918976588792" className="hover:underline">
              +91 - 8976588792
            </a>
          </p>
          <p className="mb-4">
            <a href="mailto:support@solruf.com" className="hover:underline">
              support@solruf.com
            </a>
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:underline">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:underline">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:underline">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-2 bg-tertiary text-black py-2 text-center">
        &copy;SOLRUF INDIA PRIVATE LIMITED All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
