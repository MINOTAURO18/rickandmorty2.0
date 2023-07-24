import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Error from "./components/error/Error";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);

  const [acces, setAcces] = useState(false);

  const dispatch = useDispatch();

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAcces(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  const logOut = () => {
    setAcces(false);
    navigate("/");
  };

  const location = useLocation();

  const navigate = useNavigate();

  async function searchHandler (id){
     try {
       const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
           const char = characters?.find(
             (element) => element.id === Number(data.id)
           );
           if (char) {
             alert("this character is already in the list");
           } else if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
           } else {
             window.alert("¡No hay personajes con este ID!");
           }
         

    } catch(error) {
      console.log(error)
    }
  };

  const closeHandler = (id) => {
    let deleted = characters.filter((character) => character.id !== Number(id));

    dispatch(removeFav(id));

    setCharacters(deleted);
  };

  const randomHandler = () => {
    let haveIt = [];
    let random = (Math.random() * 826).toFixed();

    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);

      fetch(`http://localhost:3001/rickandmorty/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      console.log("Ya agregaste a este personaje");
      return false;
    }
  };

  return (
    <div className="App">
      {location.pathname === "/" ? null : (
        <Nav onSearch={searchHandler} random={randomHandler} logOut={logOut} />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={closeHandler} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/favorites"
          element={<Favorites onClose={closeHandler} characters={characters} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
