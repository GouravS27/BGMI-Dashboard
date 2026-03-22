import React from 'react'
import OverviewProfile from './Overview/OverviewProfile'
import OverviewStats from './Overview/OverviewStats'
import Graph from './Overview/Graph'
import Footer from './Footer'

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