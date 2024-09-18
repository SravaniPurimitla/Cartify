import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import NavBar from './components/NavBar';

const App = () => {
  const [showProducts, setShowProducts] = useState(false);

  const handleProductsClick = () => {
    setShowProducts(true); // Display products only after clicking
  };

  return (
    <Router>
      <div className="App">
        <NavBar onProductsClick={handleProductsClick} />
        <Routes>
          <Route path="/" element={<Dashboard showProducts={showProducts} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
