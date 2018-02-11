import React from 'react'
import Link from 'gatsby-link'

const Portfolio = () => (
  <div>
    <section class="info-section">
        <div class="logo">
					AK
				</div>
        <div class="info-box">
            <h4>Email</h4>
            <p>hello@admirkurtovic.com</p>
            <h4>Phone</h4>
            <p>061 465 729</p>
            <h4>Find me on</h4>
            <div class="icon-section">
							<a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>	
							<a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>	
							<a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>	
							<a href="#"><i class="fa fa-free-code-camp" aria-hidden="true"></i></a>	
						</div>
					</div>
			  </section>
        <div class="content-area">
          <div class="scroll-section">
            <div class="work-section">
              <div class="title">
                  <h1>Latest Works</h1>
                </div>
                <div class="project-section">
                {/* <div class="project-box" style={{background:url('https://cdn.dribbble.com/users/188162/screenshots/2329965/nike_90.jpg') no-repeat center center;}} */}
                    <div class="grey-bg">
                      <div class="project-info">
                        <div class="project-details">
                          Client : Nike Year: 2018  Type: Ecommerce
                        </div>
                        <div class="project-title">
                            The Last Yeezys
                        </div>
                        <div>
                         <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </div>  
                      </div>  
                    </div>
                  </div>     
               </div> 
             </div>   
         </div>  
   
    
   </div>
)

export default Portfolio
