import './Baby.css'
import React from 'react'
import CardBaby from './CardBaby'

function Baby() {
  return (
    <div className='container-Mothely'>
      <h3 className='title-Mothely'> نوزاد</h3>
        <div className="grid">
            <CardBaby/>
            <CardBaby/>
            <CardBaby/>
            <CardBaby/>
            <CardBaby/>
            <CardBaby/> 
            <CardBaby/>
        </div>
    </div>
  )
}

export default Baby