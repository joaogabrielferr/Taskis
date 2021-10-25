import '../Telainicial.css'
import { useState } from 'react'

const Loginform = ({setMostraloginreg,register,setPesquisouregister}) => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    return (
        <div className = "loginform">
            <div className="registercontainer">
            <input type="text" placeholder = "Username" className = "inputlogin" onChange = {(e)=>setUsername(e.target.value)}/>
             <input type="password" placeholder = "password" className = "inputlogin" onChange = {(e)=>setPassword(e.target.value)}/>
             <div id = "loginbuttons"><button onClick = {()=>register(username,password)} className = "botaodelogin">Register</button><button onClick = {()=>{setMostraloginreg(false);setPesquisouregister(false);}} className ="botaodecancelar">Cancel</button></div>
             </div>
        </div>
    )
}

export default Loginform
