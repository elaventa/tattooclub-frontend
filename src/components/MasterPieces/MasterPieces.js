import React from "react"
import Button from "../Button/Button"
import "./MasterPieces.scss"
import Img from "gatsby-image"
import useGallery from "../../hooks/useGallery"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Link } from "gatsby"

const MasterPieces = () => {
  const images = useGallery()
  return (
    <section className="section masterPieces">
      <div className="header">
        <div className="left">
          <h1 className="title">Inked Masterpieces</h1>
          <p className="content">A Look into Our Tattoo Studio Portfolio</p>
        </div>

        <div className="right">
          <Link to="/portfolio"><Button content={"VIEW OUR PORTFOLIO"} /></Link>
        </div>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 1000: 3 }}>
        <Masonry columnsCount={3} gutter="10px">
          {images.map(({ id, fluid }) => (
            <Img key={id} fluid={fluid} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  )
}

export default MasterPieces
