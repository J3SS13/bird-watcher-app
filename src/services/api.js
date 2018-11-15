import axios from 'axios';


export default async function birdGifs() {

  try {
    const gifs = await axios(`https://api.giphy.com/v1/gifs/search?api_key=B2aItg7kZ2t6uQu15sBC7rUJXBFjNORV&q=bird&limit=20&offset=0&rating=Y&lang=en`)
    return(gifs);
  } catch(error) {
    console.log(error);
  }

}
