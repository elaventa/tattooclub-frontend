import React from 'react'
import DiscoverTalent from '../components/DiscoverTalent/DiscoverTalent'
import Layout from "../components/layout"
import Seo from "../components/seo"
import SuccessStories from '../components/SuccessStories/SuccessStories'
import TalkToUs from '../components/TalkToUs/TalkToUs'
import "swiper/scss";
import MasterPieces from '../components/MasterPieces/MasterPieces'
import Reviews from '../components/Reviews/Reviews'
import HeroNew from '../components/Hero/HeroNew'

const IndexPage = () => (
  <Layout>
      <HeroNew />
      <MasterPieces />
      <DiscoverTalent />
      <TalkToUs />
      <SuccessStories />
      <Reviews />
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
