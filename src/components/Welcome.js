import React from 'react';






function Welcome(props){

const gifs = props.gifs;
return(

  <div>
    <h1> Welcome! </h1>
    {props.createGifs()}
    <button onClick={() => props.setView('birds')}> Find Birds </button>

</div>
  )
}

export default Welcome;
