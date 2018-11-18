import React from 'react';
import './style.css';
import RightBranch from '../Branches/RightBranch.js';
import LeftBranch from '../Branches/LeftBranch.js';
import Birds from './Birds.js'

function GenerateBirds(props){

  return (
    <div className="component-container">

      <div className="main-container">

       <LeftBranch />

       <Birds handleSelect={props.handleSelect}  threeBirds={props.threeBirds} selectedName={props.selectedName} selectedDesc={props.selectedDesc} />

       <RightBranch />

      </div>
    </div>
)
}

export default GenerateBirds;
