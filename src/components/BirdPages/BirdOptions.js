import React from 'react';
import SelectedBird from './SelectedBird.js'




function RandomizeBirds(props){

return (
  <div>
      {props.createBirds()}
      {props.selectedName && props.createBirdInfo()}

    </div>
  )
}






export default RandomizeBirds;
