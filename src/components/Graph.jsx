import React from 'react'
import WinGraph from './WinGraph'
import DamageGraph from './DamageGraph'

const Graph = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 m-2">
        <WinGraph/>
        <DamageGraph/>
    </div>
  )
}

export default Graph