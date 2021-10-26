import axios from "axios"
import { useHistory } from "react-router";
import Load from "./Load";
import { useState } from "react";
import Loginform from '../Components/Loginform'
import '../Telainicial.css'
import Registerform from '../Components/Registerform'
import Tela from '../TASKIS.PNG'
import Typewriter from 'typewriter-effect';

const TelaInicial = ({logged,username,setUsername,setLogged}) => {

    const [un,setUn] = useState(""); //username
    const [pw,setPw] = useState(""); //password
    const [unreg,setUnreg] = useState("");
    const [pwreg,setPwreg] = useState("");
    const [mostraloginform,setMostraloginform] = useState(false);
    const [mostraloginreg,setMostraloginreg] = useState(false);
    const [naoexiste,setNaoexiste] = useState(false);
    const [pesquisoulogin,setPesquisoulogin] = useState(false);
    const [pesquisouregister,setPesquisouregister] = useState(false);
    const [loadinglogin,setLoadinglogin] = useState(false);
    const [loadingregister,setLoadingregister] = useState(false);
    const [erro,setErro] = useState(false);
    const [registrado,setRegistrado] = useState(false);
    const [jaexiste,setJaexiste] = useState(false);
    let history = useHistory();




   



    const login = async (_un,_pw) =>{
        setJaexiste(false);
        setNaoexiste(false);
        setLoadinglogin(true);
        setUn(_un);
        setPw(_pw);
        setPesquisoulogin(true);
        if(_un.length === 0 || _pw.length === 0)
        {
            setLoadinglogin(false);
            return;
        }
        axios.post("http://localhost:3001/api/user",{
            username : _un,
            password : _pw
        }).then(response =>{
            console.log("response:",response);
            if(response.data.length === 0)
            {
                setTimeout(() => {
                    setLoadinglogin(false);
                    setNaoexiste(true);       
                }, 1000);
                
                return;
            }
            setUsername(response.data[0]["username"]);
            setLogged(1);
            history.push("/app"); 
        });
    }

    const register = (_un,_pw) =>{
        setJaexiste(false);
        setRegistrado(false);
        setErro(false);
        setLoadingregister(true);
        setUnreg(_un);
        setPwreg(_pw);
        setPesquisouregister(true);

        if(_un.length === 0 || _pw.length === 0)
        {

            setLoadingregister(false);
            return;
        }
        
        
        axios.post("http://localhost:3001/api/user/check",{
            username : _un
        }).then(response =>{
            if(response.data.length !== 0)
            {
                console.log("retornou:",response);
                console.log("JA EXISTE USUARIO CADASTRADO COM ESSE NOME DE USUARIO");
                setTimeout(() => {
                    setLoadingregister(false);
                    setJaexiste(true);       
                }, 1000);

                return;
            }
            

        axios.post("http://localhost:3001/api/user/create",{
            username : _un,
            password : _pw
        })
        .then(response=>{
            if(response.data !== "user created in the database")
            {
                setLoadingregister(false);
                setErro(true);
                return;
            }
            setTimeout(() => {
                setLoadingregister(false);
                setRegistrado(true);
            }, 2000);
        })
        .catch(err=>{
            setLoadingregister(false);
            setErro(true);
            return;
        });

        })
        .catch(err=>{
            console.log("RETORNOU O ERRO:",err);
        });

    }



    return (
        <div className = "telainicial">
             <div className="telainicialcontainer">
            <div className = "headerinicial">
                <div className="innerheaderinicial">
                    <div id = "logoprincipal">
                    <h2><a href="https://github.com/joaogabrielferr" target="_blank"><i className="fab fa-github"></i></a></h2>
                    <h1>&nbsp;&nbsp;&nbsp; </h1>
                    <h2><a href="https://www.linkedin.com/in/joaogabrielferr" target = "_blank"><i className="fab fa-linkedin"></i></a></h2>
                    </div>
                    <h3 id ="aboutlink">  <a href="#footertelainicial">ABOUT</a></h3>
                </div>
            </div>
            <hr/>
            <div className = "logreg">

            <div className="logogrande">
                <h1 id = "taskisgrande">TASKIS<i className="fas fa-check"></i></h1>
             <h1 id = "teste">
              
              <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .typeString('Create task:')
                        .typeString('Meet friends saturday at 10 am.')
                        .pauseFor(1000)
                        .deleteChars(31)
                        .typeString('finish my computer graphics project.')
                        .pauseFor(1000)
                        .deleteChars(36)
                        .typeString('Study for my algorithms exam next week.')
                        .pauseFor(1000)
                        .deleteChars(39)
                        .typeString('Start learning C#.')
                        .pauseFor(1000)
                        .deleteChars(18)
                        .deleteAll()
                        .typeString('Taskis👍')
                        .pauseFor(2000)
                        .deleteAll()
                        .start();
                    }}
                    options = {{loop:true}}
/>

        </h1>
            </div>
            


        <p>&nbsp;</p>      
            
          

             <div id="loginresgister">
            {mostraloginform === false ? <button onClick = {()=>setMostraloginform(true)} id = "loginbutton" >Login</button> : ''}
            
            { loadinglogin === true ? <div className="loader">Loading...</div> :(
            mostraloginform === true ? <div className="loginformcontainer">
            <Loginform setMostraloginform = {setMostraloginform} login = {login} setPesquisoulogin = {setPesquisoulogin}/>
            </div> : '')}
            { mostraloginform && naoexiste ? <p className = "mensagemform">There isn't a user with this username and password</p>:''}
            {pesquisoulogin && (un.length === 0 || pw.length === 0) ? <p className = "mensagemform">Enter a valid username and password</p>:''}
            <p>&nbsp;</p>
            {mostraloginreg === false ? <button onClick = {()=>setMostraloginreg(true)} id = "registerbutton">Register</button>:''}
            { loadingregister === true ? <div className="loader">Loading...</div> :(
            mostraloginreg === true ? <div className="loginformcontainer">
            <Registerform setMostraloginreg = {setMostraloginreg} register = {register} setPesquisouregister = {setPesquisouregister}/>
            </div> : '')}
            {pesquisouregister && (unreg.length === 0 || pwreg.length === 0) ? <p className = "mensagemform">Enter a valid username and password</p>:''}
            {erro ? <p className = "mensagemform">An error ocurred!</p> : ''}
            {jaexiste ? <p className = "mensagemform">There is already a user registered with this username. Please choose another one.</p> : ''}
            {registrado ? <p className = "mensagemform">Registration completed, you may log in now!</p> : ''}
            </div>
            </div>
            
            <div className="imagem">
                <div className="imagemcontainer">
                    <img src={Tela} alt=""/>
                </div>
                
            </div>
            </div>
            <h1>&nbsp; </h1>
            <h1>&nbsp; </h1>
        <div id = "footertelainicial">
            <div id="eu">
                <h2>Made by João Gabriel</h2>
                <div id="eusociais">
                    <h2><a href="https://github.com/joaogabrielferr" target="_blank"><i className="fab fa-github"></i></a></h2>
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h1>
                    <h2><a href="https://www.linkedin.com/in/joaogabrielferr" target = "_blank"><i className="fab fa-linkedin"></i></a></h2>
                </div>
            </div>
            <div id = "creditos">Empty box icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
        <h1>&nbsp; </h1>
            <h1>&nbsp; </h1>

        </div>
    )
}

export default TelaInicial
