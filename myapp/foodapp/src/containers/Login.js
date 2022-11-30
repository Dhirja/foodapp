
import React, {useState} from "react"
import "./Style/Login.css"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate= useNavigate()
   
    let userArr = JSON.parse(localStorage.getItem('userDetail')) || [];
    console.log(userArr)
    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
            
           
             const {email, password } = user
            if((email==userArr.email) && (password === userArr.password)){

                    alert("login successfull")
                    navigate("/")    
            } else {
                alert("invlid input")
            }
    
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() =>navigate("/signup")}>Sign-up</div>
        </div>
    )
}

export default Login