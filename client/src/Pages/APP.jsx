import axios from 'axios';
import{useState,useEffect} from 'react'
import { withRouter } from 'react-router';
import Header from '../Components/Headerapp'
import Options from '../Components/Options'

const APP = ({username,alltasks,addtasks}) => {
    
    //opcao 1: receber todas as tasks pelo alltasks e devidir em todas,hoje,concluido e arquivo por aqui
    //opcao 2: ter todos os estados direto no componente App(primeiro)

    const [all,setAll] = useState([]);
    const [today,setToday] = useState([]);
    const [concluded,setConcluded] = useState([]);
    const [archived,setArchived] = useState([]);
    const [showall,setShowall] = useState(1);
    const [showtoday,setShowtoday] = useState(0);
    const [showconcluded,setShowconcluded] = useState(0);
    const [showArchived,setShowarchived] = useState(0);
    useEffect( ()=>{

        pegaTasks();
        console.log(alltasks);

    },[]);

    const pegaTasks = async () =>{
        const response  = await axios.get(`http://localhost:3001/api/${username}`);
        console.log(response.data);
        const tasks = [response.data];
        await addtasks(tasks);

        //update all,today,concluded e archived
    }

    const mostra = () =>{
        console.log({alltasks});
    }

    return (

        <div>
            <Header username = {username}/>
            <Options alltasks = {alltasks}/>
            <h1>Teste</h1>

            <h2>{username}</h2>
            {
                alltasks[0].map((task,index) => <h1 key = {index}>{task.title} {task.duedate}</h1>)
            }
        </div>
    )
}

export default withRouter(APP);
