import React from 'react'
import NavigationHome from './NavigationHome'
import NavigationShop from './NavigationShop'
import "../styles/Navigation.css"

interface Props{
  items: number;
  totalCost: number;
}

const Navigation = ({items, totalCost}: Props) => {
  return (
    <div className="nav">
      <h3>Let's Shop!</h3>
      <div className="nav-options">
        <NavigationHome></NavigationHome>
        <NavigationShop></NavigationShop>
        <div>{totalCost}$({items})</div>
      </div>
      
    </div>
  )
}

export default Navigation
