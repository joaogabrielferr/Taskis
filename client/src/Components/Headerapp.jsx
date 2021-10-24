import React from 'react'

const Headerapp = ({username,logout}) => {
    return (
        <div className = "headerapp">
            <div className = "innerheaderapp">
                <div className="Logo"><div className = "fas fa-home" id = "homeicon" onClick = {()=>console.log(username)}></div><p>&nbsp;</p><p id ="nome">TASKIS</p></div>
                <div className="Nav">
                <h5 className = "navitem">Logged as {username}</h5>
                <div className = "navitem"><div id="signoutcontainer" onClick = {logout}><i className ="fas fa-sign-out-alt"></i></div></div>
                </div>
            </div>
        </div>
    )
}

export default Headerapp
