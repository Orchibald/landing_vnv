import React, { useState } from "react";
import { Card } from "./Card";
import { Service } from "./Service";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Brief } from "./Brief";
import { FAQ } from "./FAQ";
import { SocialNetworks } from "./SocialNetworks";

type Props = {
  number: number[];
};

export const Main: React.FC<Props> = ({ number }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const buttonText = isHovered ? 'CLICK ME!' : 'I WANT IT';

  return (
    <div className="main">
      <div className="main_motto">
        <span className="main_motto-text">
          <strong>E</strong>asy, quality, IT - <br />
          winning <strong>solutions</strong> <br />
          for your business
        </span>
        <span className="main_want">
          <button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="main_want-btn"
          >
            {buttonText}
          </button>
        </span>
      </div>
      <div className="main_why">
        <h2 className="headline">Why us?</h2>
        <div className="main_why-cards">
          {number.map((number, index) => (
            <Card key={index} number={number} />
          ))}
        </div>
        <div className="main_services">
          <h2 className="headline">Services</h2>
          <Service />
        </div>
      </div>
      <Projects />
      <Contact />
      <Brief />
      <FAQ />
      <SocialNetworks />
    </div>
  );
}