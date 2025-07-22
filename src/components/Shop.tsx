import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from './Card';
import "../styles/Shop.css";

const Shop = () => {

  const products = useOutletContext();

  return (
    <div>
      <h2>Hi, want to buy something?</h2>
      <div className="shop">
        <div className="shelf">
          <Card item={0}></Card>
          <Card item={1}></Card>
          <Card item={2}></Card>
          <Card item={3}></Card>
          <Card item={4}></Card>
        </div>
        <div className="shelf">
          <Card item={5}></Card>
          <Card item={6}></Card>
          <Card item={7}></Card>
          <Card item={8}></Card>
          <Card item={9}></Card>
        </div>
        <div className="shelf">
          <Card item={10}></Card>
          <Card item={11}></Card>
          <Card item={12}></Card>
          <Card item={13}></Card>
          <Card item={14}></Card>
        </div>
        <div className="shelf">
          <Card item={15}></Card>
          <Card item={16}></Card>
          <Card item={17}></Card>
          <Card item={18}></Card>
          <Card item={19}></Card>
        </div>
      </div>
    </div>

    
  )
}

export default Shop