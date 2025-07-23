import { Link, useParams } from 'react-router-dom'
import "../styles/Shop.css";
import Shelf from './Shelf';

const Shop = () => {
  const {page} = useParams();
  const pageNumber = Number(page);
  return (
    <div className="shop">
      <h2 className="shop-head">Hi, want to buy something?</h2>
      <Shelf page={pageNumber}></Shelf>
        
      <div className="shop-nav">
        {pageNumber <4  && <Link to={`/shop/${pageNumber+1}`}>Next</Link>}
        {pageNumber >1  && <Link to={`/shop/${pageNumber-1}`}>Prev</Link>}
      </div>
      <div className="page-number">
        {pageNumber}
      </div>
      
    </div>

    
  )
}

export default Shop