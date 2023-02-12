import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../Button/Button"
import "./DiscoverTalent.scss"

const DiscoverTalent = () => {
  return (
    <section className="section discoverTalent">
      <div className="contentWrapper">
        <h2 className="title">Discover the talent behind the ink.</h2>
        <p className="content">
          Meet our skilled tattoo artists and find the perfect match for your
          design.
        </p>
      </div>

      <div className="image">
        <StaticImage
          src="../../images/talent.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          className="image"
        />
      </div>

      <Button content={"VIEW OUR ARTIST"} />
    </section>
  )
}

export default DiscoverTalent
