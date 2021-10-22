import React from 'react'

const Headerapp = ({username}) => {
    return (
        <div className = "headerapp">
            <div className = "innerheaderapp">
                <div className="Logo"><h1>TASKIS</h1></div>
                <div className="Nav">
                <h5 className = "navitem">Logged as {username}</h5>
                <h3 className = "navitem">Logout</h3>
                </div>
            </div>
        </div>
    )
}

export default Headerapp
