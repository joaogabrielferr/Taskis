import { useEffect } from "react";

const Options = ({escolha,setEscolha}) => {

    useEffect(()=>{
        seleciona("li1","al");
        console.log({escolha})
    },[]);

    const seleciona = async (id,esc) =>{

        
        let li = document.getElementById(id);
        li.style.backgroundColor = "black";
        let pai = li.parentNode;
        let filhos = pai.children;
        for(let i = 0;i<filhos.length;i++)
        {
            if(filhos[i].id != id)
            {
                filhos[i].style.backgroundColor = "transparent";
            }
        }
        
        if(esc == "al")await setEscolha("all");
        if(esc == "t")await setEscolha("today");
        if(esc == "c")await setEscolha("concluded");
        if(esc == "ar")await setEscolha("archived");
        
    }

    return (
        <div id = "options">
            <div id="inneroptions">
                <ul id = "ulopcao">
                <li className = "liopcao" id = "li1"><button  onClick = {()=> seleciona("li1","al")} className = "opcao">All</button></li>
                <li className = "liopcao" id = "li2"><button onClick = {()=>seleciona("li2","t")} className = "opcao">Today</button></li>
                <li className = "liopcao" id = "li3"><button className = "opcao">Tomorrow</button></li> 
                <li className = "liopcao" id = "li4"><button className = "opcao">Overdue</button></li> 
                <li className = "liopcao" id = "li5"><button onClick = {()=>seleciona("li5","c")} className = "opcao">Concluded</button></li>        
                
                </ul>
            </div>
        </div>
    )
}

export default Options
