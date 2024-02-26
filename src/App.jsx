import React, { useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import NavBar from './components/NavBar';
import Edit from './components/Edit';
import Create from './components/Create';

const App = () => {
  const [id, setId] = useState(null)
  return (
    <div className='container'>
      <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductPage setId = {setId} />}/>
        {id !== null && ( 
            <Route path='/edit/:id' element={<Edit id={id} />} />
        )}
        <Route path='/create' element={<Create />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;