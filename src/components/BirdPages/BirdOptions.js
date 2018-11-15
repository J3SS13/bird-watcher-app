import React from 'react';


function RandomizeBirds(props){

return (
  <div>
      {props.createBirds()}
      {props.selectedName && props.createBirdInfo()}

    </div>
  )
}



export default RandomizeBirds;
