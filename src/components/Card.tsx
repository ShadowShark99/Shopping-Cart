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
  
   

  const {products, toggleBuy, bought} = useOutletContext<OutletContextType>();
  const product = products[item];

  if(!product)
  {
    return <div>out of stock</div>
  }
  return (
    <div className="card">
      <img src={product.image}></img>
      <div>{product.title}</div>
      <div className="price">{product.price.toFixed(2)}$</div>
      {bought[item] == true && <button className="remove-button" onClick={() => toggleBuy(item)}>Remove</button>}
      {!bought[item] && <button className="add-button" onClick={() => toggleBuy(item)}>Add</button>}
    </div>
  )
}

export default Card