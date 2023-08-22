import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import colorSharp from "../assets/img/color-sharp.png";
import java from "../assets/logos/java-logo.svg";
import python from "../assets/logos/python-logo.svg";
import sql from "../assets/logos/postgresql.svg";
import WebDev from "../assets/logos/web-dev.svg";
import C from "../assets/logos/c.svg";
import CPlusPlus from "../assets/logos/c++.svg";
import JavaScript from "../assets/logos/logo-javascript.svg";
import Angular from "../assets/logos/angular-logo.svg";
import HTML from "../assets/logos/html-5.svg";
import CSS from "../assets/logos/css-3.svg";
import TailwindCSS from "../assets/logos/tailwind-css-2.svg";
import TypeScript from "../assets/logos/typescript.svg";
import ReactJS from "../assets/logos/react-2.svg";
import NodeJS from "../assets/logos/nodejs-icon.svg";
import Bootstrap from "../assets/logos/bootstrap-4-logo.svg";
// import APIs from "../assets/logos/apis.svg";
import PyTorch from "../assets/logos/pytorch-icon.svg";
import TensorFlow from "../assets/logos/tensorflow-2.svg";
import Git from "../assets/logos/git-icon.svg";
import WordPress from "../assets/logos/wordpress-icon.svg";
import Figma from "../assets/logos/figma.svg";
import Scratch from "../assets/logos/scratch-cat.svg";
import Haskell from "../assets/logos/haskell.svg";
import Agile from "../assets/logos/agile.svg";
import MS365 from "../assets/logos/microsoft-5.svg";
import { Type } from 'react-bootstrap-icons';

// Create an array of skill objects
const skills = [
  {
    name: 'Java',
    imgSrc: java,
    altText: 'Java Logo'
  },
  {
    name: 'Python',
    imgSrc: python,
    altText: 'Python Logo'
  },
  {
    name: 'PostgreSQL',
    imgSrc: sql,
    altText: 'PostgreSQL (SQL) Database Management System (DBMS)'
  },
  {
    name: 'Web Development',
    imgSrc: WebDev,
    altText: 'Web Development'
  },
  {
    name: 'C',
    imgSrc: C,
    altText: 'C (Programming Language)'
  },
  {
    name: 'C++',
    imgSrc: CPlusPlus,
    altText: 'C++ (Programming Language)'
  },
  {
    name: 'JavaScript',
    imgSrc: JavaScript,
    altText: 'JavaScript'
  },
  {
    name: 'AngularJS',
    imgSrc: Angular,
    altText: 'AngularJS/Angular.JS'
  },
  {
    name: 'HTML',
    imgSrc: HTML,
    altText: 'HTML'
  },
  {
    name: 'CSS',
    imgSrc: CSS,
    altText: 'CSS'
  },
  {
    name: 'TailwindCSS',
    imgSrc: TailwindCSS,
    altText: 'TailwindCSS'
  },
  {
    name: 'TypeScript',
    imgSrc: TypeScript,
    altText: 'TypeScript'
  },
  {
    name: 'ReactJS',
    imgSrc: ReactJS,
    altText: 'ReactJS/React.JS'
  },
  {
    name: 'NodeJS',
    imgSrc: NodeJS,
    altText: 'NodeJS/Node.JS'
  },
  {
    name: 'Bootstrap',
    imgSrc: Bootstrap,
    altText: 'React Bootstrap'
  },
//   {
//     name: 'APIs',
//     imgSrc: APIs,
//     altText: 'APIs for Web Development'
//   },
  {
    name: 'PyTorch',
    imgSrc: PyTorch,
    altText: 'PyTorch'
  },
  {
    name: 'TensorFlow',
    imgSrc: TensorFlow,
    altText: 'TensorFlow'
  },
  {
    name: 'Git',
    imgSrc: Git,
    altText: 'Git (GitHub an GitLab)'
  },
  {
    name: 'WordPress',
    imgSrc: WordPress,
    altText: 'Wordpress (No Code Web Development)'
  },
  {
    name: 'Figma',
    imgSrc: Figma,
    altText: 'Figma (No Code Web Development)'
  },
  {
    name: 'Scratch',
    imgSrc: Scratch,
    altText: 'Scratch (by MIT)'
  },
  {
    name: 'Haskell',
    imgSrc: Haskell,
    altText: 'Haskell (Programming Language)'
  },
  {
    name: 'Agile Development',
    imgSrc: Agile,
    altText: 'Agile Development (Project Management, Product Management)'
  },
  {
    name: 'Microsoft 365',
    imgSrc: MS365,
    altText: 'Microsoft Office, Microsoft Word, Microsoft PowerPoint, Microsoft Excel'
  },
];

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 3, // Number of slides to scroll
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{ marginTop: "10px" }}>Skills</h2>
              <p>Over the years, I have developed a <span>unique skillset</span>, which I have mentioned below.</p>
              <div className="slider-container">
                <Slider {...settings}>
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="item" style={{ marginBottom: "50px", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}>
                        <img src={skill.imgSrc} alt={skill.name} style={{ maxWidth: "200px", padding: "10px" }} />
                        <div className="skill-name">{skill.name}</div>  {/* Display skill name */}
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;