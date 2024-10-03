import React from 'react'
// import './News.css'
import './All.css'

function News() {
  return (
    <div className='news'>
        <h2>Join Our News Letter</h2>
        <p>Signup for our email newsletter to get exclusive discounts and daily updates</p>
         <div>
           <input type='text' className='search'/>
         </div>
         <div>
            <button>subscribe</button>
         </div>
    </div>
  )
}

export default News