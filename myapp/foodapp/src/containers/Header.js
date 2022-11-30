import "./Style/Header.css"
import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom"
import Fooditem from "./Menu/Fooditem"

function Header() {
  // const [value, setValue] = useState(true)
  const {fooditem} = useParams()
  console.log(fooditem)
  return (
    <div className='parent'>
        { fooditem ? <Fooditem/>:
         <div>
              <h1>Welcome to Food's Kitchen</h1>
              <Link to={'/fooditem'}><button className="gotomenu">GO TO MENU</button></Link>
         </div>
        }
   </div>
  )
  }

export default Header