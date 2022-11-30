
import React, { useState } from "react"
import "./Style/Signup.css"
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Signupuser = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){

           localStorage.setItem('userDetail',JSON.stringify(user)) ;
                alert("sign up successfull")
                navigate("/login")
            
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="signup">
            {console.log("User", user)}
            <h1>Signup</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={Signupuser} >Signup</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
    )
}

export default Signup