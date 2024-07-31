import React, { useState } from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "../About/AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function Skill() {
 

  return (
    <ContactWrapper id="skill">

      <div className="Container">
        <div className="SectionTitle">Professional Skillset</div>
        <ScrollAnimation animateIn="fadeIn" >
          <div className="BigCard">

          <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
            
          </div>
        </ScrollAnimation>

      </div>
    </ContactWrapper>
  );
}

export default Skill;
