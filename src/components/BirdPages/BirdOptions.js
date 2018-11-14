import React from 'react';
import SelectedBird from './SelectedBird.js'



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function RandomizeBirds(props){

let num1 = getRandomIntInclusive(1, 10);
let num2 = getRandomIntInclusive(1, 10);
let num3 = getRandomIntInclusive(1, 10);

console.log(props.selectedBird);
  return (
    <div>
        <h3> This page will have three randomly generated birds..</h3>
      <div className="bird" id="bird1" onClick={()=>props.handleViewChange("birds")}> {num1} </div>
      <div className="bird" id="bird2"> {num2} </div>
      <div className="bird" id="bird3"> {num3} </div>
        <p> Each bird should have an onClick to update State</p>
        <p> IF state is true, then display birds.name & birds.description based on the bird name(what is the selected Bird) </p>
      {props.createBirds}
      {props.selectedBird && <SelectedBird />}


    </div>
  )
}






export default RandomizeBirds;
