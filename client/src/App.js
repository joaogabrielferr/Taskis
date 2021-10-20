import './App.css';
import TelaInicial from './Pages/TelaInicial'
import APP from './Pages/APP'
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import Load from "./Pages/Load"

function App() {

  const [logged,setLogged] = useState(0);
  const [username,setUsername] = useState("");
  const [alltasks,setAlltasks] = useState([]);
  const [all,setAll] = useState([]);
  const [today,setToday] = useState([]);
  const [concluded,setConcluded] = useState([]);
  const [archived,setArchived] = useState([]);





  const adduser = async (user) =>{

      setUsername(user);
  }

  const addtasks = async (tasks) =>{
    setAlltasks(tasks);
  }

    const logUser = async () =>
    {
      setLogged(1);
    }


  return (
    
    <Router>
    <div className="App">

    <Switch>
      <Route exact path = "/"> <TelaInicial username = {username} adduser = {adduser} logUser = {logUser}/>  </Route>
      <ProtectedRoute path = "/app" component = {APP} logged = {logged} username = {username} alltasks = {alltasks} addtasks = {addtasks} all = {all} today = {today} concluded = {concluded} archived = {archived} setAll = {setAll} setToday = {setToday} setConcluded = {setConcluded} setArchived = {setArchived}/>
      <ProtectedRoute path = "/load" component = {Load} logged = {logged} username = {username} alltasks = {alltasks} addtasks = {addtasks} all = {all} today = {today} concluded = {concluded} archived = {archived} setAll = {setAll} setToday = {setToday} setConcluded = {setConcluded} setArchived = {setArchived}   />
      {/*<Route path = "/app"> <APP logged = {logged} username = {username} alltasks = {alltasks} addtasks = {addtasks}></APP> </Route>*/}
    </Switch>
    </div>
    </Router>
  );
}

export default App;
