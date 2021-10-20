import axios from 'axios';
import{useState,useEffect,useCallback} from 'react'
import { Redirect,Route } from 'react-router';
import { withRouter } from 'react-router';
import Header from '../Components/Headerapp'
import Options from '../Components/Options'
import All from '../Components/All'
import Today from '../Components/Today'
import Concluded from '../Components/Concluded'
import Archived from '../Components/Archived'

const APP = ({username,alltasks,addtasks,all,today,concluded,archived,setAll,setToday,setConcluded,setArchived}) => {
    
    //opcao 1: receber todas as tasks pelo alltasks e devidir em todas,hoje,concluido e arquivo por aqui
    //opcao 2: ter todos os estados direto no componente App(primeiro)

    const [escolha,setEscolha] = useState("all");


    useEffect( ()=>{
        console.log({username});
        pegaTasks();
            var hoje = new Date();
            var dd = String(hoje.getDate()).padStart(2, '0');
            var mm = String(hoje.getMonth() + 1).padStart(2, '0');
            var yyyy = hoje.getFullYear();
            hoje = dd + '/' + mm + '/' + yyyy;   
            console.log("hoje:",hoje);
            console.log(alltasks);
            updatetasks(hoje);


    },[]);

    const updatetasks = (hoje) =>{
        console.log("hoje:",hoje);
        console.log(alltasks);
        setAll(alltasks);
        setToday(alltasks.filter((task)=> task.duedate === hoje) );
        setConcluded(alltasks.filter((task) => task.concluded === 1));
        setArchived(alltasks.filter((task)=> task.archived === 1)); 
    }


    const pegaTasks = async () =>{
        const response  = await axios.get(`http://localhost:3001/api/${username}`);
        console.log(response.data);
        const tasks = [response.data];
        addtasks(tasks[0]);
        var hoje = new Date();
        var dd = String(hoje.getDate()).padStart(2, '0');
        var mm = String(hoje.getMonth() + 1).padStart(2, '0');
        var yyyy = hoje.getFullYear();
        updatetasks(hoje);
    }

    const pegaEscolha = async (esc) =>{
        setEscolha(esc);
    }

    let componenteatual;

    if(escolha === "all")componenteatual = <All all = {alltasks}/>;
    if(escolha === "today")componenteatual = <Today today = {today}/>
    if(escolha === "concluded")componenteatual = <Concluded concluded = {concluded}/>;
    if(escolha === "archived")componenteatual = <Archived archived = {archived}/>

    return (
        
        <div>

            <Header username = {username}/>
            <Options escolha = {escolha} pegaEscolha = {pegaEscolha}/>
            <div id="Botao">
                <button>Add Task</button>
            </div>
            {componenteatual}
            <h1>Teste</h1>

            <h2>{username}</h2>
            {
                alltasks.map((task,index) => <h1 key = {index}>{task.title} {task.duedate}</h1>)
            }
        </div>
        
    )
}

export default withRouter(APP);
