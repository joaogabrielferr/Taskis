import { useEffect } from "react"

const All = ({all}) => {

    useEffect( ()=>{
        console.log(all);
    }

    ,[]);

    return (
        <div className = "taskContainer">
          {  all.map( (task,index) => <h1 key={index}> {task.title} </h1>  )}
        </div>
    )
}

export default All
