import React, { useState, useEffect, useRef } from "react";

export default function CharacterCard(props) {
    const [active, setActive] = useState(false);
    const attemptRef = useRef(props.value)
    const completedRef = useRef(props.completed)
    const activate = () => {
        if(!active){
            setActive(true)
            props.activateionHandler(props.value)
        }
 
    }

    useEffect(()=> {
        if(attemptRef.current != props.attempt){
            setActive(false);
            attemptRef.current = props.attempt
        }
        if(completedRef.current != props.completed){
            setActive(false)
            completedRef.current = props.completed
        }
    })

    const className = `card ${active ? 'activeCard' : ''}`

    return (
        <div className={className} onClick={activate}>{props.value}</div>
    )
}