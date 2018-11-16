import React from 'react'
import './style.css'
import BirdInfo from './BirdInfo.js'


const randomBirds = [];

//creates new array
function newBirdArray(props){
  props.birds.map((bird)=>{randomBirds.push(bird) })
  return randomBirds;
}

//shuffles array
function shuffle(array) {
  let m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}


function GenerateBirds(props){
newBirdArray(props);
shuffle(randomBirds);
  return (

    <div className="bird-container">

      <div onClick={()=>props.handleSelect(randomBirds[0])}
            key={randomBirds[0].id}
            id={`bird${randomBirds[0].id}`}
            className="bird-icons">
        <img src={randomBirds[0].image} alt="bird"/>
      </div>

      <div onClick={()=>props.handleSelect(randomBirds[1])}
            key={randomBirds[1].id}
            id={`bird${randomBirds[1].id}`}
            className="bird-icons">
        <img src={randomBirds[1].image} alt="bird"/>
      </div>

      <div onClick={()=>props.handleSelect(randomBirds[2])}
            key={randomBirds[2].id}
            id={`bird${randomBirds[2].id}`}
            className="bird-icons">
        <img src={randomBirds[2].image} alt="bird"/>
      </div>

  {props.selectedName && <BirdInfo selectedDesc={props.selectedDesc} selectedName={props.selectedName}/>}

    </div>
)
}

export default GenerateBirds;
