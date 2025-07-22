import React from 'react'
import NavigationHome from './NavigationHome'
import NavigationShop from './NavigationShop'
import "../styles/Navigation.css"

const Navigation = () => {
  return (
    <div className="nav">
      <h3>Let's Shop!</h3>
      <div className="nav-options">
        <NavigationHome></NavigationHome>
        <NavigationShop></NavigationShop>
      </div>
      
    </div>
  )
}

export default Navigation
