import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import { Outlet } from 'react-router-dom'

function App() {
  
  //fetch('https://fakestoreapi.com/products')
  // .then(response => response.json())
  // .then(data => console.log(data));

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      //const response = await fetch('https://fakestoreapi.com/products');
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      console.log(result);
      setProducts(result);
    };
    fetchProducts();
  }, []);
  return (
    <div className ="layout">
      <Navigation></Navigation>
      <Outlet context={products}></Outlet>
    </div>
  )
}

export default App
