import { useState } from "react";
import { useHistory } from "react-router";

const Headerapp = ({username,logout,fazbusca,mostramenu}) => {

    const [input,setInput] = useState("");

    let history = useHistory();
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
                <div className="Logo"><button className = "Menu" onClick = {mostramenu}><i className="fas fa-bars"></i></button><p>&nbsp;</p><p>&nbsp;</p><div id = "homeicon" onClick = {()=>console.log(username)}><h3 id = "taskis">TASKIS</h3></div><p>&nbsp;</p></div>
                <div id = "searchbarcontainer"><input type="text" id = "searchbar" placeholder = "Search task" onChange = {(e)=>{setInput(e.target.value)}}/><button id = "searchbarbutton" onClick = {pegaSearch}><i className="fas fa-search"></i></button></div>
                <div className="Nav">
                {/* <h5 className = "navitem">Logged as {username}</h5> */}
                <div className = "navitem"><div id="signoutcontainer" onClick = {logout}><i className ="fas fa-sign-out-alt"></i></div></div>
                </div>
            </div>
        </div>
    )
}

export default Headerapp
