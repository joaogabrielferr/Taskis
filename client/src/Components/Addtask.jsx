import {useEffect,useState} from 'react'

const Addtask = ({tooggleaddtask}) => {

    useEffect(()=>{

        let hoje = new Date();
        var dd = String(hoje.getDate()).padStart(2, '0');
        var mm = String(hoje.getMonth() + 1).padStart(2, '0');
        var yyyy = hoje.getFullYear();
        hoje = yyyy + '-' + mm + '-' + dd;
        document.getElementById("date").setAttribute("min",hoje);
        document.getElementById("date").setAttribute("defaultValue",hoje);

    },[]);


    return (
        <div className="addtask">
             <div id="titleareacontainer">
             <input type="text" placeholder = "Ex:Finish my computer graphics project until 7pm" id = "titlearea"/>
             </div>
             <div id="descareacontainer">
             <textarea name="" rows = "5" placeholder = "Description" id="descarea"></textarea>
             </div>
             <div id="datepriocontainer">
                 <div><label htmlFor="">Due date </label><input type="date" id = "date" /></div>
                 <div><label htmlFor="">Priority </label><input type="range" min = "1" max = "10"/></div>
             </div>
             <div id="buttonscontainer">
                 <button id = "addtaskbutoon">Add task</button>
                 <button id="cancelbutton">Cancel</button>
             </div>
        </div>
    )
}

export default Addtask
