import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Error from './components/error/Error';



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

   const  closeHandler = (id) => {
      let deleted = characters.filter(character => character.id !== Number(id))

      setCharacters(deleted)
   }

   return (
      <div className='App'>
         <Nav onSearch={searchHandler}/>
         <Routes>
            <Route path='/home'  element={<Cards characters={characters} onClose={closeHandler} />}/>
            <Route path='/about'  element={<About/>}/>
            <Route path='/detail/:id'  element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
