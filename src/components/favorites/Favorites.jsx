import Cards from "../cards/Cards";
import styles from "./favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { orderFavorites, filterFavorites, resetFavorites} from "../../redux/actions";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  const handleSort = (e) => {
    dispatch(orderFavorites(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterFavorites(e.target.value));
  };

  const reset = () => {
    dispatch(resetFavorites());
  };

  return (
    <div className={styles.favoritos}>
      <div className={styles.select}>
        <select placeholder="Gender" onChange={handleFilter}>
          {['Male', 'Female', 'unknown', 'Genderless'].map((gender)=> (
            <option value={gender}>{gender}</option>
          ))}
        </select>

        <select placeholder="Order" onChange={handleSort}>
          {["Ascendente", "Descendente"].map((gender) => (
            <option value={gender}>
              {gender}
            </option>
          ))}
        </select>
        <button onClick={reset}>Reset</button>
      </div>
      <Cards characters={favorites} />
    </div>
  );
};

export default Favorites;
