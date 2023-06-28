import './App.css';
import Cards from './components/cards/Cards';
import SearchBar from './components/searchBar/SearchBar';
import characters, { Rick } from './data.js';

function App() {

   const searchHandler = (e) => {
      window.alert('el ID que estoy buscando')
   }

   const closeHandler = () => {
      window.alert('Emulando el cierre de la card')
   }

   return (
      <div className='App'>
         <SearchBar onSearch={searchHandler} />
         <Cards characters={characters} onClose={closeHandler} />
      </div>
   );
}

export default App;
