import React from 'react';
import './style.css';

function BirdLibrary(props){

return (
  <div>
  <h1 class="title" id="library-title"> Library </h1>
  <div class="library-container">
  {
    props.birds.map(bird =>
    <div
          key={bird.id}
          id={`bird${bird.id}`}
          className="bird-icons"
      >
      <img src={bird.image} alt="bird"/>
      <h2> {bird.name} </h2>
      <p> {bird.description} </p>
    </div>
  )
}
  </div>
    </div>
  )
}



export default BirdLibrary;
