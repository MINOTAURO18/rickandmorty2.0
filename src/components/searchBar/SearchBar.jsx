import { useState } from 'react';
import styles from './searchBar.module.css'

export default function SearchBar(props) {
   const {onSearch} = props
   const [id, setId] = useState('')

   const handleChange = (e) => {
      e.preventDefault()
      let event = e.target.value
      setId(
         event
      )
   }


   return (
      <div className={styles.searchBar}>
         <input type='search' value={id} onChange={handleChange}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
