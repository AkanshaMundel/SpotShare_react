import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'

import MeetupList from '../components/meetups/MeetupList'

function Favorites() {
  const favoritesCnt = useContext(FavoritesContext) //storing all props

  let content

  if (favoritesCnt.totalFavorites === 0) {
    content = <p>YOU GOT NO FAVORITES YET. start adding some?</p>
  } else {
    content = <MeetupList meetups={favoritesCnt.favorites} />
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}

export default Favorites;
