import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

//  const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//         id: 'm3',
//         title: 'This is a second meetup',
//         image:
//           'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//           'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//       },
//       {
//         id: 'm4',
//         title: 'This is a second meetup',
//         image:
//           'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//           'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//       },
//   ];
//displaying on LL MEETUPS 
function AllMeetupsPage(){
  const [isLoading , setIsLoading] =useState(true);
  const[loadedMeetups,setLoadedMeetups]= useState([]);
    //to render the new added data over home page

     useEffect(()=>{
      setIsLoading(true);
      fetch('https://addmeetups-default-rtdb.firebaseio.com/meetupsadd.json')
      .then(response =>{

        return response.json();
      })
      .then((data)=>{

        const meetups = [];
        //co
        for(const key in data){
          const meetup={
            id:key,
            ...data[key]
          };
          meetups.push(meetup);
        }


        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
     
     },[]);

     if(isLoading){
      return (
        <section>
          <p>loding....</p>
        </section>
      )

    }
    //as this create a infinite loop so will use reacthoop useeffect 
 
    return (
        <section>
        <h1>All SpotedPlaces</h1>
        {/* <ul>
        {DUMMY_DATA.map((meetup)=>{
            return <li key= {meetup.id}>{meetup.title}</li>
        })}
             
        </ul> */}

        <MeetupList meetups={loadedMeetups}/>
           
        </section>
    )
}

export default AllMeetupsPage;