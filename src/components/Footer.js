import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import twitter from "../assets/img/footer-twitter.svg";
import linkedin from "../assets/img/footer-linkedin.svg";
import mail from "../assets/img/footer-mail.svg";
import phone from "../assets/img/footer-phone.svg"

import '../App.css'; // Import a CSS file for styles

export const Footer = () => {

  // Function to copy the phone number
  const copyPhoneNumber = async () => {
    const phoneNumber = "+971504054363";

    try {
      await navigator.clipboard.writeText(phoneNumber);
      alert("Phone number copied to clipboard: " + phoneNumber);
    } catch (error) {
      console.error("Error copying phone number: " + error.message);
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <h3 style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>Isha Ingersol</h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon"  style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
              <a href="#connect" onClick={copyPhoneNumber}><img src={phone} alt="phone" /></a>
              <a href="https://twitter.com/isha_ingersol" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter/X" /></a>
              <a href="https://www.linkedin.com/in/isha-ingersol/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
              <a href="mailto:ingersol.isha@gmail.com" target="_blank" rel="noopener noreferrer"><img src={mail} alt="Mail" /></a>
            </div>
          </Col>
            
          <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
            <p>
              {/* Copyright 2022. All Rights Reserved */}
              This portfolio was created with the React JavaScript framework, CSS, NodeJS, GitHub, and other web development technologies.
            </p>
          </div>
        </Row>
      </Container>
    </footer>
  )
}