import React from 'react';






function Welcome(props){

const gifs = props.gifs;
return(

  <div>
    <h1> Welcome! </h1>
    <button onClick={() => props.setView('random')}> Find Birds </button>
    <button onClick={() => props.setView('birds')}> Bird Library </button>
    <button onClick={() => props.setView('gif')}> Birds GIFs </button>

</div>
  )
}

export default Welcome;
