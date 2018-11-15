import React from 'react'

function NavBar(props){
  return(
    <div>
      <button onClick={() => props.setView('welcome')}> Home </button>
    </div>
  )
};

export default NavBar;
