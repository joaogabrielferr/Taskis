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


function App() {

  const [logged,setLogged] = useState(0);
  const [username,setUsername] = useState("");
  const [alltasks,setAlltasks] = useState([]);

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
      <ProtectedRoute path = "/app" component = {APP} logged = {logged} username = {username} alltasks = {alltasks} addtasks = {addtasks}/>
      {/*<Route path = "/app"> <APP logged = {logged} username = {username} alltasks = {alltasks} addtasks = {addtasks}></APP> </Route>*/}
    </Switch>
    </div>
    </Router>
  );
}

export default App;
