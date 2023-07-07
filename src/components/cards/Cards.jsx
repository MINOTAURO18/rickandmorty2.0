import Card from "../card/Card";
import styles from './cards.module.css'

export default function Cards({characters}) {
  
  return (
    <div className={styles.cards}>
      
      {
        characters.map((character) => (
          <Card key={character.id} character={character}/>
        ))
      }
    </div>
  );
}
