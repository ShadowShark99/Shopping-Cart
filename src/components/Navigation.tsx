
import NavigationHome from './NavigationHome'
import NavigationShop from './NavigationShop'

import "../styles/Navigation.css"
import NavigationCheckout from './NavigationCheckout'

interface Props{
  items: number;
  totalCost: number;
}

const Navigation = ({items, totalCost}: Props) => {
  return (
    <div className="nav">
      <h3>Let's Shop!</h3>
      <div className="side-info">
        <div className="nav-options">
          <NavigationHome></NavigationHome>
          <NavigationShop></NavigationShop>
        </div>
        <div>{totalCost.toFixed(2)}$({items})</div>
        <NavigationCheckout></NavigationCheckout>
      </div>
      
    </div>
  )
}

export default Navigation
