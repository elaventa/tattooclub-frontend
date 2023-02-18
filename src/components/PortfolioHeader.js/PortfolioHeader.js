import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import useGallery from "../../hooks/useGallery"
import Button from "../Button/Button"
import "./PortfolioHeader.scss"
import Img from "gatsby-image"

const PortfolioHeader = () => {
  const images = useGallery()
  return (
    <section className="section portfolioContainer">
      <div className="header">
        <h1 className="title">OUR PORTFOLIO</h1>
        <div className="categories">
          <Button content="ALL TATTOOS" />
          <Button content="MINIMAL TATTOOS" />
          <Button content="SMALL TATTOOS" />
          <Button content="COUPLE TATTOOS" />
        </div>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 1000: 3 }}>
        <Masonry columnsCount={3} gutter="30px">
          {images?.map(({ id, fluid }) => (
            <Img key={id} fluid={fluid} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  )
}

export default PortfolioHeader
