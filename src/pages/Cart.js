import React from 'react'

import './cart.css'
import TotalShopping from '../components/Total'
import CartItems from '../components/CartItem'

import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux'

import {useNavigate} from 'react-router-dom'

function CartData(props) {
  const notify=props.notify;
  const navigate = useNavigate()

const cart = useSelector((state) => state.cart)
  return (
        <div className="cart">
     <div className="cart__left">
 {cart.length >0  ? <div>
    <h3>Shopping Cart</h3>
    <ToastContainer  />
    {cart?.map((it) => (
      <CartItems
        key={it.id}
        id={it.id}
        image={it.image}
        title={it.title}
        price={it.price} 
        notify={notify}
        quantity={it.quantity}
      />
    ))}
  </div>  :   navigate('/')   }
</div>
 <div className="cart__right">
        <TotalShopping/>
    
      </div>
    
    </div>
    
  )
}

export default CartData