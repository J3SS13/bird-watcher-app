import React from 'react'

function NavBar(props){
  return(
    <div>
      <button onClick={() => props.resetHome('welcome')}> Home </button>
    </div>
  )
};

export default NavBar;
