import React from 'react'
import './style.css'
import BirdInfo from './BirdInfo.js'


function GenerateBirds(props){

  return (

    <div className="bird-container">

      <div onClick={()=>props.handleSelect(props.threeBirds[0])}
            key={props.threeBirds[0].id}
            id={`bird0`}
            className="bird-icons">
        <img src={props.threeBirds[0].image} alt="bird"/>
      </div>

      <div onClick={()=>props.handleSelect(props.threeBirds[1])}
            key={props.threeBirds[1].id}
            id={`bird1`}
            className="bird-icons">
        <img src={props.threeBirds[1].image} alt="bird"/>
      </div>

      <div onClick={()=>props.handleSelect(props.threeBirds[2])}
            key={props.threeBirds[2].id}
            id={`bird2`}
            className="bird-icons">
        <img src={props.threeBirds[2].image} alt="bird"/>
      </div>

  {props.selectedName && <BirdInfo selectedDesc={props.selectedDesc} selectedName={props.selectedName}/>}

    </div>
)
}

export default GenerateBirds;
