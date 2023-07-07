import styles from "./card.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card(props) {
  const {character, onClose, addFav, removeFav, favorites} = props;
  const {image, name,  id} = character
  
  const [isFav, setIsFav] = useState(false)

  const handleFavorite = (character) => {
    if(!isFav){
      addFav(character)
      setIsFav(true)
    } else {
      removeFav(character)
      setIsFav(false)
    }
  }

  useEffect(() => {
    favorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [favorites]);

  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <button className={styles.close} onClick={() => onClose(id)}>X</button>
      <NavLink className={styles.name} to={`/detail/${id}`}>
        <h2>{name}</h2>
      </NavLink>
      {
   isFav ? (
      <button className={styles.fav} onClick={() => handleFavorite(character.id)}>❤️</button>
   ) : (
      <button className={styles.fav} onClick={() => handleFavorite(character)}>🤍</button>
   )
}
     
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id))
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)
