import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <footer id='contact' className='footer'>
        <StaticImage className='image' src='../../images/background.png' />
        <section className='FooterContent'>
            <h2>Let's turn your vision into reality</h2>
            <h3 className="title">Get In touch</h3>
            <div className="row">
                <div className="col">
                    <h4>CALL</h4>
                    <a href="tel:+919747406685">+919747406685</a>
                </div>

                <div className="col">
                    <h4>EMAIL</h4>
                    <a href="mailto:elaventa@gmail.com">elaventa@gmail.com</a>
                </div>

                <div className="col">
                    <h4>LOCATE US</h4>
                    <p>Kochi</p>
                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer