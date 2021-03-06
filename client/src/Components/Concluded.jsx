import Task from '../Components/Task'
import Titulo from './Titulo'
import box from './box.png'

const Concluded = ({concluded,deletatask}) => {



    return (
        <div className = "taskContainer">
        <Titulo titulo = "Concluded"/>
        { concluded.length > 0 ? concluded.map( (task,index) => <Task key = {index} task = {task}  deletatask = {deletatask} />  ) : <div><h1  className = "mensagem">No tasks concluded</h1><div className = "blankspace"> </div><div id="icon" className = "boxicon"><img src={box} alt="" /></div></div>}
        </div>
    )
}

export default Concluded
