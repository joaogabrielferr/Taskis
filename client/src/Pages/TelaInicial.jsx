import axios from "axios"
import { useHistory } from "react-router";
import Load from "./Load";

const TelaInicial = ({logged,username,setUsername,setLogged}) => {


    //so serve pra dar fetch na api antes do primeiro render ta tela principal do app
    let history = useHistory();
    const us = "user1";
    const pw = "password1";

    const login = async () =>{

        const response = await axios.post("http://localhost:3001/api/user",{
            username : us,
            password : pw
        });
        await setUsername(response.data[0]["username"]);
        await setLogged(1);
        history.push("/app");
        
    }

    return (
        <div>
            <button onClick = {login} >Login</button>
            <h1>{username}</h1>
        </div>
    )
}

export default TelaInicial
