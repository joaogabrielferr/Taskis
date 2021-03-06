import {useEffect,useState} from 'react'

const Edittask = ({editid,edittitle,editdesc,setMostraedit,editatask}) => {

    const [id,setId] = useState(0);
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [prio,setPrio] = useState(0);

    useEffect(() => {
        setTitle(edittitle);
        setDesc(editdesc);
        setId(editid);
        document.getElementById("titlearea").value = edittitle;
        document.getElementById("descarea").value = editdesc;

    }, [])

    useEffect(()=>{

        let hoje = new Date();
        var dd = String(hoje.getDate()).padStart(2, '0');
        var mm = String(hoje.getMonth() + 1).padStart(2, '0');
        var yyyy = hoje.getFullYear();
        hoje = yyyy + '-' + mm + '-' + dd;
        document.getElementById("date").setAttribute("min",hoje);
        document.getElementById("date").setAttribute("defaultValue",hoje);
    },[]);


    const edit = () =>{

        if(title.length === 0)
        {
            alert("You have to enter a title for the task.");
            return;
        }

        let date = document.getElementById("date").value;
        let y = date.substring(0,4);
        let m = date.substring(5,7);
        let d = date.substring(8,10);
        let today = d + "/" + m + "/" + y;
        
        // addtask(title,desc,today,prio);
        editatask(id,title,desc,today,prio);

    }

    const cancela = () =>{
        setMostraedit(false);
    }

    return (
        <div id = "addtaskcontainer">
        <div className="blankspace"> </div>
        <div className="addtask">
             <div id="titleareacontainer">
             <input type="text" placeholder = "Ex:Finish my computer graphics project until 7pm" id = "titlearea" onChange = {(e) =>{setTitle(e.target.value)} }/>
             </div>
             <div id="descareacontainer">
             <textarea name="" rows = "3" placeholder = "Description" id="descarea" onChange = {(e)=>{setDesc(e.target.value)}}></textarea>
             </div>
             <div id="datepriocontainer">
                 <div><label htmlFor="">Due date </label><input type="date" id = "date" /></div>
                 <div><label htmlFor="">Priority </label><input type="range" id = "prio" min = "1" max = "10" defaultValue = "1" onChange = {(e)=>{setPrio(e.target.value)}}/></div>
             </div>
             {/* <div className  = "blankspace"> </div> */}
        </div>
        <div className="blankspace"> </div>
        <div id="buttonscontainer">
                 <button id = "edittaskbutton" onClick = {edit}>Edit task</button>
                 <button id="cancelbutton" onClick = {cancela} >Cancel</button>
             </div> 
        </div>
        
    )
}

export default Edittask
