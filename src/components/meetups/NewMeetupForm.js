import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css"
import {  useRef } from "react";

function NewMeetupForm(props){


    const titleInputref = useRef(); //ref obj 
    const imageInputref = useRef(); 
    const addressInputref = useRef(); 
    const descriptionInputref = useRef();

    function submitHandler(event){
        event.preventDefault();
        
        const  enterTitle = titleInputref.current.value;//hold the cur value --> for reading not changing so we use ref
        const  enterImage= imageInputref.current.value;
        const  enterAddress= addressInputref.current.value;
        const  enterDescription = descriptionInputref.current.value;
       
        //object 
        const meetupData={
          title:enterTitle,
          image:enterImage,
          address: enterAddress,
          description: enterDescription,
        }
        props.onAddMeetup(meetupData);
        console.log(meetupData);
                                                                                                                                                                                                                                                                                                                                                 
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
              <div  className={classes.control}>
                <label htmlFor="title"> Tittle</label>
                <input type='text' required id="title"  ref ={titleInputref}/>
              </div>
              <div  className={classes.control}>
                <label htmlFor="image"> Image</label>
                <input type='url' required id="image" ref ={imageInputref}/>
              </div>
              <div  className={classes.control}>
                <label htmlFor="address">Adderss</label>
                <input type='text' required id="address" ref ={addressInputref}/>
              </div>
              <div  className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea id = 'description' required rows ='5' ref ={descriptionInputref}></textarea>
              </div>
             <div className={classes.actions}>
                <button>Add to List</button>
             </div>
            </form>
        </Card>
    );
}


export default NewMeetupForm;

//adding to prevet on loading nd get data
//creating ref   , r creating a reference of the DOM element or directly accessing it inside a functional component                                                      
// The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
// d useRef when you don't need to re-render the component when the state changes