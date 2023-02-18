import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./Hero.scss"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="section hero">
      <motion.h1 className="mainTitle">THE TATTOO CLUB</motion.h1>

      <div className="heroGrid">
        <div className="leftImg">
          <StaticImage
            src="../../images/hero-left.png"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            className="image"
            style={{ width: "100%" }}
          />
        </div>

        <div className="mainImg">
          <StaticImage
            src="../../images/hero-main.png"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            className="image"
            style={{ width: "100%" }}
          />
        </div>

        <div className="rightImg">
          <StaticImage
            src="../../images/hero-right.png"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            className="image"
            style={{ width: "100%" }}
          />
        </div>

        <div className="social">
          <Link to="">INSTAGRAM</Link>
          <Link to="">FACEBOOK</Link>
          <Link to="">YOUTUBE</Link>
        </div>

        <div className="rotateContainer">
          <motion.div
            className="rotate"
            animate={{
              rotate: 360,
            }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          >
            <StaticImage
              src="../../images/rotate.png"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              className="image"
            />
          </motion.div>
          <Link to="#talkToUs">
            <div className="downArrow">
              <StaticImage
                src="../../images/down-arrow.png"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                className="image"
              />
            </div>
          </Link>
        </div>
      </div>

      <h2 className="heroSubTitle">
        Celebrate Your Unique Personality with a Custom Tattoo
      </h2>
    </section>
  )
}

export default Hero
