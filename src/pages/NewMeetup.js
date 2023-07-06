import NewMeetForm from "../components/meetups/NewMeetupForm";
import {useHistory} from  "react-router-dom";

function NewMeetup(){
   
    const history =useHistory();
    function addMeetupHandler(meetupData){
        //sending http request :

        fetch('https://addmeetups-default-rtdb.firebaseio.com/meetupsadd.json',
        {
            method:'POST', //add data to request
            body: JSON.stringify(meetupData),      //json format 
            headers:{
                'Content-Type': 'application/json'
            }
        }
        ).then(()=>{
            history.replace('/');//not able to back 
        });//adding.json req for firebase 

    }
    return (<section>
        <h2>Add New Place</h2>
        <NewMeetForm  onAddMeetup={addMeetupHandler}/>
    </section>)


}

export default NewMeetup;