import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Akhand Pratap Singh</strong>.
              Experienced Senior React JS Developer with 5 years of hands-on
              experience in software engineering.Proficient in building robust
              and scalable web applications using JavaScript, Redux, TypeScript,
              React JS, and other modern technologies. Adept at collaborating
              with cross-functional teams and following Agile methodologies to
              deliver high-quality products.
            </ScrollAnimation>

            <br />
  

            <ScrollAnimation animateIn="fadeInLeft">
              Apart from coding I love to play Video Games and exploring new
              things and places.
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
