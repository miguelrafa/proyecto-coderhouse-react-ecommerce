import React from 'react'
import cartWidget from '.././images/cart.png'

const CartWidget = () => {
  return (
    <a className="navbar-brand" href="#">
    <img src={cartWidget} alt="" width="40" height="46" className="d-inline-block align-text-center" />		
    </a>
  )
}

export default CartWidget