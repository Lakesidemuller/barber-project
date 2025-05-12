import React from 'react'
import TopSection from '../HomePage/TopSection'
import LatestOffers from '../HomePage/LatestOffers'
import MostSelled from '../HomePage/MostSelled'
import BestAround from '../HomePage/BestAround'
import SignUp from "../HomePage/SignUp"
import AnythingElse from '../HomePage/AnythingElse'

function Home() {
  return (
    <main className='bg-gray-100'>
      <TopSection />
      <LatestOffers />
      <MostSelled />
      <BestAround />
      <AnythingElse />
      <SignUp />
    </main>
  )
}

export default Home