import React from "react";
import homeimg from "../assets/homeimg.jpg";
import maintainance from "../assets/maintainance.jpg";
import parts from "../assets/parts.jpg";
import tvrepair from "../assets/tvrepair.jpg";
import features from "../assets/features.jpg";
import owner from "../assets/owner.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigator = useNavigate();

  return (
    <>
      <div
        className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-40 py-6 pt-20 mt-16"
        style={{ backgroundColor: "#F4F8FD" }}
      >
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0 items-center">
            <p className="text-4xl sm:text-6xl font-bold m-3 text-center sm:text-left">
              SaiRam Electronics - Your Trusted Electrician
            </p>
            <p className="m-3 text-lg sm:text-xl font-thin text-gray-600 text-center sm:text-left">
              SaiRam Electronics provides reliable and efficient electrical
              services for all your electronic devices. Our skilled electricians
              are available to assist you with expert repairs and maintenance.
            </p>
            <div className="flex justify-center sm:justify-start mt-3">
              <button
                style={{ backgroundColor: "#2270E2" }}
                className="text-white px-6 py-3 rounded-md mx-auto mt-3 sm:mt-0 sm:ml-3 sm:mr-6"
                onClick={() => { navigator('/services'); }}
              >
                View All Services
              </button>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end w-full sm:w-1/2 mt-6 sm:mt-0">
            <img src={homeimg} alt="" className="w-full sm:w-5/6 rounded-md" />
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-40 py-6 mt-10 mb-10">
        <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left">
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
            <p className="m-3 font-semibold text-5xl">4.8</p>
            <p className="m-3 text-2xl font-semibold text-yellow-500">★★★★★</p>
            <p className="m-3 font-semibold">2,394 Ratings</p>
            <p className="m-3 font-semibold">Google Reviews</p>
          </div>
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0 mt-6 sm:mt-0">
            <p className="font-semibold text-3xl">
              Our Satisfied Customers Speak for Us
            </p>
            <p style={{ color: "#49A078" }} className="mt-6 font-semibold">
              JOHN CARTER
            </p>
            <p className="font-thin mt-6 text-xl">
              I was impressed with SaiRam Electronics’ professionalism and
              expertise in repairing my television. They were quick to diagnose
              the issue and provided efficient repairs. Highly recommended!
            </p>
          </div>
        </div>
      </div>
      <div
        className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-40 py-6 pt-10 pb-10"
        style={{ backgroundColor: "#F4F8FD" }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-5xl font-semibold mb-6 sm:mb-0 pt-6 pb-6">
            Our Services
          </p>
          <button
            style={{ backgroundColor: "#2270E2" }}
            className="text-white px-6 py-3 rounded-md mt-3 sm:mt-0 sm:ml-3 sm:mr-6 pt-3  pb-3"
            onClick={() => { navigator('/services'); }}
          >
            View All Services
          </button>
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
        <div className="flex items-center">
          <div className="flex-grow border-b border-gray-500"></div>
          <div className="mx-4">Features & Benifits</div>
          <div className="flex-grow border-b border-gray-500"></div>
        </div>

        <div className="flex flex-col sm:flex-row pt-20 pb-16">
          <div className="w-full sm:w-1/2 flex flex-col sm:flex-row justify-between">
            <div className="mb-8 sm:mb-0">
              <p className="font-semibold text-3xl m-2">Features</p>
              <p className="font-thin m-2 text-xl">Television Repairs</p>
              <p className="font-thin m-2 text-xl">Device Maintenance</p>
              <p className="font-thin m-2 text-xl">
                Electrical Parts for Televisions
              </p>
              <p className="font-thin m-2 text-xl">Expert Electricians</p>
              <p className="font-thin m-2 text-xl">24/7 Emergency Services</p>
            </div>
            <div>
              <p className="font-semibold text-3xl m-2">Efficient Repairs</p>
              <p className="font-thin m-2 text-xl">Reliable Maintenance</p>
              <p className="font-thin m-2 text-xl">Affordable Parts</p>
              <p className="font-thin m-2 text-xl">Expert Solutions</p>
              <p className="font-thin m-2 text-xl">Prompt Service</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
            <img
              src={features}
              alt=""
              className="w-full sm:w-3/4 m-2 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-40 py-6 pt-20 pb-20">
        <p className="text-5xl font-semibold m-3 text-center">Out team</p>
        <p className="m-3 font-thin text-xl text-center">
          Meet Our Team of Experienced Electricians
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <img src={owner} alt="" className="w-1/2 sm:w-1/4 m-3" />
          <div className="flex flex-col items-center">
            <p className="text-3xl font-semibold m-3">Gubbala Sriniasu</p>
            <p className="m-3 text-xl" style={{ color: "#49A078" }}>
              Owner & Master Electrician
            </p>
            <p className="font-thin m-3 text-center">
              With over 20 years of experience in the electrical industry, John
              is a master electrician who is passionate about providing
              exceptional service to his clients.
            </p>
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
