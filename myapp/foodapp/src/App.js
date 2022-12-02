import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import Signup from './components/Signup'
import Login from './components/Login'
import Header from "./components/Header";
import Checkout from './pages/cart/Checkout'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Signup/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/header' exact element={<Header />}/>
        <Route path="/fooditem" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/checkout' exact element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;