import SearchBar from '../searchBar/SearchBar'
import styles from './nav.module.css'

const Nav = ({onSearch}) => {
    return (
        <nav>
          <SearchBar onSearch={onSearch} />
        </nav>
    )
}

export default Nav;