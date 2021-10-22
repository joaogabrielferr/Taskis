import { useEffect } from "react"
import { withRouter } from 'react-router';
import axios from "axios";
import { useHistory } from "react-router";

const Load = ({username,alltasks,setAlltasks,all,today,setAll,setToday}) => {


    //quando app renderizar pela primeira vez, todos as tasks ja vao ter sido filtradas
    //isso foi necessario pq useeffect não é assíncrono

    let history = useHistory();

    useEffect( ()=>{
        
        pegaTasks();
        // var hoje = new Date();
        // var dd = String(hoje.getDate()).padStart(2, '0');
        // var mm = String(hoje.getMonth() + 1).padStart(2, '0');
        // var yyyy = hoje.getFullYear();
        // hoje = dd + '/' + mm + '/' + yyyy;   
        // console.log("hoje:",hoje);
        // console.log(alltasks);
        // updatetasks(hoje); 
        console.log("TESTE");
        const timer = setTimeout(() => {
            console.log(all);
            console.log(today);
            console.log(alltasks);
                history.push("/app");
          }, 2000);
          return () => clearTimeout(timer);


    },[]);

    const pegaTasks = async () =>{
        axios.get(`http://localhost:3001/api/${username}`)
        .then(response =>{
            const tasks = [response.data];
            setAlltasks(tasks[0]);
            setTimeout(() => {
                console.log("passou timeout, deve ter alltasks aqui");
                console.log(alltasks);
                updatetasks();               
              }, 1500);

        });

    }  

    const updatetasks = (hoje) =>{
        console.log("hoje:",hoje);
        console.log(alltasks);
        setAll(alltasks.filter((task) => task.archived === 0 && task.concluded === 0) );
        setToday(alltasks.filter(task => task.duedate === hoje && task.archived === 0 && task.concluded === 0) );
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
