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
import Tomorrow from '../Components/Tomorrow'
import Overdue from '../Components/Overdue'
import Footer from '../Components/Footer'

const APP = ({username,all,setAll,today,setToday,concluded,setConcluded,todas,setTodas,tomorrow,setTomorrow,overdue,setOverdue}) => {  
    
    const [escolha,setEscolha] = useState("");
    const [addtasktoogle,setAddtasktoogle] = useState(false);
    const [loading,setLoading] = useState(false);

    const diaformatado = (dia) =>{
        var dd = String(dia.getDate()).padStart(2, '0');
        var mm = String(dia.getMonth() + 1).padStart(2, '0');
        var yyyy = dia.getFullYear();
        let hoje = dd + '/' + mm + '/' + yyyy;
        return hoje; 
    }

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3001/api/${username}`)
        .then(response =>{
            let data = [response.data];
            data = data[0];
            setTodas(data);
            const a = data.filter((task) => task.concluded === 0);
            setAll(a);
            console.log(all);
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            let hoje = diaformatado(today);   
            const t = data.filter((task) => task.duedate === hoje && task.concluded === 0);
            const c = data.filter((task) => task.concluded === 1);
            setToday(t);
            setConcluded(c);
            //set atrasados
            const atrasa = data.filter((task) =>{
                let datatask = task.duedate;
                let ano = datatask.substring(6,10);
                let mes = datatask.substring(3,5);
                let dia = datatask.substring(0,3);
                if(parseInt(yyyy) > parseInt(ano))
                {
                    return true;
                }
                if(parseInt(mm) > parseInt(mes))
                {
                    return true;
                }
                if(parseInt(dd) > parseInt(dia))
                {
                    return true;
                }
                return false;
            });
            setOverdue(atrasa);
            let tmrw = new Date(today);
            tmrw.setDate(tmrw.getDate() + 1);
            let amanha = diaformatado(tmrw);
            console.log(amanha);
            const am = data.filter((task) => task.concluded === 0 && task.duedate === amanha);
            setTomorrow(am);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        });
    }, []);


    const deletatask = async (id) =>{
        const tasks = todas;
        const a = tasks.filter(task => task.concluded === 0 && task.id != id);
        setAll(a);
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        let hoje = diaformatado(today);
        console.log(hoje);
        const t = tasks.filter(task => task.duedate === hoje && task.concluded === 0 && task.id !== id);
        setToday(t);
        const c = tasks.filter(task => task.concluded === 1 && task.id !== id) 
        setConcluded(c);
        const atrasa = tasks.filter((task) =>{
            let datatask = task.duedate;
            let ano = datatask.substring(6,10);
            let mes = datatask.substring(3,5);
            let dia = datatask.substring(0,3);
            if(parseInt(ano) < parseInt(yyyy) && task.id !== id)
            {
                console.log("comparação:",parseInt(yyyy)," e ",parseInt(ano));
                return true;
            }else if(parseInt(mes) < parseInt(mm) && task.id !== id)
            {
                console.log("comparação:",parseInt(mm)," e ",parseInt(mes));
                return true;
            }else if(parseInt(dia) < parseInt(dd) && task.id !== id)
            {
                console.log("comparação:",parseInt(dd)," e ",parseInt(dia));
                return true;
            }else return false;

        });
        setOverdue(atrasa);
        let tmrw = new Date(today);
        tmrw.setDate(tmrw.getDate() + 1);
        let amanha = diaformatado(tmrw);
        console.log(amanha);
        const am = tasks.filter((task) => task.concluded === 0 && task.duedate === amanha && task.id !== id);
        setTomorrow(am);        
        const to = tasks.filter(task => task.id !== id);
        setTodas(to);
        const response = await axios.delete(`http://localhost:3001/api/${id}`);
        console.log(response);
    }

    const addtask = async (_title,_desc,date,_prio) =>{
        setLoading(true);
        axios.post(`http://localhost:3001/api`,
        {
            un : username,
            title : _title,
            description : _desc,
            duedate: date,
            priority : _prio,
            concluded : 0,
            archived : 0
        })
        .then(response =>{
            console.log(response);
            axios.get(`http://localhost:3001/api/${username}`)
            .then(response2 =>{
                let data = [response2.data];
                data = data[0];
                setTodas(data);
                const a = data.filter((task) => task.concluded === 0);
                setAll(a);
                console.log(all);
                let today = new Date();
                let dd = String(today.getDate()).padStart(2, '0');
                let mm = String(today.getMonth() + 1).padStart(2, '0');
                let yyyy = today.getFullYear();
                // hoje = dd + '/' + mm + '/' + yyyy;
                let hoje = diaformatado(today);   
                const t = data.filter((task) => task.duedate === hoje && task.concluded === 0);
                const c = data.filter((task) => task.concluded === 1);
                setToday(t);
                setConcluded(c);
                const atrasa = data.filter((task) =>{
                    let datatask = task.duedate;
                    let ano = datatask.substring(6,10);
                    let mes = datatask.substring(3,5);
                    let dia = datatask.substring(0,3);
                    if(parseInt(yyyy) > parseInt(ano))
                    {
                        return true;
                    }
                    if(parseInt(mm) > parseInt(mes))
                    {
                        return true;
                    }
                    if(parseInt(dd) > parseInt(dia))
                    {
                        return true;
                    }
                    return false;
                });
                setOverdue(atrasa);
                let tmrw = new Date(today);
                tmrw.setDate(tmrw.getDate() + 1);
                let amanha = diaformatado(tmrw);
                console.log(amanha);
                const am = data.filter((task) => task.concluded === 0 && task.duedate === amanha);
                setTomorrow(am);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });
        })




    }

    const taskconcluida = (id) =>{
        setTimeout(() => {
            taskconcluida2(id);
        }, 500);
    }

    const taskconcluida2 = (id) =>{
        let tasks = todas;
        let tsks = todas;
        tsks.forEach(task => {
            if(task.id === id)task.concluded = 1;
        });
        const a = tasks.filter(task => task.concluded === 0 && task.id != id);
        setAll(a);
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        let hoje = diaformatado(today);
        const t = tasks.filter(task => task.duedate === hoje && task.concluded === 0 && task.id !== id);
        setToday(t);
        const atrasa = tasks.filter((task) =>{
            let datatask = task.duedate;
            let ano = datatask.substring(6,10);
            let mes = datatask.substring(3,5);
            let dia = datatask.substring(0,3);
            if(parseInt(ano) < parseInt(yyyy) && task.id !== id)
            {
                return true;
            }else if(parseInt(mes) < parseInt(mm) && task.id !== id)
            {
                return true;
            }else if(parseInt(dia) < parseInt(dd) && task.id !== id)
            {
                return true;
            }else return false;

        });
        setOverdue(atrasa);
        let tmrw = new Date(today);
        tmrw.setDate(tmrw.getDate() + 1);
        let amanha = diaformatado(tmrw);
        console.log(amanha);
        const am = tasks.filter((task) => task.concluded === 0 && task.duedate === amanha && task.id !== id);
        setTomorrow(am); 
        const c = tsks.filter(task => task.concluded === 1) 
        setConcluded(c);
        setTodas(tsks);       

    }

    const tooggleaddtask = () =>{
        setAddtasktoogle(!addtasktoogle);
    }

    let componente;

    if(escolha == "all")componente = <All all = {all} deletatask = {deletatask} taskconcluida ={taskconcluida}/>
    if(escolha == "today")componente = <Today today = {today}  deletatask = {deletatask} taskconcluida ={taskconcluida}/>
    if(escolha == "concluded")componente = <Concluded concluded = {concluded}  deletatask = {deletatask}/>
    if(escolha == "tomorrow")componente = <Tomorrow tomorrow = {tomorrow} deletatask = {deletatask} taskconcluida ={taskconcluida}/>
    if(escolha == "overdue")componente = <Overdue overdue = {overdue} deletatask = {deletatask} taskconcluida ={taskconcluida}/>

    return (
        
        <div>
            <Header username = {username}/>
            <div className="grid">
            <Options escolha = {escolha} setEscolha = {setEscolha}/>
            <div className="content">
            {addtasktoogle === false ? 
            <div id="divbotaoaddtask"><button onClick = {tooggleaddtask} id = "botaoaddtask">Add Task</button><button>Sort by</button></div> 
            : ''}
            <div className="addtaskcontainer">
            {addtasktoogle === true ? <Addtask tooggleaddtask = {tooggleaddtask} addtask = {addtask}/> : ''}
            </div>
            <div className="componentecontainer">
            {loading === false ? componente : <div className = "loadingcointainer"><div className="loader">Loading...</div></div>}
            </div>
            </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default withRouter(APP);
