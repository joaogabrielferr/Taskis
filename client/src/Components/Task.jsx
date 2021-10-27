

const Task = ({task,deletatask,taskconcluida,tooglemostraedit}) => {
    
    return (
        <div className = "task">
            <div id="checkboxdiv">
            {
                task.concluded === 1 ? <input type="checkbox" className = "checkbox" checked readOnly/> : ""
            }
            </div>
            <div id="taskcontent">
                <h3>{task.title}</h3>
                <h5>{task.description}</h5>
                <br/>
                 <div id="prioanddatetask">
                <h5>Priority:{task.priority}&nbsp;&nbsp;&nbsp;</h5>
                <h5>{task.duedate}</h5></div>
            </div>
            <div id="icons">
                {/* <button className="fas fa-edit" id = "editbutton"></button> */}
            {task.concluded === 0 ?
            <button className = "far fa-edit" id = "editbutton" onClick = {()=>{tooglemostraedit(task.id,task.title,task.description)}}></button> : ''
            }
            <p>&nbsp;&nbsp;&nbsp;</p>
            <button className = "fas fa-trash-alt" id = "deletebutton" onClick = {()=>deletatask(task.id)}></button>
            <p>&nbsp;&nbsp;&nbsp;</p>
            {task.concluded === 0 ? <button id = "concluida" onClick = {()=> taskconcluida(task.id)}><i className="fas fa-check" id = "checkconcluida"></i></button> : ""}
            </div>
        </div>
    )
}

export default Task
