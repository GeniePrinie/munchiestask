import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-800 flex flex-col">
      <div className="pt-6 px-7">
        <div className="flex items-center gap-3">
          <div className="w-8">
            <img
              src="/images/logo/logowhite.png"
              alt="munchies logo"
              className="w-full"
            />
          </div>
          <h1 className="text-4xl text-white">Munchies</h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div
          className=" px-7 w-72 max-w-xl md:mx-auto 
          mx-0"
        >
          <h2
            className="text-5xl 
          text-white 
          font-['Inter_Tight']
          font-semibold
          tracking-tight
          leading-[0.95]
           max-w-xl
          [transform:scaleX(1.3)]
          origin-left"
          >
            Treat yourself.
          </h2>
          <p className="text-sm text-white pt-4">
            Find the best restaurant in your city and get it delivered to your
            place!
          </p>
        </div>
      </div>

      <div className="px-7 mb-12 md:max-w-xl md:mx-auto w-full">
        <div className="md:flex md:justify-center">
          <button
            onClick={() => navigate("/restaurants")}
            className="
             w-full
            md:w-[200px]
            items-center 
            bg-inherit
            border border-white
            hover:bg-green-700 
            text-white 
            px-8 
            py-3 
            rounded-lg 
            text-lg 
            transition-colors
            shadow-sm
            hover:shadow-md
            block
          "
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
