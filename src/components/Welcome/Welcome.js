import React from 'react';
import './style.css';





function Welcome(props){

const gifs = props.gifs;
return(

  <div className="welcome-container">
    <h1 id="welcome-title"> Welcome! </h1>
    <button onClick={() => props.setView('birds')} id="find-birds"> Find Birds </button>
    <div className="secondary-container">
      <button onClick={() => props.setView('library')} className="button-secondary" id="library"> Bird Library </button>
      <button onClick={() => props.setView('gif')} className="button-secondary" id="giphy"> Birds GIFs </button>
   </div>
</div>
  )
}

export default Welcome;
