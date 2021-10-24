import { useState } from "react";

const Headerapp = ({username,logout,fazbusca}) => {

    const [input,setInput] = useState("");

    const pegaSearch = () =>{
        if(input.length == 0)
        {
            alert("type something in the input first!");
            return;
        }
        fazbusca(input);
    }

    return (
        <div className = "headerapp">
            <div className = "innerheaderapp">
                <div className="Logo"><div className = "fas fa-home" id = "homeicon" onClick = {()=>console.log(username)}></div><p>&nbsp;</p><p id ="nome">TASKIS</p></div>
                <div id = "searchbarcontainer"><input type="text" id = "searchbar" placeholder = "Search task" onChange = {(e)=>{setInput(e.target.value)}}/><button id = "searchbarbutton" onClick = {pegaSearch}><i className="fas fa-search"></i></button></div>
                <div className="Nav">
                <h5 className = "navitem">Logged as {username}</h5>
                <div className = "navitem"><div id="signoutcontainer" onClick = {logout}><i className ="fas fa-sign-out-alt"></i></div></div>
                </div>
            </div>
        </div>
    )
}

export default Headerapp
