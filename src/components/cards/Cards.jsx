import Card from "../card/Card";
import styles from './cards.module.css'

export default function Cards({characters, onClose}) {
  
  return (
    <div className={styles.cards}>
      {characters.map((char) => {
        return (
          <Card
            id={char.id}
            key={char.id}
            name={char.name}
            image={char.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
