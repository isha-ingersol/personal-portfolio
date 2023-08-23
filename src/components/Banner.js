import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import headshotIshaIngersol from "../assets/img/isha-ingersol.jpeg"
import EWCIsha from "../assets/img/ewc-semifinal1-01.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "Full Stack Web Developer", "Software Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline" style={{color: "#f5f8fa"}}>Welcome to my Website!</span>
                <h1>{`I'm Isha Ingersol, `} <span style={{color: "#B68BC0", fontWeight: "bold"}} className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Full Stack Web Developer", "Software Developer" ]'><span className="wrap" /*style={{fontFamily: "monospace"}}*/>{text}</span></span></h1>
                  <p><span style={{color: "#B68BC0", fontWeight: "bold"}}>Third-year student</span> at the <span style={{color: "#B68BC0", fontWeight: "bold"}}>University of Birmingham</span>.</p>
                  <p>Pursuing an <span style={{color: "#B68BC0", fontWeight: "bold"}}>Integrated Master's</span> in the field of <span style={{color: "#B68BC0", fontWeight: "bold"}}>Computer Science and Software Engineering</span>.</p>
                  <a href="#connect">Let’s Connect <ArrowRightCircle size={25} /></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""} style={{marginTop:"10%"}}>
                  <img src={headerImg} alt="Header Img"/>
                  {/* <img src={headshotIshaIngersol} alt="Isha Ingersol"/> */}
                  {/* <img src={EWCIsha} alt="Isha Ingersol"/> */}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}