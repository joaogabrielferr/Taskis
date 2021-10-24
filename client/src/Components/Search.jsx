import Titulo from './Titulo'
import Task from './Task'
import { useEffect } from 'react'

const Search = ({searched,deletatask,taskconcluida}) => {
    
    useEffect(()=>{
        console.log("SEARCHED DENTRO DE SEARCH:",searched);
    },[]);
    
    return (
        <div className = "taskContainer">
        <Titulo titulo = "Results"/>
            {searched.length === 0 ? <h1>No results were found.</h1> :
                searched.map( (task,index) => <Task key = {index} task = {task}  deletatask = {deletatask} taskconcluida = {taskconcluida}/>  ) 
            }
            
        </div>
    )
}

export default Search
