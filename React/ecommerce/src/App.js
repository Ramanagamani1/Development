import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div>
        <ProductList />
    </div>
  );
}

export default App;


/*
  The import './components/ProductList' will first go to components folder and
  check if ProductList.js or ProductList.jsx is present. If it did not find that
  file then it will check for ProductList/index.js

  Component Lifecycle:
  mounting phase 
  updting phase
  unmounting phase

*/
