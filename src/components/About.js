import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import colorSharp2 from "../assets/img/color-sharp2.png"
import EWCIsha from "../assets/img/ewc-semifinal1-02.jpg"

export const About = () => {
  return (
    <section className="about" id="about">
        <img className="background-image-left-top" src={colorSharp} alt="Image" />
        <img className="background-image-right-bottom" src={colorSharp2} alt="Image" />
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-bx wow zoomIn">
                        <h2>About Me</h2>
                        <img className="EWCIsha1" src={EWCIsha} alt="Image of Isha Ingersol" />
                        <p>
                            I am <span>Isha Ingersol</span>, a 19-year-old from India. 
                            Coding is my passion, and I aspire to become a Software Developer or a Full-Stack Web Developer.
                            <br></br>
                            <br></br>
                            During my undergraduate program at the University of Birmingham Dubai, I had the honor of being selected as 
                            the <span>Student Representative</span> for Computer Science students in my sophomore year (Year 2). 
                            Additionally, I have been serving as a <span>Student Ambassador</span> for Open Days and Welcome Weeks, 
                            where I assist prospective students and guide new students to the university, ensuring they feel welcomed. 
                            Recently, I also took on the role of a <span>Marketing Student Ambassador</span> for the university.
                            <br></br>
                            <br></br>
                            Throughout my university journey, I have completed various projects, including <span>web development</span>, 
                            developing a <span>software solution</span> (theoretical), a colossal adventure game, and a text-based BINGO game. 
                            These projects have allowed me to gain <span>hands-on experience</span> and enhance my skills. 
                            <br></br>
                            <br></br>
                            I am currently enrolled in <span>Harvard University's CS50x</span> course, which has been incredibly interesting. 
                            The course covers the basics of Computer Science, along with Python, HTML, CSS, JavaScript, Scratch, Data Structures and Algorithms, Flask, and more. 
                            I plan to continue my learning journey by pursuing the <span>CS50P</span> and <span>CS50AI</span> courses (offered by Harvard University) in the future.
                            <br></br>
                            <br></br>
                            Apart from academics and tech, I have a keen interest in playing <span>badminton</span>, exploring 
                            <span>different varieties of food</span>, watching <span>"Shark Tank"</span>, and <span>driving</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}