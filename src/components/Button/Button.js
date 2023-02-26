import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./Button.scss"

const Button = ({ content, variant, selected, onClick }) => {
  return (
    <button onClick={onClick} className={["btn", variant, selected].join(" ")}>

      <div className="ellipse"></div>

      {content}
    </button>
  )
}

export default Button
