
import { useContext } from "react";
import { Cartcontext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  let navigate = useNavigate();
  // console.log(state.length);


  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart">
      
      {state.map((item, index) => {
        return (
          <div className="card" key={index}>
            {/* <img src={item.image} alt="" /> */}
            <span>{item.title}</span>
            {/* <span>{item.quantity * item.price}</span> */}
            <span> {item.quantity}</span>

            <div className="quantity">
           
              <button className="btn1"
                onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                +
              </button>
              <button className="btn2"
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}>
                -
              </button>
            </div>
            {/* <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              x
            </h2> */}
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <span>Tota(INR) : {total}</span>
          <button className="gotochkoutbtn1" onClick={()=>navigate('/checkout')} >SAVE AND CHECKOUT</button>
          <button className="gotochkoutbtn2"  onClick={()=>navigate('/fooditem')}>CANCEL</button>
        </div>
      )}
    </div>
  );
};

export default Cart;