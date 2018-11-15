import axios from 'axios';


export default async function birdGifs() {

  try {
    const gifs = await axios(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=bird&limit=4&offset=0&rating=Y&lang=en`)
    return(gifs);
  } catch(error) {
    console.log(error);
  }

}
