import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Home = () => {

  const products = useOutletContext();
  console.log(products);

  return (
    <div className="home-page">
      <h2>Welcome Home To SharkBite</h2>
      <div className="advertise">
        <div className="products">
          <img></img>
          <img></img>
          <img></img>
        </div>
        <div>
          Buy things for your pet shark!
        </div>
      </div>
    </div>
  )
}

export default Home