import { createContext ,useState} from "react";
// import Favorites from "../../pages/Favorites";


const FavoritesContext = createContext({
    //objrct
    favorites:[],
    totalFavorites:0,
    addFavorite:(favoriteMeetup) =>{},
    removeFavorite: (meetupId) =>{},
    itemIsFavorite :(meetupId) =>{}
});



//componetnt : -> providing to all function who intrnst in listening context. also upadting the context value 
 export function FavoritesContextProvider(props){
const [useFavorites ,setUserFavorite] = useState([]);

function addFavoriteHandler(favoriteMeetup){
   setUserFavorite((prevUserFavorites)=>{
    return prevUserFavorites.concat(favoriteMeetup);
   })
}

function removeFavoriteHandler(meetupId){
    setUserFavorite(prevUserFavorites=>{
        return prevUserFavorites.filter(meetup=>meetup.id !== meetupId );
    })
}

function itemIsFavoriteHandler(meetupId){
    return useFavorites.some(meetup=> meetup.Id === meetupId);
}
    const context={
   favorites :useFavorites,
   totalFavorites: useFavorites.length,
   addFavorite: addFavoriteHandler,
   removeFavorite: removeFavoriteHandler,
   itemIsFavorite : itemIsFavoriteHandler
    };
  return <FavoritesContext.Provider value ={context}>
    {props.children}
  </FavoritesContext.Provider>
}

export default FavoritesContext;
//use redux -> for state mangmnt 
//or inbuilt react have context 
//also provider 
//export the fun and const property