import { useEffect } from "react";
import Task from '../Components/Task'
import Titulo from './Titulo'
import box from './box.png'

const Today = ({today,deletatask,taskconcluida}) => {

    useEffect( ()=>{
        
        console.log(today);
        
    }

    ,[today]);

    return (
        <div className = "taskContainer">
        <Titulo titulo = "Today"/>
        { today.length > 0 ? today.map( (task,index) => <Task key = {index} task = {task}  deletatask = {deletatask} taskconcluida = {taskconcluida}/>  ) : <div><h1>No tasks for today</h1><div className = "blankspace"> </div><div id="icon"><img src={box} alt="" /></div></div>}
        </div>
    )
}

export default Today
