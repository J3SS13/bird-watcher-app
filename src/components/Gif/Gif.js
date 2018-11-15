import React from 'react';



function Gif(props){

const gifs = props.gifs;
return(

  <div>
    <h1> Bird GIFS! </h1>
  {props.createGifs()}
  <p> powered by GIPHY </p>
</div>
  )
}




export default Gif;
