import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
// import './Header.css'
import './All.css'

import { cartContext } from '../App';

function Header() {
    const {cart}=useContext(cartContext);
    const[visible,setvisible]=useState(false)
    const shownavbar =()=>{
        setvisible(true)
    }
    const closenavbar =()=>{
        setvisible(false)
    }
    
  return (
    <div>
        <nav className='navbar'>
            <h1>Shopy</h1>
            <div className='navbar-links'>
                <p className='navbar-link'><Link to='/'>Home</Link></p>
                <p className='navbar-link'><Link to='/Collections'>Collections</Link></p>
                <p className='navbar-link'><Link to='/Contact'>Contacts</Link></p>
                <p className='navbar-link'><Link to='/Cart'><span className='card-count'>{cart.length}</span> <i class="fa-solid fa-cart-shopping"></i> 
                </Link></p>

            </div>
            <div onClick={shownavbar} className='navbar-menu-toggle'>
            <i  class="fa-sharp fa-solid fa-bars"></i>
            </div>
        </nav>
        {/* side nav */}
        <div className={`side-navbar ${visible ?'show':''}`}>
        <p  onClick={closenavbar}  style={{ textAlign: 'right' }}>

                <i class="fa-solid fa-xmark"></i>
            </p>
            <div className='side-navbar-links'>
                <p className='navbar-link'><Link to='/'>Home</Link></p>
                <p className='navbar-link'><Link to='/Collections'>Collections</Link></p>
                <p className='navbar-link'><Link to='/Contact'>Contacts</Link></p>
                <p className='navbar-link'><Link to='/Cart'><i class="fa-solid fa-cart-shopping"></i></Link></p>


            </div>

        </div>

    </div>
  )
}

export default Header