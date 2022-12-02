
import { useContext, useEffect, useState } from "react";
import product from '../../data.json'
import "./Homepage.css";
// import axios from "axios";
import { Cartcontext } from "../../context/Context";

const Homepage = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    //  const response = await axios.get("https://fakestoreapi.com/products");
    setdata(product.data);
    console.log(product);
  };
   useEffect(() => {
    fetchData();
   },[]);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="cards" key={index}>
            <img src={item.image} alt="" />
            <p>Nmae: {item.title}</p>
            <h4>Price:{item.price}</h4>
            <button onClick={() => dispatch({ type: "ADD", payload: item })}>
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;