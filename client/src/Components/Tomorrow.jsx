import Titulo from './Titulo'
import Task from './Task'
import { useEffect } from 'react'
import box from './box.png'

const Tomorrow = ({tomorrow,deletatask,taskconcluida}) => {

    useEffect(()=>{
        console.log(tomorrow);
    },[]);

    return (
        <div className = "taskContainer">
            <Titulo titulo = "Tomorrow"/>
            { tomorrow.length > 0 ? tomorrow.map( (task,index) => <Task key = {index} task = {task}  deletatask = {deletatask} taskconcluida = {taskconcluida}/>  ) : <div><h1 className = "mensagem">No tasks for tomorrow</h1><div className = "blankspace"> </div><div id="icon"  className = "boxicon" ><img src={box} alt=""/></div></div>}
        </div>
    )
}

export default Tomorrow
