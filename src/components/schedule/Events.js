import React from "react"; 
import SingleEvent from "./SingleEvent";

export default function Events({events}) {
    return(
        events.map(
            (event) => (<SingleEvent event = {event}/>)
        )
    ); 
}