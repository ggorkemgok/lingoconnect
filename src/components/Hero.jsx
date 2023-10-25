import React from "react";
import friendsImage from "../assets/Friends-Background.jpg";
import "./hero.css";
import logo from "../assets/LingoConnect-Logo.jpeg";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const Hero = () => {
  return (
    <section className="h-screen bg-cover bg-center flex justify-center items-center">
      <div className="text-center">
        <img src={logo} alt="Logo" className="w-[50%] mx-auto rounded-lg opacity-70" />
        <h1 className="text-4xl md:text-6xl text-amber-600 mt-4 bg-black bg-opacity-50 rounded-lg" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>Welcome to LingoConnect!</h1>
        <ScrollLink to="contentSection" smooth={true} duration={500}>
        <button className="jumpingButton">More</button>
      </ScrollLink>
        
      </div>
    </section>
  );
};

export default Hero;
