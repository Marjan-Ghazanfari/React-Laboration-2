import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Navbar from './components/navigation/Navbar';
import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';

function App() {
  const [products, setProducts] = useState([
    {id: uuidv4(), name: 'Product 1', purchased: false},
    {id: uuidv4(), name: 'Product 2', purchased: true},
    {id: uuidv4(), name: 'Product 3', purchased: false}
  ]);

  const togglePurchased = id => {
    let newProducts = products.map(product => {
      if(product.id === id) {
        product.purchased = !product.purchased
        return product
      }
      return product
    })
    setProducts(newProducts)
  }

  const addProduct = productName => {
    setProducts(prevProducts => {
      return [{id: uuidv4(), name: productName, purchased: false }, ...prevProducts]
    })
  }

  const removeProduct = id => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id))
  }

  const changeProduct = (id, newName) => {
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if(product.id === id){
          product.name = newName
        }
        return product
      })
    })
  }

  // useEffect(() => {
  //   const storedProducts = JSON.parse(localStorage.getItem('products'));
  //   if(storedProducts)
  //     setProducts(storedProducts)
  // }, [])

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="container">
        <Header title="LIST OF PRODUCTS" products={products}/>
        <AddProduct addProduct={addProduct}/>
        <Products products={products} togglePurchased={togglePurchased} removeProduct={removeProduct} changeProduct={changeProduct} />
      </div>
    </div>
  );
}

export default App;
