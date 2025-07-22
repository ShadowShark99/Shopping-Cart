import React from 'react'
import { useOutletContext } from 'react-router-dom'
import "../styles/Card.css"

interface Props{
  item: number;
}

type OutletContextType = {
  [key: string]: any; // Replace 'any' with a more specific type if possible
};



const Card = ({item}: Props) => {

  const product = useOutletContext<OutletContextType>()[item];

  return (
    <div className="card">
      <img src={product.image}></img>
      <div>{product.title}</div>
      <div>{product.price}</div>
      
    </div>
  )
}

export default Card