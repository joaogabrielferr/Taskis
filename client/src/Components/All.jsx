import Task from '../Components/Task'
import Titulo from './Titulo'
import { useEffect } from 'react'

const All = ({all,deletatask}) => {

  useEffect(() => {
      console.log(all);
  }, [])

    return (
        <div className = "taskContainer">
          <Titulo titulo = "All"/>
          { all.length > 0 ? all.map( (task,index) => <Task key = {index} task = {task}  deletatask = {deletatask}/>  ) : <h1>No tasks yet</h1>}
        </div>
    )
}

export default All
