import SearchBar from '../searchBar/SearchBar'
import styles from './nav.module.css'
import { Link } from 'react-router-dom'

const Nav = ({onSearch, random}) => {
    return (
        <nav className={styles.nav}>
          <div className={styles.links}>

          <Link to='/about'>
            About
          </Link>

          <Link to='/home'>
            Home
          </Link>
          </div>
          <SearchBar onSearch={onSearch} random={random}/>
        </nav>
    )
}

export default Nav;