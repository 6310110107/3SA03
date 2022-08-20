import React, {useState} from 'react';
import _, { attempt, constant, set } from 'lodash';

import CharacterCard from './CharacterCard';
let i = 1
const prepareStateFromWord = (given_word, given_completed, given_attempt) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: given_attempt,
        guess: '',
        completed: given_completed

    }
}

export default function WordCard(props) {
    let selectWord = props.value[0];
    const [state, setState] = useState(prepareStateFromWord(selectWord, 0 , 1))

    const activationHandler = c => {
        console.log(`${c} has been activated`)

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length) {
            if(guess == state.word) {
                setState({...state, completed: state.completed + 1}) 

                setTimeout(function() {
                    alert('yeah!')
                }, 100);
                setState(prepareStateFromWord(selectWord, state.completed + 1, 1))

            }else{
                setState({...state, guess: '', attempt: state.attempt + 1})

                setTimeout(function() {
                    alert('reset, next attempt')
                }, 100);
                setState(prepareStateFromWord(selectWord, state.completed, state.attempt + 1))
            }
        }
    }


        
    const reset = () => {
        selectWord = props.value[i];
        setState({...state, guess: '', attempt: state.attempt + 1})
        setState(prepareStateFromWord(selectWord, state.completed, state.attempt + 1))
            i += 1;  
    }
    
        if(i >= props.value.length) {
            i = 0;
        }


    return (
        <div>
            <div className='center'>
                {
                    state.chars.map((c ,i) => 
                        <CharacterCard value = {c} key={i} activationHandler={activationHandler} attempt={state.attempt} completed = {state.completed}/>)
                }
                <div>
                <button className='button' onClick={reset}>RESET</button>
                </div>
            </div>

        </div>
    
    )
}