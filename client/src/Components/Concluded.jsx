import Task from '../Components/Task'
import Titulo from './Titulo'

const Concluded = ({concluded,deletatask}) => {



    return (
        <div className = "taskContainer">
        <Titulo titulo = "Concluded"/>
        { concluded.length > 0 ? concluded.map( (task,index) => <Task key = {index} task = {task}  deletatask = {deletatask} />  ) : <h1>No tasks concluded yet</h1>}
        </div>
    )
}

export default Concluded
