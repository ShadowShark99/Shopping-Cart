import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Home = () => {

  type Product = { image: string; [key: string]: any };
  const products = useOutletContext<Product[]>();
  console.log(products);
  const n = products.length;

  const gen3Random = (n: number) => {
    const ret = [];
    ret.push(Math.floor(Math.random()*n));
    do
    {
      if(ret.length == 2)
        ret.pop();
      ret.push(Math.floor(Math.random()*n));
    }while(ret[1] === ret[0]);

    do
    {
      if(ret.length == 3)
        ret.pop();
      ret.push(Math.floor(Math.random()*n));
    }while(ret[2] === ret[0] || ret[2] === ret[1]);

    return ret;
  };

  const genImages = (n: number) => {
    const indexes = gen3Random(n);
    const sources = [];
    sources.push(products[indexes[0]].image);
    sources.push(products[indexes[1]].image);
    sources.push(products[indexes[2]].image);
    return sources;
  };

  const sources = genImages(n);

  return (
    <div className="home-page">
      <h2>Welcome Home To SharkBite</h2>
      <div className="advertise">
        <div className="products">
          <img src={sources[0]}></img>
          <img src={sources[1]}></img>
          <img src={sources[2]}></img>
        </div>
        <div>
          Buy things for your pet shark!
        </div>
      </div>
    </div>
  )
}

export default Home