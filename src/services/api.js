import axios from 'axios';

const key = process.env.REACT_APP_API_KEY;

export default async function birdGifs() {

  try {
    const gifs = await axios(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=bird&limit=20&offset=0&rating=Y&lang=en`)
    return(gifs);
  } catch(error) {
    console.log(error);
  }

}
