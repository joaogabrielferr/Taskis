import { useEffect } from "react"

const Concluded = ({concluded}) => {

    useEffect( ()=>{
        console.log(concluded);
    }

    ,[]);

    return (
        <div className = "taskContainer">
           { concluded.length > 0 ? <h1>Render the tasks here</h1> : <h1>There is no tasks marked as concluded</h1>}
        </div>
    )
}

export default Concluded
