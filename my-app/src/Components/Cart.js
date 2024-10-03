// import React from 'react'

// function Cart({handleRemoveFromCart,cart}) {
//      if (!cart) {
//     return null; // or return a fallback UI
//   }
//   return (
//     <>
//     <h1>Cart</h1>
    //   <div className="cart">
       
    //    <ul>
    //      {cart.map((product) => (
    //        <li key={product.id}>
    //          <img src={product.image} alt={product.name} />
    //          <p>{product.name}</p>
    //          <p>{product.price}</p>
    //          <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
    //        </li>
    //      ))}
    //    </ul>
    //  </div>
//     </>
    
//   )
// }

// export default Cart



import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { cartContext } from '../App';

function Cart() {
  const {cart,setCart}=useContext(cartContext)
  const [total,settotal]= useState(0)

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((p) => p.id !== product.id));
  };
useEffect(() => {
  const totalAmount = cart.reduce((acc, curr) => {
    // Remove the currency symbol and parse the price as a number
    const price = parseFloat(curr.price.replace(/[^0-9.-]+/g, ""));
    return acc + price;
  }, 0);
  settotal(totalAmount);
}, [cart]);
  return (
    <>
      <div>
      <h1>CartProduct</h1>
      <div className="cart">
       
       <ul>
         {cart.map((product) => (
           <li key={product.id}>
             <img src={product.image} alt={product.name} />
             <div className='but'>
             <p>{product.name}</p>
             <p>price:{product.price}</p>
              
             </div>
            
             <button className='btn-remove'  onClick={()=>handleRemoveFromCart(product)}>Remove</button>
           </li>
         ))}
       </ul>
     </div>
    </div>
    <h2>Total Amount Rs: {total.toFixed(2)}</h2>
    </>
  )
}

export default Cart