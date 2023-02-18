import React from 'react'
import DiscoverTalent from '../components/DiscoverTalent/DiscoverTalent'
import Layout from '../components/layout'
import PortfolioHeader from '../components/PortfolioHeader.js/PortfolioHeader'

const Portfolio = () => {
  return (
    <Layout>
        <PortfolioHeader />
        <DiscoverTalent /> 
    </Layout>
  )
}

export default Portfolio