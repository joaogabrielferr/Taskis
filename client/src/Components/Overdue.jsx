import Titulo from "./Titulo"
import Task from "./Task"
import box from './box.png'

const Overdue = ({overdue,deletatask,taskconcluida}) => {
    return (
        <div className = "taskContainer">
         <Titulo titulo = "Overdue"/>
         { overdue.length > 0 ? overdue.map( (task,index) => <Task key = {index} task = {task}  deletatask = {deletatask} taskconcluida = {taskconcluida}/>  ) : <div><h1>No late tasks</h1><div className = "blankspace"> </div><div id="icon" className = "boxicon"><img src={box} alt="" /></div></div>}

        </div>
    )
}

export default Overdue
