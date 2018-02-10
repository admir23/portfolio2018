import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div class="home" id="menu-btn" onclick="toggleMenu()">
    <div class="menu-icon">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <section id="menu">
      <nav>
        <Link to="/index/">Home</Link>
        <Link to="/about/">About</Link>
        <Link to="/portfolio/">Portfolio</Link>
        <Link to="/contact/">Contact</Link>
      </nav>
    </section>
  </div>
)

export default Header
