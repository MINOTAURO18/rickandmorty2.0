import styles from "./card.module.css";
import { NavLink } from "react-router-dom";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <button onClick={() => onClose(id)}>X</button>
      <NavLink className={styles.name} to={`/detail/${id}`}>
        <h2>{name}</h2>
      </NavLink>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
    </div>
  );
}
