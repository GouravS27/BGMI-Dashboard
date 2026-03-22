import React from 'react'
import OverviewProfile from './OverviewProfile'
import Graph from './Graph'
import Footer from './Footer'
import OverviewStats from './OverviewStats'

const Overview = () => {
  return (
    <div >
        <OverviewProfile/>
        <OverviewStats/>
        <Graph/>
        <Footer/>
    </div>
  )
}

export default Overview