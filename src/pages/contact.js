import React from 'react'
import Link from 'gatsby-link'
import '../scss/main.scss';
import '../utils/typography.js';

const Contact = () => (
  <div className="contact">
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
        <div className="img-container">
					<div className="form-section">
          {/* Build a form here */}
						{/* <h4>Send a message</h4>
							<form action="/" method="POST">
								<input type="text" name="name" required placeholder="Name">
								<input type="email" name="email" required placeholder="Email">
								<input type="text" name="budget" placeholder="Budget">
								<textarea name="message" rows="5" placeholder="Message"></textarea>

								<button type="submit">Send Message</button>
							</form> */}
				    </div>
				  </div>	
            <div className="contact-section">
							<div className="contact-info">
								<h1>Contact Me</h1>
								<div className="contact-box">
									<h5>Email</h5>
									<p>hello@admirkurtovic.com</p>
								</div>
								<div className="contact-box">
									<h5>Phone</h5>
									<p>(061) 465-729</p>
								</div>
								<div className="contact-box">
									<h5>Adress</h5>
									<p>Grbavicka 97, Sarajevo, 71000</p>
								</div>
							</div>
						</div>		
				  </div>
)

export default Contact
