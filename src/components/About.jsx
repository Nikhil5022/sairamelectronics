import React from "react";
import about from "../assets/about.jpg";
import owner from "../assets/owner.jpg";

export default function About() {
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-40 py-6 pt-10 mt-12">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
            <p className="font-semibold text-5xl m-3 text-center sm:text-left">
              Mission statement
            </p>
            <p className="font-thin m-3 text-xl text-center sm:text-left">
              At SaiRam Electronics, we are committed to providing reliable and
              professional electrical services to our clients. From television
              repairs to device maintenance and electrical parts for
              televisions, we offer a wide range of services to meet your needs.
              Our skilled electricians are available to provide timely and
              efficient repairs for all your electronic devices. We are
              dedicated to providing exceptional service and ensuring that every
              client is satisfied with our work.
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <img src={about} alt="" className="w-full rounded-md" />
          </div>
        </div>
      </div>
      <div
        className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-40 py-6 pt-10 mt-16"
        style={{ backgroundColor: "#F4F8FD" }}
      >
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
