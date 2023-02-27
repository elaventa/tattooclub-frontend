import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import "./Navbar.scss"

const Navbar = () => {
  const [clicked, setclicked] = useState(false)
  const handleClick = () => {
    setclicked(!clicked)
  }
  return (
    <nav className={`navbar ${clicked}`}>
      <div className="logo">
        <Link to="/">
          <StaticImage
            src="../../images/logo.png"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            className="image"
            style={{ width: "100%" }}
          />
        </Link>
      </div>

      <ul className={`navItems ${clicked}`}>
        <Link onClick={() => setclicked(false)} to="/portfolio">
          <li className="navItem">WORKS</li>
        </Link>
        <Link onClick={() => setclicked(false)} to="/artists">
          <li className="navItem">ARTISTS</li>
        </Link>
        <Link onClick={() => setclicked(false)} to="#">
          <li className="navItem">COURSE</li>
        </Link>
        <a onClick={() => setclicked(false)} href="#contact">
          <li className="navItem">CONTACT</li>
        </a>
      </ul>

      <div className="mobileNav">
        <div onClick={handleClick} className={`hamburger ${clicked}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
