import React from 'react'
import './Card.css' 
export default (props) => {

    const stilo = { 
        backgroundColor: props.color || '#F00'} 

    return <div className ="Card" style={stilo}>
        <div className="Title" >{props.titulo} </div>
        <div className="Content">
            {props.children}
        </div>
    
    </div>
};