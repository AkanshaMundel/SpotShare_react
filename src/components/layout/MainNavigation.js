import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation() {
  const favoritesCnt = useContext(FavoritesContext)
  return (
    <header className={classes.header}>
      <div className={classes.logo}>SpotShare</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Spots</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New spots</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites one
              <span className={classes.badge}>
                {favoritesCnt.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation

//just have all nag com
