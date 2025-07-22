import React from 'react'
import { useOutletContext } from 'react-router-dom'
import "../styles/Card.css"

interface Props{
  item: number;
}

type OutletContextType = {
  [key: string]: any; // Replace 'any' with a more specific type if possible
  toggleBuy: (arg0: any) => void;
};



const Card = ({item}: Props) => {

  const {products, toggleBuy} = useOutletContext<OutletContextType>();
  const product = products[item];

  if(!product)
  {
    return <div>out of stock</div>
  }
  return (
    <div className="card">
      <img src={product.image}></img>
      <div>{product.title}</div>
      <div>{product.price}</div>
      <button onClick={() => toggleBuy(item)}>add/remove</button>
    </div>
  )
}

export default Card