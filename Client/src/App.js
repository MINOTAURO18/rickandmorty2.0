import { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Error from './components/error/Error';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';


function App() {

   const [characters, setCharacters] = useState([]) 

   const [acces, setAcces] = useState(false)

   let EMAIL = 'prueba@gmail.com';
   let PASSWORD = 'prueba1'
   const dispatch = useDispatch()


   const login = (userData) => {
      
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAcces(true)
         navigate('/home')
      }
   }

   const logOut = () => {
         setAcces(false)
         navigate('/')
   }

   const location = useLocation()

   const navigate = useNavigate()

   const searchHandler = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         const char = characters?.find(element => element.id === Number(data.id))
         if(char){
            alert('this character is already in the list')
         }
         else if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      })
   }

   const  closeHandler = (id) => {
      let deleted = characters.filter(character => character.id !== Number(id))

      dispatch(removeFav(id))

      setCharacters(deleted)
   }


   const randomHandler = () => {
      let haveIt = [];
      let random = (Math.random() * 826).toFixed()

      random = Number(random)

      if(!haveIt.includes(random)){
         haveIt.push(random)

         fetch(`http://localhost:3001/rickandmorty/character/${random}`)
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
           location.pathname === '/' ? null : <Nav onSearch={searchHandler} random={randomHandler} logOut={logOut}/>
         }
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home'  element={<Cards characters={characters} onClose={closeHandler} />}/>
            <Route path='/about'  element={<About/>}/>
            <Route path='/detail/:id'  element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites onClose={closeHandler} characters={characters}/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
