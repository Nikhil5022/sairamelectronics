import React, { useState } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigator = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center p-2 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-40 fixed w-full top-0 bg-white">
        <div>
          <div className="flex">
            <p
              className="font-semibold text-xl cursor-pointer"
              onClick={() => {
                navigator("/");
              }}
            >
              SAIRAM ELECTRONICS
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-10">
          <div className="lg:hidden">
            <button
              onClick={handleMenuToggle}
              className="flex items-center justify-center bg-gray-200 p-2 rounded w-10 h-10"
            >
              {isMenuOpen ? (
                <span className="text-3xl pb-1">&times;</span>
              ) : (
                <span className="text-2xl">&#9776;</span>
              )}
            </button>
          </div>
          <div className="hidden lg:flex space-x-10 items-center">
            <p
              className="text-xl navitem font-light"
              onClick={() => {
                navigator("/services");
              }}
            >
              Services
            </p>
            <p
              className="text-xl navitem font-light"
              onClick={() => {
                navigator("/about");
              }}
            >
              About
            </p>
            <p
              className="text-xl navitem font-light"
              onClick={() => {
                navigator("/contact");
              }}
            >
              Contact
            </p>
            <button
              style={{ backgroundColor: "#2270E2" }}
              className="text-white pl-6 pr-6 pt-3 pb-3 rounded-md"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden fixed top-18 left-0 w-full bg-white overflow-hidden animate">
          <div className="transition-transform ease-in-out duration-300 transform">
            {/* Add your menu items here */}
            <p
              className="text-xl font-light m-4"
              onClick={() => {
                navigator("/services");
                setIsMenuOpen(false);
              }}
            >
              Services
            </p>
            <p
              className="text-xl font-light m-4"
              onClick={() => {
                navigator("/about");
                setIsMenuOpen(false);
              }}
            >
              About
            </p>
            <p
              className="text-xl font-light m-4"
              onClick={() => {
                navigator("/contact");
                setIsMenuOpen;
              }}
            >
              Contact
            </p>
          </div>
        </div>
      )}
    </>
  );
}
