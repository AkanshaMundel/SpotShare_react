import classes from './Card.module.css';


function Card(props){
    return <div className={classes.card}>{props.children}</div>
}

export default Card;

//custom comp bind in as jsx 
//ALSO IF WE import card comp in another as <card></card> so here we using props .clildren as everything inside card will render here as children