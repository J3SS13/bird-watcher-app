import React from 'react';
import './style.css';

function NavBar(props){
  return(
    <div className="nav-container">
      <button onClick={() => props.resetHome('welcome')} className="nav-button" id="home">  Home </button>
      <button onClick={() => props.setView('library')} className="nav-button" id="library"> Bird Library </button>
      <button onClick={() => props.setView('gif')} className="nav-button" id="gif"> Birds GIFs </button>
    </div>
  )
};

export default NavBar;
