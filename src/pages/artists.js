import React from 'react'
import ArtistsHeader from '../components/ArtistsHeader/ArtistsHeader'
import Layout from '../components/layout'
import MasterPieces from '../components/MasterPieces/MasterPieces'
import Seo from '../components/seo'

const Artist = () => {
  return (
    <Layout>
        <ArtistsHeader />
        <MasterPieces />
    </Layout>
  )
}

export const Head = () => <Seo title="Artists" />

export default Artist