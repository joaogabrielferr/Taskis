import axios from "axios"
import { useHistory } from "react-router";

const TelaInicial = ({username,adduser,logUser}) => {

        let history = useHistory();
    const us = "user1";
    const pw = "password1";

    const login = async () =>{

        const response = await axios.post("http://localhost:3001/api/user",{
            username : us,
            password : pw
        });
        await adduser(response.data[0]["username"]);
        await logUser(1);
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
