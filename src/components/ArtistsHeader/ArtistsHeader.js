import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./ArtistsHeader.scss"

const ArtistsHeader = () => {
  return (
    <section className="artistsHeaderContainer section">
      <div className="header">
        <h1 className="title">OUR ARTISTS</h1>
        <p className="content">
          Our talented artists are ready to turn your tattoo ideas into a
          reality. Each artist has their own unique style, so you can choose the
          perfect fit for your design. We have artists for all styles,
          traditional, modern, and everything in between. We believe in quality
          and luxury, which is why we only use the best equipment and ink. Our
          modern and minimalist studio gives you a luxurious and simple
          experience.
        </p>
      </div>

      <div className="artistsWrapper">
        <div className="artistCard">
          <StaticImage
            src="../../images/hero-main.png"
            loading="blurred"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            className="image"
            style={{ width: "100%" }}
          />

          <h1 className="name">Mr Binu Pappan</h1>
          <p className="content">Expertise and Details</p>
        </div>

        <div className="artistCard">
          <StaticImage
            src="../../images/hero-main.png"
            loading="blurred"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            className="image"
            style={{ width: "100%" }}
          />

          <h1 className="name">Mr Binu Pappan</h1>
          <p className="content">Expertise and Details</p>
        </div>

        <div className="artistCard">
          <StaticImage
            src="../../images/hero-main.png"
            loading="blurred"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            className="image"
            style={{ width: "100%" }}
          />

          <h1 className="name">Mr Binu Pappan</h1>
          <p className="content">Expertise and Details</p>
        </div>
      </div>
    </section>
  )
}

export default ArtistsHeader
