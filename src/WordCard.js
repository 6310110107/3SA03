import React from "react";
import CharacterCard from "./CharacterCard";
export default function WordCard(props) {

    const activateionHandler = c => {
        console.log(`&{c} has been activated`)
    }
    return (
        <div>
            {
                Array.from(props.value).map((c ,i) => 
                    <CharacterCard value = {c} key={i} activateionHandler={activateionHandler}
                />)
            }
        </div>
    )
}