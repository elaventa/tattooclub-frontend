import React, { useState } from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Button from "../Button/Button"
import "./PortfolioHeader.scss"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
const PortfolioHeader = () => {
  const [selected, setselected] = useState("ALL TATTOOS")
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      categories: allSanityCategory {
        edges {
          node {
            id
            title
          }
        }
      }
      images: allSanityGallery {
        edges {
          node {
            id
            category {
              title
              id
            }
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

  const [images, setimages] = useState(data?.images?.edges)
  const handleBtnClick = category => {
    setselected(category)
    console.log(images)
    setimages(
      category === "ALL TATTOOS" ? data?.images.edges : 
      data?.images?.edges.filter(image =>
        image.node.category.some(categor => categor.title === category)
      )
    )
  }

  return (
    <section className="section portfolioContainer">
      <div className="header">
        <h1 className="title">OUR PORTFOLIO</h1>
        <div className="categories">
          <Button
            onClick={() => handleBtnClick("ALL TATTOOS")}
            selected={selected === "ALL TATTOOS"}
            content="ALL TATTOOS"
          />
          {data?.categories?.edges?.map(edge => (
            <Button
              onClick={() => handleBtnClick(edge.node.title)}
              selected={selected === edge.node.title}
              key={edge.node.id}
              content={edge.node.title}
            />
          ))}
        </div>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 390: 1, 391: 2, 750: 2, 1000: 3, 1400: 4 }}>
        <Masonry gutter="30px">
          {images.map(
            image =>
              (image.node.category.some(
                category => category.title === selected
              ) ||
                selected === "ALL TATTOOS") && (
                <GatsbyImage
                  key={image.node.id}
                  alt=""
                  image={image.node.mainImage.asset.gatsbyImageData}
                />
              )
          )}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  )
}

export default PortfolioHeader
