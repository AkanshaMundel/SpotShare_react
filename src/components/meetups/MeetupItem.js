import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'

function MeetupItem(props) {
  //props id coming from list
  //and intemIsFav fun is from context comp as passing as provider

  const favoritesCts = useContext(FavoritesContext)
  const itemIsFavorite = favoritesCts.itemIsFavorite(props.id)

  function toggleFavoriteStatusHandler() {
    //check the
    if (itemIsFavorite) {
      favoritesCts.removeFavorite(props.id)
    } else {
      favoritesCts.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <description>{props.description}</description>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  )
}
export default MeetupItem
