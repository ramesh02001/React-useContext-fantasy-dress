import React from 'react';
import { useContext } from 'react';
import  { cartContext } from '../App';

function Cartslice({ products,  search, setSearch }) {
    const {cart,setCart}=useContext(cartContext);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
//   const cartfunction =()=>{
//     setCart(products)
//   }

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((p) => p.id !== product.id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <div>
      <div className="product-section">
        <form className="product-search">
          <input
            type="text"
            id="search"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>
      </div>
      <div className="products" id="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-box">
            <img className='img' src={product.image} alt={product.name} />
            <div className='head'>
              <h4>{product.name}</h4>
              <p>{product.price}</p>
              {cart.some(p => p.id === product.id) ? (
                <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
              ) : (
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              )}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Cartslice;
