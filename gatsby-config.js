require("dotenv").config({
  path: `.env`,
})

const isProd = process.env.NODE_ENV === "production"
const previewEnabled =
  (process.env.GATSBY_IS_PREVIEW || "false").toLowerCase() === "true"

module.exports = {
  siteMetadata: {
    title: `The Tattoo Club: Your Destination for Top-Quality Ink in Kochi`,
    description: `Looking for the best tattoo studio in Kochi? Look no further than The Tattoo Club! Our talented artists specialize in a variety of styles and designs, including custom tattoos tailored to your unique vision. With a commitment to cleanliness and professionalism, we offer a safe and comfortable environment for your tattooing experience. Book your appointment today and join our satisfied community of clients at The Tattoo Club in Kochi!`,
    author: `perple.in`,
    siteUrl: `https://tattooclub.netlify.app/`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        token: process.env.SANITY_TOKEN,
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        watchMode: !isProd, // watchMode only in dev mode
        overlayDrafts: !isProd || previewEnabled, // drafts in dev & Gatsby Cloud Preview
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      options: {
        name: `gallery`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Tattoos Club`,
        short_name: `tattoo-club`,
        start_url: `/`,
        background_color: `#2541B2`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
