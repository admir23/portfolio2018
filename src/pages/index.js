import React from 'react'
import Link from 'gatsby-link'
import '../utils/typography.js';

const IndexPage = () => (
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
            <Link to="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></Link>	
            <Link to="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></Link>	
            <Link to="#"><i class="fa fa-instagram" aria-hidden="true"></i></Link>	
            <Link to="#"><i class="fa fa-free-code-camp" aria-hidden="true"></i></Link>	
          </div>
      </div>
    </section>
      <section class="content-area">
        <div class="img-container">
          <div class="user-image"></div>
        </div>		
          <div class="profile-section">
            <div class="profile">
              <h1>Admir Kurtovic</h1>
              <h5>Web Developer & Designer</h5>
              <p>Selfies church-key wayfarers you probably haven't heard of them coloring book whatever tumblr subway tile street art. Hot chicken post-ironic literally intelligentsia fanny pack iceland man bun bitters. Raclette gochujang 90's chillwave XOXO. Godard af roof party austin, pickled VHS four dollar toast food truck jianbing disrupt helvetica twee. Woke subway tile keffiyeh man bun fixie. 
                Small batch cred hexagon pinterest blog bicycle rights.</p>
              <Link to="/portfolio/" class="primary-btn">Portfolio</Link>
              <Link to="/about/" class="ghost-btn">Resume</Link>		
              <Link to="/portfolio/" class="ghost-btn">Contact</Link>		
            </div>
          </div>	
      </section>
    <script type="text/javascript" src="./js/index.js"></script>
   </div>
)

export default IndexPage
