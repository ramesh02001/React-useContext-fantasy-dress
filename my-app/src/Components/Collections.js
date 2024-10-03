

import React, { useState } from 'react';
// import './Collections.css';
// import './All.css'

import Cartslice from './Cartslice';

function Collections() {
  const [search, setSearch] = useState('');
  

  const products = [
    { id: 1, name: 'White shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUBQdpR3WrC4gOdRgEVJyJ0Ubfs-HAa0XCA&s' },
    { id: 2, name: 'Black shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdMr7Nrww0dLUvxYsDRSjiBUR2f4iEg5DqA&s' },
    { id: 3, name: 'Purple shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xjpB5Qx-On73aZ81H3E49SvqzJNS88X6DA&s' },
    { id: 4, name: 'Blue shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAr9wYvH-WYII-ex1lRsuwopOvQBcaRoA9Fg&s' },
    { id: 5, name: 'White shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUBQdpR3WrC4gOdRgEVJyJ0Ubfs-HAa0XCA&s' },
    { id: 6, name: 'Pink shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAOvYjxt0D65qMzfE6GsXrJBXdsA5NjA74g&s' },
    { id: 7, name: 'Green shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDYDtZkbXhSbcvpjTBpD4bCUC7cbqq9ueBQ&s' },
    { id: 8, name: 'Red shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlw5i48wbxWesGCwVYVDSPskG2f9xhnmjbEA&s' },
    { id: 9, name: 'Rose shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAOvYjxt0D65qMzfE6GsXrJBXdsA5NjA74g&s' },
    { id: 10, name: 'Black shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdMr7Nrww0dLUvxYsDRSjiBUR2f4iEg5DqA&s' },
    { id: 11, name: 'black shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRCSdQqqB1JII5geGNlny1fJvYfQVvGMgKQ&s' },
    { id: 12, name: 'White shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfs2Fwiw4nj1WQcqZ2Qzcr3VObsrF5fVlHw&s' },
    { id: 13, name: 'White shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfs2Fwiw4nj1WQcqZ2Qzcr3VObsrF5fVlHw&s' },
    { id: 14, name: 'White shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUBQdpR3WrC4gOdRgEVJyJ0Ubfs-HAa0XCA&s' },
    { id: 15, name: 'White shirt', price: '$400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUBQdpR3WrC4gOdRgEVJyJ0Ubfs-HAa0XCA&s' }
  ];

  return (
    <>
      <Cartslice 
        products={products} 
        
        search={search} 
        setSearch={setSearch} 
      />
    </>
  );
}

export default Collections;
