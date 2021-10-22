

const Task = ({task,deletatask}) => {
    
    return (
        <div className = "task">
            <div id="checkboxdiv">
            {
                task.concluded === 1 ? <input type="checkbox" className = "checkbox" defaultChecked/> : <input type="checkbox" className = "checkbox"/>
            }
            </div>
            <h3>{task.title}</h3>
            <h5>{task.description}</h5>
            <div id="icons">
                <button className="fas fa-edit"></button>
            <button className = "deletebutton" onClick = {()=>deletatask(task.id)}>X</button>
            </div>
        </div>
    )
}

export default Task
