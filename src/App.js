
import React, { Component } from 'react';
import './App.css';
import BirdLibrary from './components/BirdPages/BirdLibrary.js';
import Welcome from './components/Welcome/Welcome.js';
import birds from './services/birds.js';
import birdGifs from './services/api.js';
import Gif from './components/Gif/Gif.js';
import GenerateBirds from './components/GenerateBirds/GenerateBirds.js';
import NavBar from './components/NavBar/NavBar.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'welcome',
      selectedDesc : '',
      selectedSound: '',
      selectedName: '',
      birds: birds,
      gifs: [],
      threeBirds: []
    };
      this.setView = this.setView.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
      this.getGenerateBird = this.getGenerateBird.bind(this);
      this.resetHome = this.resetHome.bind(this);
  }

  //creates new array
randomizeBirds(){
   const randomBirds =  this.state.birds.map((bird)=>{ return bird });

   this.shuffle(randomBirds);


    const birdArr = randomBirds.slice(0, 3);

    this.setState({
      threeBirds: birdArr
    })

  }

  //shuffles array
  shuffle(array) {
    let m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }


getGenerateBird(view){
  this.randomizeBirds();
  this.setView(view);

}

resetBirdInfo(){
  this.setState({
    selectedDesc : '',
    selectedSound: '',
    selectedName: '',
  })
}

resetHome(view){
  this.setView(view);
  this.resetBirdInfo();

}

/// write function to combines set view and setState to '' for selected bird info

  getView(){
    const view = this.state.currentView;
    switch (view) {
      case 'welcome':
        return <Welcome setView={this.setView} randomizeBirds={this.getGenerateBird} />
      case 'library':
        return <BirdLibrary  birds={this.state.birds}/>
      case 'gif':
        return <Gif createGifs={this.createGifs} gifs={this.state.gifs}/>
      case 'birds':
        return <GenerateBirds birds={this.state.birds} handleSelect={this.handleSelect} selectedDesc={this.state.selectedDesc} selectedName={this.state.selectedName} threeBirds={this.state.threeBirds} />
      default :
        return <Welcome />
    }
  }


async componentDidMount(){
  try {
    const birds = await birdGifs();
    this.setState({
      gifs: birds.data.data
    });
  } catch(error){
    console.log(error);
  }
}

  setView(view){
    this.setState({
      currentView: view
    });
  }

  handleSelect(bird){
    this.setState({
      selectedName: bird.name,
      selectedDesc: bird.description,
      selectedSound: ''
    });

  }

  render() {
    return (
      <div className="App">
        <NavBar resetHome={this.resetHome}/>
        {this.getView()}
      </div>
    );
  }
}

export default App;
