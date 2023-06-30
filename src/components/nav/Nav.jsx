import SearchBar from '../searchBar/SearchBar'
import styles from './nav.module.css'
import { Link } from 'react-router-dom'

const Nav = ({onSearch}) => {
    return (
        <nav className={styles.nav}>
          <Link to='/about'>
            About
          </Link>

          <Link to='/home'>
            Home
          </Link>
          <SearchBar onSearch={onSearch} />
        </nav>
    )
}

export default Nav;