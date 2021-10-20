import { useEffect } from "react";

const Options = ({escolha,pegaEscolha}) => {

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
        
        if(esc == "al")await pegaEscolha("all");
        if(esc == "t")await pegaEscolha("today");
        if(esc == "c")await pegaEscolha("concluded");
        if(esc == "ar")await pegaEscolha("archived");
        
    }

    return (
        <div id = "options">
            <div id="inneroptions">
                <ul id = "ulopcao">
                <li className = "liopcao" id = "li1"><button  onClick = {()=> seleciona("li1","al")} className = "opcao">All</button></li>
                <li className = "liopcao" id = "li2"><button onClick = {()=>seleciona("li2","t")} className = "opcao">Today</button></li>
                <li className = "liopcao" id = "li3"><button onClick = {()=>seleciona("li3","c")} className = "opcao">Concluded</button></li>
                <li className = "liopcao" id = "li4"><button onClick = {()=>seleciona("li4","ar")} className = "opcao">Archived</button></li>         
                </ul>
            </div>
        </div>
    )
}

export default Options
