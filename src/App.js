import React from 'react';
import './App.css';
//import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = ["Dog","Cat","Ant"];
function App() {
  return (
  <div>
    {
      <WordCard value={word}/>
    }
  </div>
  );
}
export default App;