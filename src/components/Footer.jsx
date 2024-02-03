import React from "react";

export default function Footer() {
  return (
    <div
      className="flex justify-center items-center px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-40"
      style={{ backgroundColor: "#F4F8FD" }}
    >
      <div className="flex flex-col justify-center items-center text-center p-12 w-full max-w-4xl">
        <p className="text-4xl font-semibold m-3">Subscribe to Newsletter</p>
        <p
          style={{ color: "#4D4D4D", maxWidth: "80%" }}
          className="m-3 font-thin text-xl"
        >
          Enter your email address to register for our newsletter subscription!
        </p>
        <input
          type="text"
          className="w-full md:w-2/3 lg:w-1/2 border border-gray-300 rounded-sm p-2 m-3"
          placeholder="Email Address"
        />
        <button
          style={{ backgroundColor: "#2270E2", width: "100%", maxWidth: "250px" }}
          className="text-white pl-6 pr-6 pt-3 pb-3 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}
