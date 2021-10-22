import axios from 'axios';
import{useState,useEffect} from 'react'
import { withRouter } from 'react-router';
import Header from '../Components/Headerapp'
import Options from '../Components/Options'
import All from '../Components/All'
import Today from '../Components/Today'
import Concluded from '../Components/Concluded'
import Task from '../Components/Task';
import Addtask from '../Components/Addtask';

const APP = ({username,all,setAll,today,setToday,concluded,setConcluded,todas,setTodas}) => {  
    
    const [escolha,setEscolha] = useState("");
    const [addtasktoogle,setAddtasktoogle] = useState(true);


    useEffect(() => {
        axios.get(`http://localhost:3001/api/${username}`)
        .then(response =>{
            let data = [response.data];
            data = data[0];
            setTodas(data);
            const a = data.filter((task) => task.concluded === 0);
            setAll(a);
            console.log(all);
            var hoje = new Date();
            var dd = String(hoje.getDate()).padStart(2, '0');
            var mm = String(hoje.getMonth() + 1).padStart(2, '0');
            var yyyy = hoje.getFullYear();
            hoje = dd + '/' + mm + '/' + yyyy;   
            const t = data.filter((task) => task.duedate === hoje && task.concluded === 0);
            const c = data.filter((task) => task.concluded === 1);
            setToday(t);
            setConcluded(c);
        });
    }, []);

    const update = () =>{
        var hoje = new Date();
        var dd = String(hoje.getDate()).padStart(2, '0');
        var mm = String(hoje.getMonth() + 1).padStart(2, '0');
        var yyyy = hoje.getFullYear();
        hoje = dd + '/' + mm + '/' + yyyy;
        let tasks = todas;   
        let a = tasks.filter((task) => task.concluded === 0);
        const t = a.filter((task) => task.duedate === hoje);
        const c = tasks.filter((task) => task.concluded === 1);
        setAll(a);
        setToday(t);
        setConcluded(c);
    }

    const deletatask = async (id) =>{

        const tasks = todas;
        const a = tasks.filter(task => task.concluded === 0 && task.id != id);
        setAll(a);
        let hoje = new Date();
        var dd = String(hoje.getDate()).padStart(2, '0');
        var mm = String(hoje.getMonth() + 1).padStart(2, '0');
        var yyyy = hoje.getFullYear();
        hoje = dd + '/' + mm + '/' + yyyy;
        const t = tasks.filter(task => task.duedate === hoje && task.concluded === 0 && task.id !== id);
        setToday(t);
        const c = tasks.filter(task => task.concluded === 1 && task.id !== id) 
        setConcluded(c);
        const to = tasks.filter(task => task.id !== id);
        setTodas(to);
        const response = await axios.delete(`http://localhost:3001/api/${id}`);
        console.log(response);
    }

    const tooggleaddtask = () =>{
        setAddtasktoogle(!addtasktoogle);
    }

    let componente;

    if(escolha == "all")componente = <All all = {all} deletatask = {deletatask}/>
    if(escolha == "today")componente = <Today today = {today}  deletatask = {deletatask}/>
    if(escolha == "concluded")componente = <Concluded concluded = {concluded}  deletatask = {deletatask}/>

    return (
        
        <div>
            <Header username = {username}/>
            <div className="grid">
            <Options escolha = {escolha} setEscolha = {setEscolha}/>
            <div className="content">
            <div id="Botao">
            <button onClick = {tooggleaddtask}>Add Task</button>
            </div>
            <div className="addtaskcontainer">
            {addtasktoogle === true ? <Addtask tooggleaddtask = {tooggleaddtask}/> : ''}
            </div>
            <div className="componentecontainer">
            {componente}
            </div>
            </div>
            </div>
        </div>
        
    )
}

export default withRouter(APP);
