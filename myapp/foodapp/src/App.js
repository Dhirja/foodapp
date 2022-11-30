
import './App.css';
import Header from './containers/Header';
import {Route, Routes,Link} from "react-router-dom";
import Signup from './containers/Signup';
import Fooditem from './containers/Menu/Fooditem';
import Login from './containers/Login';
import { useContext } from "react";
import CartContext from "./context/cart/CartContext";
import OrderSum from './containers/Food_cart/OrderSum';
import Checkout from './containers/Food_cart/Checkout';
// import Cart from "./containers/Food_cart/Cart";
function App() {
  let userArr = JSON.parse(localStorage.getItem('userDetail')) || []
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <div className="App">
  <div className="header">
    <div className="navdiv">
        
             <Link to={"/"}><h3>Food Restaurant</h3></Link>
             
            <div className='leftdiv'>
                <Link to={"/login"}><button>Login</button></Link>
                <Link to={"/signup"}><button>Sign-up</button></Link>
                
               
               <Link to={'/cartorder'}><i
            className='fa fa-shopping-cart'
            aria-hidden='true'
            onClick={showHideCart}
            />
            </Link>
          
          {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
            </div>
         
      </div>
  </div>

      <Routes>
              <Route path='/' exact element={<Header />}/>
              <Route path='/fooditem' exact element={<Fooditem/>}/>
              <Route path='/signup' exact element={<Signup/>}/>
              <Route path='/login' exact element={<Login/>}/>
              <Route path='/cartorder' exact element={<OrderSum/>}/>
              <Route path='/checkout' exact element={<Checkout/>}/>

      </Routes>
     
    </div>
  );
}

export default App;
