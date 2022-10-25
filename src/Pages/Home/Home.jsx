import React from "react";
import hero from "../../assets/hero.png";
import "./Home.css";

const Home = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row lg:justify-between lg:ml-20 items-center home gap-6'>
      <div>
        <h1 className='text-6xl px-5 text-center lg:text-left font-bold leading-normal text-blue-800'>
          Learn With Your
          <br /> Own Pace
        </h1>
      </div>
      <div className='hero-image'>
        <img src={hero} alt='' />
      </div>
    </div>
  );
};

export default Home;
