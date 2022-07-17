import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from "@fullcalendar/list"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import interactionPlugin from "@fullcalendar/interaction"
import esLocale from "@fullcalendar/core/locales/es"
import { Link } from "react-router-dom"


export default function Calendar(){
    const handleEventClick = (ev) =>
    {
        console.log(ev.event.startStr)
        
    }
    return(
        <div className="container">
            <FullCalendar
                 locale={esLocale}
                 plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin,listPlugin]}
                 initialView="dayGridMonth"
                 headerToolbar={{
                    left: "prev,next today",
                    center:"title",
                    right:"dayGridMonth,timeGridWeek,listWeek"
                 }}
                 businessHours = {{
                    startTime : "7:00",
                    endTime : "20:00",
                    daysOfWeek : [1,2,3,4,5,6]
                 }}
                 timeZone="local"
                 
                 events={[
                    {title:"", start:"2022-07-15T12:30:00", end:"2022-07-15T14:00:00", backgroundColor:"green", borderColor:"green"},
                    {title:"", start:"2022-07-15T16:30:00", end:"2022-07-15T18:00:00", nombre_participante:"Pedro"}
                ]}
                eventClick= {handleEventClick}
                eventContent = {renderEventContent}
                
            />
        </div>
    )   
}


function renderEventContent(eventInfo){

    return(
        <div>
            <div>Cita</div>
            <div>{eventInfo.event.title}</div>
            <div>{eventInfo.event.extendedProps.nombre_participante}</div>
        </div>
    )
}
