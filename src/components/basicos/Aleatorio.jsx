import React from 'react'

export default function Aleatorio (props){
    const {min, max} = props;
    return parseInt(Math.random() * (max - min)) + min;
    

}