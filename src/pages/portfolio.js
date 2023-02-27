import React from 'react'
import DiscoverTalent from '../components/DiscoverTalent/DiscoverTalent'
import Layout from '../components/layout'
import PortfolioHeader from '../components/PortfolioHeader.js/PortfolioHeader'
import Seo from '../components/seo'

const Portfolio = () => {
  return (
    <Layout>
        <PortfolioHeader />
        <DiscoverTalent /> 
    </Layout>
  )
}
export const Head = () => <Seo title="Portfolio" />
export default Portfolio