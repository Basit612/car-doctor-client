import React from "react";

const ChooseUs = () => {
  return (
    <div className="mr-4">
      <div className="text-center">
        <h2 className="text-2xl mt-3 text-[#ff3811]  font-normal">
          {" "}
          Core Features{" "}
        </h2>
        <h2 className="text-5xl mt-3 text-black font-bold">Why Choose Us</h2>
        <p className="mt-3">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-7 mb-10">
        <div className="card  bg-white text-primary-content">
          <div className="card-body  flex justify-center items-center">
            <img className="h-12 w-12 " src="/Group 71.png" alt="" />
            <p className="text-black">Expert Team</p>
          </div>
        </div>

        <div className="card  bg-[#ff3811] text-primary-content">
          <div className="card-body  flex justify-center items-center">
            <img className="h-12 w-12 " src="/Group 38729.png" alt="" />
            <p className="text-black">Expert Team</p>
          </div>
        </div>

        <div className="card  bg-white text-primary-content">
          <div className="card-body  flex justify-center items-center">
            <img className="h-12 w-12 " src="/Group.png" alt="" />
            <p className="text-black">24/7 Support</p>
          </div>
        </div>

        <div className="card  bg-white text-primary-content">
          <div className="card-body  flex justify-center items-center">
            <img className="h-12 w-12 " src="/Wrench.png" alt="" />
            <p className="text-black">Best Equipment</p>
          </div>
        </div>

        <div className="card  bg-white text-primary-content">
          <div className="card-body  flex justify-center items-center">
            <img className="h-12 w-12 " src="/Group 38730.png" alt="" />
            <p className="text-black">100% Guranty</p>
          </div>
        </div>

        <div className="card  bg-white text-primary-content">
          <div className="card-body  flex justify-center items-center">
            <img className="h-12 w-12 " src="/Group 38731.png" alt="" />
            <p className="text-black">Timely Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
