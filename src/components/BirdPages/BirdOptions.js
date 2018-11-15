import React from 'react';


function RandomizeBirds(props){

return (
  <div>
  <h1> What Birds do you see? </h1>
      {props.createBirds()}
      

    </div>
  )
}



export default RandomizeBirds;
