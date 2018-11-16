import React from 'react';
import './style.css';

function NavBar(props){
  return(
    <div className="nav-container">
      <button onClick={() => props.resetHome('welcome')} className="nav-button"> Home </button>
    </div>
  )
};

export default NavBar;
