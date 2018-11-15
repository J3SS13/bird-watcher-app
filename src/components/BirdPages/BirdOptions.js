import React from 'react';
import SelectedBird from './SelectedBird.js'



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function RandomizeBirds(props){

return (
  <div>
      {props.createBirds()}
      {props.selectedName && props.createBirdInfo()}

    </div>
  )
}






export default RandomizeBirds;
