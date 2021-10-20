import { useEffect } from "react";

const Archived = ({archived}) => {

    useEffect( ()=>{
        console.log(archived);
    }

    ,[]);

    return (
        <div className = "taskContainer">
            <h1>Hello from Archived</h1>
        </div>
    )
}

export default Archived
