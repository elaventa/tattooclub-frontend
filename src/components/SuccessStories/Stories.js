import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { useSwiper } from "swiper/react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { Navigation, Pagination } from "swiper"
import "./Stories.scss"

const Stories = () => {
  const data = useStaticQuery(graphql`
    query SuccessStoryQuery {
      stories: allSanitySuccessStories {
        nodes {
          story
          student
        }
      }
    }
  `)
  const swiper = useSwiper()
  return (
    <div className="stories">
      <div className="header">
        <h1 className="title">STUDENT SUCCESS STORIES</h1>
        <div className="actions">
          <BsArrowLeft
            id="swiper-back"
            onClick={() => swiper?.slidePrev()}
            className="icon"
          />
          <BsArrowRight
            id="swiper-forward"
            onClick={() => swiper?.slideNext()}
            className="icon"
          />
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        className="swiper"
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: "#swiper-forward",
          prevEl: "#swiper-back",
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          960: {
            slidesPerView: 1,
          },
          1450: {
            slidesPerView: 1,
          },
        }}
      >
        {data?.stories?.nodes.map((story, index) => (
          <SwiperSlide key={index}>
            <div className="storyWrapper">
              <p className="story">{story.story}</p>
              <p className="person">-{story.student}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Stories
