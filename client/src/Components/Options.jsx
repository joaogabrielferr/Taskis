import { useEffect } from "react";

const Options = ({escolha,setEscolha}) => {

    useEffect(()=>{
        seleciona("li1","al");
        console.log({escolha})
    },[]);

    const seleciona = async (id,esc) =>{

        
        let li = document.getElementById(id);
        li.style.backgroundColor = "#adadad";
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
        // if(esc == "ar")await setEscolha("archived");
        if(esc == "tmrw")await setEscolha("tomorrow");
        if(esc == "over")await setEscolha("overdue");
        
    }

    return (
        <div id = "options">
            <div id="inneroptions">
                <ul id = "ulopcao">
                <li className = "liopcao" id = "li1"><button  onClick = {()=> seleciona("li1","al")} className = "opcao"><i className="fas fa-calendar" id = "tudo"></i>&nbsp;All</button></li>
                <li className = "liopcao" id = "li2"><button onClick = {()=>seleciona("li2","t")} className = "opcao"><i className="far fa-calendar" id = "hoje"></i>&nbsp;Today</button></li>
                <li className = "liopcao" id = "li3"><button onClick = {()=>seleciona("li3","tmrw")} className = "opcao"><i className="fas fa-calendar-week" id = "amanha"></i>&nbsp;Tomorrow</button></li> 
                <li className = "liopcao" id = "li4"><button onClick = {()=> seleciona("li4","over")} className = "opcao"><i className="far fa-calendar-times" id = "atrasado"></i>&nbsp;Overdue</button></li> 
                <li className = "liopcao" id = "li5"><button onClick = {()=>seleciona("li5","c")} className = "opcao"><i className="fas fa-calendar-check" id = "concluido"></i>&nbsp;Concluded</button></li>        
                
                </ul>
            </div>
        </div>
    )
}

export default Options
