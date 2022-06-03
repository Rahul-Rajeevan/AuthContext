import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Login from './Login'
import Logout from './Logout'

const Navbar = () => {
    const {isAuth,TOKEN} = useContext(AuthContext)
  return (
    <div>
        
        {isAuth ? <Logout/> : <Login/>}
        {(TOKEN.current!==0) ? `Login Succesfull Your Token ID - ${TOKEN.current}` : "Login to proceed" }
        {console.log(TOKEN.current)}
        
    </div>
  )
}

export default Navbar