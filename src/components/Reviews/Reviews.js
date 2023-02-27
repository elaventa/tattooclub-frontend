import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { useSwiper } from "swiper/react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { Navigation, Pagination } from "swiper"
import "./Reviews.scss"
import { graphql, useStaticQuery } from "gatsby"

const Reviews = () => {
  const data = useStaticQuery(graphql`
    query ReviewQuery {
      reviews: allSanityReviews {
        nodes {
          person
          review
        }
      }
    }
  `)
  const swiper = useSwiper()
  return (
    <div className="reviews">
      <div className="header">
        <h1 className="title">Reviews from our customers</h1>
        <div className="actions">
          <BsArrowLeft
            id="review-back"
            onClick={() => swiper?.slidePrev()}
            className="icon"
          />
          <BsArrowRight
            id="review-forward"
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
          nextEl: "#review-forward",
          prevEl: "#review-back",
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
        {data?.reviews?.nodes?.map((story, index) => (
          <SwiperSlide key={index}>
            <div className="reviewWrapper">
              <p className="review">{story.review}</p>
              <p className="person">-{story.person}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Reviews
