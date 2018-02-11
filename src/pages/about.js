import React from 'react'
import Link from 'gatsby-link'


const About = () => (
  <div>
    <section className="info-section">
    <div className="logo">
      AK
    </div>
    <div className="info-box">
      <h4>Email</h4>
      <p>hello@admirkurtovic.com</p>
      <h4>Phone</h4>
      <p>061 465 729</p>
      <h4>Find me on</h4>
      <div className="icon-section">
        <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>	
        <a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>	
        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>	
        <a href="#"><i className="fa fa-free-code-camp" aria-hidden="true"></i></a>	
      </div>
    </div>
  </section>
  <section className="content-area">
    <div className="scroll-section">
      <div className="category">
        <div className="title">
          <h1>Education</h1>
        </div>
        <div className="xp-section">
          <div className="xp-box">
            <h5>FreeCodeCamp</h5>
            <p>Full Stack Web Development Certification</p>
            <p>Session 2016-2018</p>
            </div>
          <div className="xp-box">
            <h5>FreeCodeCamp</h5>
            <p>FreeCodeCamp</p>
            <p>FreeCodeCamp</p>
            </div>
          <div className="xp-box">
            <h5>FreeCodeCamp</h5>
            <p>FreeCodeCamp</p>
            <p>FreeCodeCamp</p>
            </div>
          <div className="xp-box">
            <h5>FreeCodeCamp</h5>
            <p>FreeCodeCamp</p>
            <p>FreeCodeCamp</p>
            </div>
        </div>
      </div>  
      <div className="category">
        <div className="title">
            <h1>Work Expirence</h1>
          </div>
          <div className="xp-section">
            <div className="xp-box">
              <h5>FreeCodeCamp</h5>
              <p>Full Stack Web Development Certification</p>
              <p>Session 2016-2018</p>
            </div>
            <div className="xp-box">
              <h5>FreeCodeCamp</h5>
              <p>FreeCodeCamp</p>
              <p>FreeCodeCamp</p>
            </div>
            <div className="xp-box">
              <h5>FreeCodeCamp</h5>
              <p>FreeCodeCamp</p>
              <p>FreeCodeCamp</p>
            </div>
            <div className="xp-box">
              <h5>FreeCodeCamp</h5>
              <p>FreeCodeCamp</p>
              <p>FreeCodeCamp</p>
            </div>
          </div>
        </div> 
      </div>
    </section>
   </div>
)

export default About
