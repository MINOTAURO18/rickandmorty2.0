import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import axios from 'axios';
import { Routes, Route, useLocation} from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Error from './components/error/Error';
import Form from './components/form/Form';


function App() {

   const [characters, setCharacters] = useState([]) 

   

   const location = useLocation()

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


   const randomHandler = () => {
      let haveIt = [];
      let random = (Math.random() * 826).toFixed()

      random = Number(random)

      if(!haveIt.includes(random)){
         haveIt.push(random)

         fetch(`https://rickandmortyapi.com/api/character/${random}`)
            .then((response) => response.json())
            .then((data) => {
               if(data.name){
                  setCharacters(((oldChars) => [...oldChars, data]))
               }else {
                  window.alert('No hay personajes con ese ID')
               }
            })
      } else {
         console.log('Ya agregaste a este personaje');
         return false;
      }
   }

   return (
      <div className='App'>
         {
           location.pathname === '/' ? null : <Nav onSearch={searchHandler} random={randomHandler}/>
         }
         <Routes>
            <Route path='/' element={<Form/>}/>
            <Route path='/home'  element={<Cards characters={characters} onClose={closeHandler} />}/>
            <Route path='/about'  element={<About/>}/>
            <Route path='/detail/:id'  element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
