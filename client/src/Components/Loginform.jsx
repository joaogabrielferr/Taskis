import '../Telainicial.css'
import { useState } from 'react'

const Loginform = ({setMostraloginform,login,setPesquisoulogin}) => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    return (
        <div className = "loginform">
            <div className="logincontainer">
            <input type="text" placeholder = "Username" className = "inputlogin" onChange = {(e)=>setUsername(e.target.value)}/>
             <input type="password" placeholder = "password" className = "inputlogin" onChange = {(e)=>setPassword(e.target.value)}/>
             <div className = "loginbuttons"><button onClick = {()=>login(username,password)} className = "botaodelogin">Login</button>    <button onClick = {()=>{setMostraloginform(false);setPesquisoulogin(false);}} className ="botaodecancelar">Cancel</button></div>
             </div>
        </div>
    )
}

export default Loginform
