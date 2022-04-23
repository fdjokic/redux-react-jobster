import React from "react";
import { Logo } from "../components";
import main from "../assets/images/main.svg";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
        <nav />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem atque
            maxime corporis magnam perspiciatis facilis veritatis fugiat ullam
            dolores laborum!
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
