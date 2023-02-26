import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "./Hero.scss"
import "swiper/css"
import "swiper/css/pagination"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const HeroNew = () => {
  return (
    <section className="section hero">
      <div className="mainTitle">THE TATTOO CLUB</div>
      <Swiper
        spaceBetween={50}
        slidesPerView={"auto"}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="swiper"
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <StaticImage src="../../images/placeholder.png" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage src="../../images/placeholder.png" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage src="../../images/placeholder.png" />
        </SwiperSlide>
      </Swiper>

      <h2 className="heroSubTitle">
        Celebrate Your Unique Personality with a Custom Tattoo
      </h2>

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
    </section>
  )
}

export default HeroNew
