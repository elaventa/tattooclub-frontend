import React from 'react'
import DiscoverTalent from '../components/DiscoverTalent/DiscoverTalent'
import Hero from '../components/Hero/Hero'
import Layout from "../components/layout"
import Seo from "../components/seo"
import TalkToUs from '../components/TalkToUs/TalkToUs'

const IndexPage = () => (
  <Layout>
      <Hero />
      <DiscoverTalent />
      <TalkToUs />
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
