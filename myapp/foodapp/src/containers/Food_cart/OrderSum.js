
import { useContext } from "react";
import React from 'react'
import "./orderSum.css"
import CartContext from "../../context/cart/CartContext";
import {useNavigate} from 'react-router-dom'


const OrderSum = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  let navigate = useNavigate();

  let opts = { format: "%s%v", symbol: "₹" };
  return (
    <div className='maindiv'>
        <div className='cart__wrapper'>
          <h3>ORDER SUMMARY</h3>
          <div className='cart__innerWrapper'>
              {cartItems.length === 0 ? (
                <h4>Cart is Empty</h4>
              ) : (
                <ul>
                  {cartItems.map((item) => (
                    <li className='CartItem__item'>
                      <img src={item.image} alt='' />
                      <div>
                        {item.name} {(`${item.price}`)}
                      </div>
                      <button className='CartItem__button' onClick={() => removeItem(item._id)}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )   }

          </div>
            {cartItems.length &&
              <div className='Cart__cartTotal'>
                
                    Total(INR) :
                    {(
                      cartItems.reduce((amount, item) => item.price + amount,0)
                    )}
                    <button onClick={()=>navigate('/checkout')} >SAVE AND CHECKOUT</button>
                    <button onClick={()=>navigate('/fooditem')}>CANCEL</button>
              </div>}
        </div>
    </div>
  )
}

export default OrderSum