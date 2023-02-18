import React from 'react'
import ArtistsHeader from '../components/ArtistsHeader/ArtistsHeader'
import Layout from '../components/layout'
import MasterPieces from '../components/MasterPieces/MasterPieces'

const Artist = () => {
  return (
    <Layout>
        <ArtistsHeader />
        <MasterPieces />
    </Layout>
  )
}

export default Artist