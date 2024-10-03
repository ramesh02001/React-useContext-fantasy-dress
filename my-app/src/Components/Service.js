import React from 'react'
// import './Service.css'
import './All.css'

import Arrival from './Arrival'
function Service() {
  return (
    <div className='service'>
    <div className='service-container-1'>
        <div>
        <h1>We Provide Best</h1>
        <h2>Customer Exprience</h2>
        </div>
        <div>
            <p>|| we ensure that our customer have the best shopping experience</p>
        </div>
    </div>
    <div className='service-container-2'>
        <div>
            <i className='fa-regular fa-face-smile'></i>
            <h4>Satisfaction Gurantee</h4>
            <p>the performance of some duty, in the event of the failure of another person who is primarily liable.</p>
        </div>
        <div>
            <i className='fa-regular fa-face-smile'></i>
            <h4>New Arrival || Everyday</h4>
            <p>the performance of some duty, in the event of the failure of another person who is primarily liable.</p>
        </div>
        <div>
            <i className='fa-regular fa-face-smile'></i>
            <h4> fast&Free ship </h4>
            <p>the performance of some duty, in the event of the failure of another person who is primarily liable.</p>
        </div>
    </div>
 <Arrival/>
    </div>
  )
}

export default Service