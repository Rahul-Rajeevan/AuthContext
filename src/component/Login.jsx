import React, { useContext } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    let {toggleAuth,TOKEN} = useContext(AuthContext)
    const [email, setemail] = useState() 
    const [pass, setpass] = useState()
    const [token1, setToken1] = useState("")
    
  

  
const handledatapost=()=>{
    toggleAuth()
    fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(
          {
              "email": email,
              "password": pass
          }
        )
    }).then((r)=>r.json())
    .then((d)=>{
      setToken1(d.token)
        
        // TOKEN=d.token
        
    // console.log("TOKENLOGIN",TOKEN)
    // console.log(d.token)
    // console.log("email",email)
    // console.log("pass",pass) 
    })
   
    console.log("token1",token1)   

}




const handleEmail=(e)=>{
     setemail(e.target.value) 
     console.log(email)
}

const handlepassword=(e)=>{
setpass(e.target.value)
console.log(pass)
}


  return (
    <div>
        <input type="email" placeholder='Enter your name'  onChange={handleEmail} />
        <input type="password" placeholder='Enter Password' onChange={handlepassword}/>
        <button onClick={()=>handledatapost()}>LogIn</button>
    </div>
  )
}

export default Login