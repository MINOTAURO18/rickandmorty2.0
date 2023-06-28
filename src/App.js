import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import axios from 'axios';



function App() {

   const [characters, setCharacters] = useState([])

   const searchHandler = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      })
   }

   function onCLose (id) {
      let deleted = characters.filter(character => character.id !== Number(id))

      setCharacters(deleted)
   }

   return (
      <div className='App'>
         <Nav onSearch={searchHandler}/>
         <Cards characters={characters} onClose={onCLose} />
      </div>
   );
}

export default App;
