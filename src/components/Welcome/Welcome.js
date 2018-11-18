import React from 'react';
import './style.css';





function Welcome(props){

const gifs = props.gifs;
return(
<div>
    <div className="welcome-container">

        <h1 id="welcome-title"> Welcome! </h1>

        <button onClick={() => props.randomizeBirds('birds')} id="find-birds"> Find Birds </button>


     </div>
</div>
  )
}

export default Welcome;
