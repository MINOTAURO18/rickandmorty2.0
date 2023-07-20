import SearchBar from '../searchBar/SearchBar'
import styles from './nav.module.css'
import { Link, NavLink } from 'react-router-dom'
import logoHome from '../../assets/Inicio.svg'
import logoSalir from '../../assets/salir.svg'
import logoAbout from '../../assets/sobremi.svg'
import logoCora from '../../assets/corazon.svg'



const Nav = ({onSearch, random, logOut}) => {

  
   
    return (
      <div>

        <nav className={styles.nav}>
          <div className={styles.links}>

          <Link to='/about'>
            About
          </Link>

          <Link to='/home'>
            Home
          </Link>

          <Link to='/favorites'>
            Favorites
          </Link>

          <button onClick={() => logOut()}>Log Out</button>
          </div>
          <SearchBar onSearch={onSearch} random={random}/>
        </nav>

        <nav className={styles.mobile}>
          <NavLink to='/home'><img src={logoHome} alt="" /></NavLink>
          <NavLink to='/about'><img src={logoAbout} alt="" /></NavLink>
          <NavLink to='/favorites'><img src={logoCora} alt="" /></NavLink>
          <NavLink to='/'><img src={logoSalir} alt="" /></NavLink>
        </nav>
      </div>
    )
}

export default Nav;