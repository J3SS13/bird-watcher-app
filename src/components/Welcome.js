import React from 'react';




function Welcome(props){

return(

  <div>
    <h1> Welcome! </h1>
    <button onClick={() => props.setView('birds')}> Find Birds </button>

</div>
  )
}

export default Welcome;
