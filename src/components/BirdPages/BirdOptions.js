import React from 'react';
import SelectedBird from './SelectedBird.js'



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function RandomizeBirds(props){

  // let num1 = getRandomInt(1, props.birds.length);
  // let num2 = getRandomInt(1, props.birds.length);
  // let num3 = getRandomInt(1, props.birds.length);
  //




return (
  <div>
      {props.createBirds()}
      {props.selectedBirds && <SelectedBird />}

    </div>
  )
}






export default RandomizeBirds;
