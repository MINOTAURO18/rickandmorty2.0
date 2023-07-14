import Card from "../card/Card";
import styles from './cards.module.css'

export default function Cards({characters, onClose}) {
  
  return (
    <div className={styles.cards}>
      
      {
        characters.map((character) => (
          <Card key={character.id} character={character} onClose={onClose}/>
        ))
      }
    </div>
  );
}
