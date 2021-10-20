import { useEffect } from "react";

const Today = ({today}) => {

    useEffect( ()=>{
        console.log({today});
    }

    ,[]);

    return (
        <div className = "taskContainer">
           { today.length > 0 ? <h1>Render the tasks here</h1> : <h1>There is no tasks for today</h1>}
        </div>
    )
}

export default Today
