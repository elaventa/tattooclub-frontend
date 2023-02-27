import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Stories from "./Stories"
import "./SuccessStories.scss"

const SuccessStories = () => {
 
  return (
    <section className="section successStories">
      <div className="line"></div>
      <div className="headerContent">
        <h3 className="join">JOIN THE TATTOO CLUB</h3>
        <h1 className="title">
          <span>TATTOO ARTIST TRAINING COURSE: </span> LAUNCH YOUR CAREER IN THE
          TATTOO INDUSTRY
        </h1>
        <p className="content">
          Learn the art of tattooing with our comprehensive course at Tattoo
          Club. Led by experienced artists, our course covers all aspects of
          tattooing, from setup to aftercare. Perfect for beginners and those
          looking to improve their skills.
        </p>
      </div>

      <div className="storiesImgWrapper">
        <Stories />
        <StaticImage
          src="../../images/story.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
        />
      </div>

      <div className="line"></div>
    </section>
  )
}

export default SuccessStories
