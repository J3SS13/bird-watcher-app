import React from 'react';
import './style.css';



export default function BirdInfo(props){

  return (
    <div className="info" key="info" id="bird-info">
      <h1 id="info-name"> {props.selectedName} </h1>
      <p id="info-desc"> {props.selectedDesc} </p>
    </div>
  )

}
