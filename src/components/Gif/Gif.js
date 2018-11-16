import React from 'react';
import './style.css'


function Gif(props){

const gifs = props.gifs;
return(

  <div className="gif-container">
    <h1 id="gif-title"> Bird GIFS! </h1>
    {props.gifs.map(gif => <img src={gif.images.original.url} alt="bird gif" key={gif.id} className="giphy"/>  )}
  <p> powered by GIPHY </p>
</div>
  )
}




export default Gif;
