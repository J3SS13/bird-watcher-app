import React from 'react';
import SelectedBird from './SelectedBird.js'



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function RandomizeBirds(props){

  let num1 = getRandomInt(1, props.birds.length);
  let num2 = getRandomInt(1, props.birds.length);
  let num3 = getRandomInt(1, props.birds.length);

  return (
    <div>
        <h3> This page will have three randomly generated birds... {num1}{num2}{num3}</h3>

      <div key='bird1' className="bird" id={num1}>
        <h2> {props.birds[num1].name}</h2>
        <p> {props.birds[num1].description}</p>

      </div>


      <div key='bird2' className="bird" id={num2}>
        <h2> {props.birds[num2].name}</h2>
        <p> {props.birds[num2].description}</p>
      </div>


      <div key='bird3' className="bird" id={num3} onClick={()=>props.handleSelect()}>
        <h2> {props.birds[num3].name}</h2>
        <p> {props.birds[num3].description}</p>
      </div>




      {props.selectedBird && <SelectedBird />}


    </div>
  )
}






export default RandomizeBirds;
