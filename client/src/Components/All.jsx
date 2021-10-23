import Task from '../Components/Task'
import Titulo from './Titulo'
import { useEffect } from 'react'
import box from './box.png'

const All = ({all,deletatask,taskconcluida}) => {

  useEffect(() => {
      console.log(all);
  }, [])

    return (
        <div className = "taskContainer">
          <Titulo titulo = "All"/>
          { all.length > 0 ? all.map( (task,index) => <Task key = {index} task = {task}  deletatask = {deletatask} taskconcluida = {taskconcluida}/>  ) : <div><h1>No tasks yet</h1><div className = "blankspace"> </div><div id="icon"><img src={box} alt="" /></div></div>}
        </div>
    )
}

export default All
