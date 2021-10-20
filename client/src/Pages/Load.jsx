import { useEffect } from "react"
import { withRouter } from 'react-router';
import axios from "axios";
import { useHistory } from "react-router";

const Load = ({username,alltasks,addtasks,all,today,concluded,archived,setAll,setToday,setConcluded,setArchived}) => {


    //quando app renderizar pela primeira vez, todos as tasks ja vao ter sido filtradas
    //isso foi necessario pq useeffect não é asincrono

    let history = useHistory();

    useEffect( ()=>{
        
        pegaTasks();
        var hoje = new Date();
        var dd = String(hoje.getDate()).padStart(2, '0');
        var mm = String(hoje.getMonth() + 1).padStart(2, '0');
        var yyyy = hoje.getFullYear();
        hoje = dd + '/' + mm + '/' + yyyy;   
        console.log("hoje:",hoje);
        console.log(alltasks);
        updatetasks(hoje); 

        const timer = setTimeout(() => {
                history.push("/app");
          }, 2000);
          return () => clearTimeout(timer);


    },[]);

    const pegaTasks = async () =>{
        const response  = await axios.get(`http://localhost:3001/api/${username}`);
        console.log(response.data);
        const tasks = [response.data];
        addtasks(tasks[0]);
    }  

    const updatetasks = (hoje) =>{
        console.log("hoje:",hoje);
        console.log(alltasks);
        setAll(alltasks);
        setToday(alltasks.filter((task)=> task.duedate === hoje) );
        setConcluded(alltasks.filter((task) => task.concluded === 1));
        setArchived(alltasks.filter((task)=> task.archived === 1)); 
    }

    return (
        <div className = "load">
            <div id="innerload">
            <div className="loader"></div>
            </div>
        </div>
    )
}

export default withRouter(Load);
