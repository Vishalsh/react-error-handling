import React from 'react';

import Products from './Products';
// import Products from './ProductsWithErrorHandling';
// import Products from './ProductsWithErrorBoundary';

import Warehouse from './Warehouse';

const App = () => {
  return (
    <div>
      <h1>Welcome to EE Mall</h1>

      <h2>Products</h2>
      <Products />

      <h2>Warehouse</h2>
      <Warehouse />
    </div>
  )
};

export default App;
