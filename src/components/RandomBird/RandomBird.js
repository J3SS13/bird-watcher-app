import React from 'react'



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomBird(props){
let num = getRandomIntInclusive(1, 10);

  return (
  <div className="random-bird" >
      <h3> {props.birds[num].name}</h3>
      <p>{props.birds[num].description}</p>

    </div>
  )
}

export default RandomBird;
