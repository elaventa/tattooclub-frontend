import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./Button.scss"

const Button = ({ content, variant }) => {
  return (
    <button className={["btn", variant].join(" ")}>

      <div className="ellipse"></div>

      {content}
    </button>
  )
}

export default Button
