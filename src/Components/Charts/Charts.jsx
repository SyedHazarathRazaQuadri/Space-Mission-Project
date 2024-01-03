import React from 'react'
import Piechart from './PieChart'
import Barchat from './BarChat'

function Charts() {
  return (
    <>
      <div className='shadow-lg flex basis-1/2 flex-wrap justify-around items-center border border-indigo-700'>
        <div><Piechart /></div>
        <div><Barchat /></div>
      </div>
    </>
  )
}

export default Charts
