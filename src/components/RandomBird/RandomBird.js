import React from 'react'
import './style.css'


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function RandomBird(props){
  const randomBirds = [];
  let counter = 0;

  while (randomBirds.length < 3) {
    // let num = getRandomInt(1, props.birds.length);
    let num = counter;
    counter +=1;
    randomBirds.push(props.birds[num]);
  }

  return (

    <div className="bird-container">

    {
      randomBirds.map(bird =>
      <div onClick={()=>props.handleSelect(bird)}
            key={bird.id}
            id={`bird${bird.id}`}
            className="bird-icons">

        <img src={bird.image} alt="bird"/>
      </div>
    )
  }

    </div>
)
}

export default RandomBird;
