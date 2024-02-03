import React from "react";
import maintainance from "../assets/maintainance.jpg";
import parts from "../assets/parts.jpg";
import tvrepair from "../assets/tvrepair.jpg";

export default function Services() {
  return (
    <>
    <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-40 py-6 pt-10 mt-12">
      <div className="flex flex-col  justify-start ">
        <div>
          <p className="text-5xl font-semibold mb-6 sm:mb-0 pt-6 pb-6 m-4">
            All Services
          </p>
          
        </div>
        <div className="pt-10 flex flex-wrap -mx-4">
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-8 px-4">
            <img src={tvrepair} className="w-full m-2 " alt="" />
            <p className="font-semibold text-xl m-2">Television Repairs</p>
            <p className="m-2 font-thin text-xl" style={{ color: "#4D4D4D" }}>
              We provide reliable and efficient television repairs for all major
              brands and models to ensure the longevity of your TV.
            </p>
            <div className="flex m-2">
              <button style={{ color: "#49A078" }}>Read More</button>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-8 px-4">
            <img src={parts} className="w-full m-2 " alt="" />
            <p className="font-semibold text-xl m-2">
              Electrical Parts for Televisions
            </p>
            <p className="m-2 font-thin text-xl" style={{ color: "#4D4D4D" }}>
              We offer a wide range of high-quality electrical parts for
              televisions, ensuring that you can find the right part for your TV
              at SaiRam Electronics.
            </p>
            <div className="flex m-2">
              <button style={{ color: "#49A078" }}>Read More</button>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-8 px-4">
            <img src={maintainance} className="w-full m-2 " alt="" />
            <p className="font-semibold text-xl m-2">Device Maintenance</p>
            <p className="m-2 font-thin text-xl" style={{ color: "#4D4D4D" }}>
              Our device maintenance services are designed to keep your
              electronic devices running smoothly and efficiently, preventing
              costly repairs and hardware malfunctions.
            </p>
            <div className="flex m-2">
              <button style={{ color: "#49A078" }}>Read More</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-40 py-6 pt-10 pb-20 text-center">
        <p className="text-5xl font-semibold m-3">Client Testimonials</p>
        <p className="font-thin text-xl pt-2 m-3">
          Hear What Our Clients Have to Say About Us
        </p>
        <div className="flex flex-col space-y-6 items-center">
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="w-full sm:w-1/2 m-3">
              <p className="m-3 text-xl" style={{ color: "#49A078" }}>
                ★★★★★
              </p>
              <p className="m-2 font-thin">
                SaiRam Electronics' electrical parts for televisions are of the
                highest quality. They have a wide range of parts available and
                are always ready to assist with any issues.
              </p>
              <p className="font-semibold text-xl m-3">John Doe</p>
            </div>
            <div className="w-full sm:w-1/2 m-3">
              <p className="m-3 text-xl" style={{ color: "#49A078" }}>
                ★★★★★
              </p>
              <p className="m-2 font-thin">
                I was in a bind and needed urgent repairs for my television, and
                SaiRam Electronics came through for me. Their quick response and
                efficient service saved the day.
              </p>
              <p className="font-semibold text-xl m-3">JOHN CARTER</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 m-3">
              <p className="m-3 text-xl" style={{ color: "#49A078" }}>
                ★★★★★
              </p>
              <p className="m-2 font-thin">
                SaiRam Electronics' electricians are professional, courteous and
                knowledgeable. They provided prompt service and exceeded my
                expectations.
              </p>
              <p className="font-semibold text-xl m-3">EMMA RODGRIGUEZ</p>
            </div>
            <div className="w-full sm:w-1/2 m-3">
              <p className="m-3 text-xl" style={{ color: "#49A078" }}>
                ★★★★★
              </p>
              <p className="m-2 font-thin">
                I have used SaiRam Electronics for all my electronic repairs and
                maintenance needs and have never been disappointed. Their
                expertise and professionalism are unmatched.
              </p>
              <p className="font-semibold text-xl m-3">DAVID WILSON</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
