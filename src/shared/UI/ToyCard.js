import React from 'react';

import './ToyCard.css';
function ToyCard(props) {
    return (
        <div className='toycard_wrapper' id={props.id} >
            <img src={props.image} alt={props.name} className="toycard_image" />
            <p className="toycard_name">{props.name}</p>
            <button data-myval={props.price} data-toyname={props.name} data-toyimage={props.image} onClick={props.onClick} className="toycard_btn">$ {props.price} USD</button>
        </div>
    );
}

export default ToyCard;