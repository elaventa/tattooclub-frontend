import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "./Hero.scss"
import "swiper/css"
import "swiper/css/pagination"
import { motion } from "framer-motion"
import { graphql, Link, useStaticQuery } from "gatsby"

const HeroNew = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      images: allSanityPoster {
        edges {
          node {
            id
            mainImage {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `)

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
        {data?.images?.edges.map(image => (
          <SwiperSlide>
            <GatsbyImage
              className="image"
              key={image.node.id}
              alt=""
              image={image.node.mainImage.asset.gatsbyImageData}
            />
          </SwiperSlide>
        ))}
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
            loading="blurred"
            quality={100}
            alt=""
            formats={["auto", "webp", "avif"]}
            className="image-rotate"
          />
        </motion.div>
        <a href="#talkToUs">
          <div className="downArrow">
            <StaticImage
              src="../../images/down-arrow.png"
              loading="blurred"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
              className="image"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default HeroNew
