import React from 'react'
import DiscoverTalent from '../components/DiscoverTalent/DiscoverTalent'
import Hero from '../components/Hero/Hero'
import Layout from "../components/layout"
import Seo from "../components/seo"
import SuccessStories from '../components/SuccessStories/SuccessStories'
import TalkToUs from '../components/TalkToUs/TalkToUs'
import "swiper/scss";
import MasterPieces from '../components/MasterPieces/MasterPieces'

const IndexPage = () => (
  <Layout>
      <Hero />
      <MasterPieces />
      <DiscoverTalent />
      <TalkToUs />
      <SuccessStories />
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
