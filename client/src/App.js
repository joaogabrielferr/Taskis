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
import axios from 'axios';

function App() {

  const [logged,setLogged] = useState(0);
  const [username,setUsername] = useState("");
  const [todas,setTodas] = useState("");
  const [all,setAll] = useState([]);
  const [today,setToday] = useState([]);
  const [concluded,setConcluded] = useState([]);
  const [loading,setLoading] = useState(true);






  return (
    
    <Router>
    <div className="App">

    <Switch>
      <Route exact path = "/"> <TelaInicial username = {username} setUsername = {setUsername} setLogged = {setLogged}/>  </Route>
      <ProtectedRoute path = "/app" component = {APP} logged = {logged} username = {username} all = {all} setAll = {setAll} today = {today} setToday = {setToday} concluded = {concluded} setConcluded = {setConcluded} todas = {todas} setTodas = {setTodas}/>
      {/* <ProtectedRoute path = "/load" component = {Load} logged = {logged} username = {username} alltasks = {alltasks} setAlltasks = {setAlltasks} all = {all} today = {today} setAll = {setAll} setToday = {setToday}   /> */}
      {/*<Route path = "/app"> <APP logged = {logged} username = {username} alltasks = {alltasks} addtasks = {addtasks}></APP> </Route>*/}
    </Switch>
    </div>
    </Router>
  );
}

export default App;
