import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <StaticImage
          src="../../images/logo.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          className="image"
          style={{ width: "100%" }}
        />
      </div>

      <ul className="navItems">
        <Link to="#">
          <li className="navItem">WORKS</li>
        </Link>
        <Link to="#">
          <li className="navItem">ARTISTS</li>
        </Link>
        <Link to="#">
          <li className="navItem">COURSE</li>
        </Link>
        <Link to="#">
          <li className="navItem">CONTACT</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
