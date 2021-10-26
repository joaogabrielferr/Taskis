

const Task = ({task,deletatask,taskconcluida}) => {
    
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
            <button className = "fas fa-trash-alt" id = "deletebutton" onClick = {()=>deletatask(task.id)}></button>
            <p>&nbsp;&nbsp;&nbsp;</p>
            {task.concluded === 0 ? <button id = "concluida" onClick = {()=> taskconcluida(task.id)}><i class="fas fa-check" id = "checkconcluida"></i></button> : ""}
            </div>
        </div>
    )
}

export default Task
