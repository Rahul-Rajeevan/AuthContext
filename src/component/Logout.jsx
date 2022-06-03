import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Logout = () => {
    let {toggleAuth,TOKEN} = useContext(AuthContext)
    

const handlelogout=()=>{
    toggleAuth()
    TOKEN=""
    // console.log("TOKENLOGOUT",TOKEN.current)
}

  return (
    <div>
        <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout