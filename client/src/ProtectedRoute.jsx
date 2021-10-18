import React from 'react'
import {Route,Redirect} from 'react-router-dom' 

const ProtectedRoute = ({logged, component : Component, ...rest}) => {
    return <Route {...rest} render = {(props) =>{
        if(logged === 1)
        {
            return <Component {...props} {...rest}/>
        }else return <Redirect to = { {pathname : "/", state: {from: props.location}} }/>
    }} />;
}

export default ProtectedRoute
