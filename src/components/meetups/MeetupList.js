import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css';
function MeetupList(props){
  return <ui className ={classes.list}>
    {props.meetups.map(meetup => <MeetupItem 
    key ={meetup.id}
     id = {meetup.id}
     image = {meetup.image} 
      title = {meetup.title}
    address = {meetup.address}
    description = {meetup.description}
    //or can pass meetup = {meetup}
     />)}
  </ui>
}
export default MeetupList;