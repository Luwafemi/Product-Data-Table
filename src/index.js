import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FilterableProductTable from './App';
import PRODUCTS from './data/products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterableProductTable products={PRODUCTS} />
  </React.StrictMode>
);


