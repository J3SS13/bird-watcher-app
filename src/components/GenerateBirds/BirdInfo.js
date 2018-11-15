import React from 'react';




export default function BirdInfo(props){

  return (
    <div className="info" key="info" id="bird-info">
      <h1> {props.selectedName} </h1>
      <p> {props.selectedDesc} </p>
    </div>
  )

}
