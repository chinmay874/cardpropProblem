import { Fragment } from "react";
import './card.css'

export function Card(props){
    function alrt(){
        alert(`${props.itemname} shoes worth ${props.mrp} is added in your cart, please proceed to pay`)
    }
    return(
        <Fragment>
        <div id='cardstyle'>
            <img src={props.img} alt="" style={{height:"100px", width:"150px",marginTop:"20px",}}/>
            <p style={{fontWeight: "bold", fontSize:"20px",alignItems:"center"}}>{props.itemname}</p>
            <p>{props.description}</p>
            <p>₹ {props.mrp}</p>
            <p>{props.rating}</p>
            <button onClick={alrt}style={{width:"100%",height:"4em",border:"0px",backgroundColor:props.color}}>Add to cart</button>
        </div>
    </Fragment>
    )
}