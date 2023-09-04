import React from "react";

import twitter from "../assets/img/footer-twitter.svg";
import linkedin from "../assets/img/footer-linkedin.svg";
import mail from "../assets/img/footer-mail.svg";
import phone from "../assets/img/footer-phone.svg"

export const Contact = () => {

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
    <section className="contact" id="connect">
      <div class="contact-content" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <h2 class="heading">Get in Touch!</h2>
        <div className="social-icon" style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"-2%"}}>
              {/* <a href="#" id="phone-icon" onclick="numberCopied('+971504054363'); return false;"><img src={phone} alt="Phone" /></a> */}
              <div className="phone" style={{display:"flex", flexDirection:"column", alignItems:"center", paddingRight:"10%"}}>
                <a href="#connect" onClick={copyPhoneNumber}><img src={phone} alt="phone" /></a>
                <h4>Phone</h4>
              </div>
              <div className="email" style={{display:"flex", flexDirection:"column", alignItems:"center", paddingRight:"10%"}}>
                <a href="mailto:ingersol.isha@gmail.com" target="_blank" rel="noopener noreferrer"><img src={mail} alt="Mail" /></a>
                <h4>Email</h4>
              </div>
              <div className="linkedin" style={{display:"flex", flexDirection:"column", alignItems:"center", paddingRight:"10%"}}>
                <a href="https://www.linkedin.com/in/isha-ingersol/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                <h4>LinkedIn</h4>
              </div>
              <div className="twitter" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <a href="https://twitter.com/isha_ingersol" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter/X"/></a>
                <h4>Twitter</h4>
              </div>
         </div>
      </div>
    </section>
  )
}