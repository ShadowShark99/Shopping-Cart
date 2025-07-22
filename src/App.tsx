import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import { Outlet } from 'react-router-dom'

function App() {
  
  //fetch('https://fakestoreapi.com/products')
  // .then(response => response.json())
  // .then(data => console.log(data));
  console.log("app loading");

  const newArray = (n: number) => {
    if(n <= 0)
      return [];
    const ret = [];
    for(let i = 0; i < n; i++)
    {
      ret.push(0);
    }
    return ret;
  };

  type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: {
      rate: number;
      count: number;
    };
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [bought, setBought] = useState(newArray(20));

  const toggleBuy = (index: number) => {
    console.log("buy");
    if(index < 0 || index >= 20)
      return;
    const newBought = [...bought];
    newBought[index] = 1 - newBought[index];
    setBought(newBought);
  };
  
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

  //calc cost of products array
  const calcCost = () => {
    let sum = 0;
    for(let i = 0; i < products.length; i++)
    {
      sum = bought[i] ? sum + products[i].price : sum;
    }
    return sum;
  };

  const items = () => {
    let ret = 0;
    for(let i = 0; i < 20; i++)
    {
      ret += bought[i];
    }
    return ret;
  };

  const numberOfItems = items();
  const totalCost = calcCost();


  return (
    <div className ="layout">
      <Navigation items={numberOfItems} totalCost = {totalCost}></Navigation>
      <Outlet context={{products, toggleBuy}}></Outlet>
    </div>
  )
}

export default App
