import axios from "axios";
import styles from './detail.module.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
    const [character, setCharacter] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
         return setCharacter({});
    }, [id])

    return (
        <div  className={styles.detail}>
           <h3>{character.name}</h3>
           <h3>{character.status}</h3>
           <h3>{character.species}</h3>
           <h3>{character.gender}</h3>
           <h3>{character.origin?.name}</h3>
           <img src={character.image} alt={character.name} />
        </div>
    )

}

export default Detail;