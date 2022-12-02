import { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Cartcontext } from "../../context/Context";
const Navbar = () => {
  let userArr = JSON.parse(localStorage.getItem('userDetail')) || []
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  console.log(state.length);


  return (
    <div className="nav">
       {userArr.name ?
       <div className="nvdiv1">
          <NavLink to="/header">Food Restaurant</NavLink>
            <div>
              
           <NavLink to="/cart">
             <span class="material-icons">shopping_cart</span>
             {state.length > 0 && (
             <span>{state.length}</span>
           ) }
           </NavLink>
           
           </div>
       </div>
        :
       <div>
        <NavLink to={"/login"}><button>Login</button></NavLink>
        <NavLink to={"/"}><button>Sign-up</button></NavLink>  
       </div>
      }
      
    </div>
  );
};

export default Navbar;