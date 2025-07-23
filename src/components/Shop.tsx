import React from 'react'
import { Link, useOutletContext, useParams } from 'react-router-dom'
import Card from './Card';
import "../styles/Shop.css";
import Shelf from './Shelf';

const Shop = () => {

  const products = useOutletContext();
  const {page} = useParams();
  const pageNumber = Number(page);
  return (
    <div className="shop">
      <h2>Hi, want to buy something?</h2>
      <Shelf page={pageNumber}></Shelf>
        
      <div className="shop-nav">
        {pageNumber <4  && <Link to={`/shop/${pageNumber+1}`}>Next</Link>}
        {pageNumber >1  && <Link to={`/shop/${pageNumber-1}`}>Prev</Link>}
      </div>
      
    </div>

    
  )
}

export default Shop