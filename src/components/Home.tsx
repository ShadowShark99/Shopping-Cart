import React from 'react'
import { useOutletContext } from 'react-router-dom'
import "../styles/Home.css";

//baby_shark_by_locolobo333_dgh3876-pre.jpg

const Home = () => {

  type Product = { image: string; [key: string]: any };
  const products = useOutletContext<Product[]>();
  console.log(products);
  const n = products.length;

  //will RUN infinitely if n < 3
  const gen3Random = (n: number) => {
    if (n > 3)
      n = 3;
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

  //n needs to be less than 3
  const genImages = (n: number) => {
    if(n < 3)
    {
      return [];
    }
    const indexes = gen3Random(n);
    const sources = [];
    sources.push(products[indexes[0]].image);
    sources.push(products[indexes[1]].image);
    sources.push(products[indexes[2]].image);
    return sources;
  };

  const sources = genImages(n);
  const validSources = sources.length > 0;
  console.log(validSources);

  return (
    <div className="home-page">
      <div className="home-header">
        <h2>Welcome Home To SharkBite</h2>
        <img src="baby_shark_by_locolobo333_dgh3876-pre.jpg"/>
      </div>
      
      <div className="advertise">
        <div className="products">
          
            {validSources && (<>
            <div>
            <img src={sources[0]}></img>
          </div>
          <div>
            <img src={sources[1]}></img>
          </div>
          <div>
            <img src={sources[2]}></img>
          </div>
            </>  )}
          
          
        </div>
        <div className="subtitle">
          Buy things for your pet shark!
        </div>
      </div>
    </div>
  )
}

export default Home
