import React from 'react';


function BirdLibrary(props){

return (
  <div>
  <h1> Library </h1>

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
  )
}



export default BirdLibrary;
