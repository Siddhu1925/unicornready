import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div
        animate={{ y: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <h1 class="dual-color">UNICORN READY</h1>
        <p className="description">
          Unicornready is a commerce digital transformationn agency focusing and
          delivering world class Magento commerce development service.
        </p>
      </div>
      <div className="home-btns">
        <div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <button
            className="hm-bt"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register  <span className="arrow"></span>
          </button>
        </div>
        <div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <button
            className="hm-bt"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Signin <span className="arrow"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
