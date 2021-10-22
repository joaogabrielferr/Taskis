import { useEffect } from "react";
import Task from '../Components/Task'
import Titulo from './Titulo'

const Today = ({today,deletatask}) => {

    useEffect( ()=>{
        
        console.log(today);
        
    }

    ,[today]);

    return (
        <div className = "taskContainer">
            <Titulo titulo = "Today"/>
        { today.length > 0 ? today.map( (task,index) => <Task key = {index} task = {task}  deletatask = {deletatask}/>  ) : <h1>No tasks for today</h1>}
        </div>
    )
}

export default Today
