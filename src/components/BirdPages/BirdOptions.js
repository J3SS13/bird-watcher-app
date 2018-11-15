import React from 'react';


function RandomizeBirds(props){

return (
  <div>
  <h1> What Birds fo you see? </h1>
      {props.createBirds()}
      {props.selectedName && props.createBirdInfo()}

    </div>
  )
}



export default RandomizeBirds;
