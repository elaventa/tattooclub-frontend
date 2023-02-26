import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Button from "../Button/Button"
import "./PortfolioHeader.scss"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
const PortfolioHeader = () => {
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
            mainImage {
              asset {
                gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 400)
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <section className="section portfolioContainer">
      <div className="header">
        <h1 className="title">OUR PORTFOLIO</h1>
        <div className="categories">
          <Button content="ALL TATTOOS" />
          {data?.categories?.edges?.map(edge => (
            <Button key={edge.node.id} content={edge.node.title} />
          ))}
        </div>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 1000: 3 }}>
        <Masonry columnsCount={3} gutter="30px">
          {data?.images?.edges?.map(image => (
            <GatsbyImage image={image.node.mainImage.asset.gatsbyImageData} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  )
}

export default PortfolioHeader
