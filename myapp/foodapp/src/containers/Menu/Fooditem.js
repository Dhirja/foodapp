import products from "../../data.js";
import "./Fooditem.css";
import { useContext } from "react";
 import CartContext from "../../context/cart/CartContext";
//  import formatCurrency from "format-currency";

const Fooditem = () => {
    // console.log(products)
       const { addToCart } = useContext(CartContext);
       
  return (
    
    <div className='products__wrapper'>
      {products.map((product) => (
        <div className='productCard__wrapper' key={product._id}>
      
        <img className='productCard__img' src={product.image} alt='' />
        <h4>{product.name}</h4>
        <div className='ProductCard__price'>
          <h5>Price:{product.price}</h5>
        </div>
        <button
          className='ProductCard__button'
           onClick={() => addToCart(product)}>Add to cart</button>

        {/* <button className='ProductCard__button'>+</button>
        <button className='ProductCard__button'>-</button> */}
    </div>
      ))}
    </div>
  );
};

export default Fooditem;