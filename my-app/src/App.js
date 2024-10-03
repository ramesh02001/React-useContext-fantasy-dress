import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import Arrival from './Components/Arrival';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Header1 from './Components/Header1';
import News from './Components/News';
import Service from './Components/Service';
import Collections from './Components/Collections';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import { createContext, useState } from 'react';
export const cartContext= createContext();
function App() {
  const [cart,setCart]=useState([]);
  return (
    <cartContext.Provider value={{cart,setCart}}>
      <div className="App">
     <Header/>
     
     <div className='container'>
     <Routes>
       
       {/* <Route path='/Contacts' element={<Contacts />} /> */}
    
    <Route path='/' element={<Header1/>} />
    <Route path='/Collections' element={<Collections />} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Cart' element={<Cart/>} />
    </Routes>
     </div>
     
    </div>
    </cartContext.Provider>
  );
}

export default App;
