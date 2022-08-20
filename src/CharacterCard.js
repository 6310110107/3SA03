import React, { useState, useEffect, useRef } from "react";

export default function CharacterCard(props) {
    const [active, setActive] = useState(false);
    const attemptRef = useRef(props.value)
    const completedRef = useRef(props.completed)
    const activate = () => {
        if(!active){
            setActive(true)
            props.activationHandler(props.value)
        }
 
    }

    useEffect(()=> {
        if(attemptRef.current != props.attempt){
            setTimeout(function() {
                setActive(false);
                attemptRef.current = props.attempt            
            }, 100);

        }
        if(completedRef.current != props.completed){
                setTimeout(function() {
                setActive(false);
                completedRef.current = props.completed
            }, 100);
        }
    })

    const className = `card ${active ? 'activeCard' : ''}`
    
    return (
        <div className={className} onClick={activate}>{props.value}</div>
    )
}