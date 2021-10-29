

const Titulo = ({titulo}) => {
    return (
        <div className = "titulo">
            {titulo === "All" ? <h2><i className="fas fa-calendar"></i>&nbsp;All</h2> : 
            
            titulo === "Today" ? <h2><i className="far fa-calendar" id = "hoje"></i>&nbsp;Today</h2> : 

            titulo === "Tomorrow" ? <h2><i className="fas fa-calendar-week" id = "amanha"></i>&nbsp;Tomorrow</h2> :

            titulo === "Overdue" ? <h2><i className="far fa-calendar-times" id = "atrasado"></i>&nbsp;Overdue</h2> :

            titulo === "Concluded" ? <h2><i className="fas fa-calendar-check" id = "concluido"></i>&nbsp;Concluded</h2> : ''
            
            }

        </div>
    )
}

export default Titulo
