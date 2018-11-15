
import React, { Component } from 'react';
import './App.css';
import RandomizeBirds from './components/BirdPages/BirdOptions.js';
import Welcome from './components/Welcome.js';
import birds from './services/birds.js';
import birdGifs from './services/api.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'welcome',
      selectedDesc : '',
      selectedSound: '',
      selectedName: '',
      birds: birds,
      gifs: []
    };
      this.setView = this.setView.bind(this);
      this.createBirds = this.createBirds.bind(this);
      this.createBirdInfo = this.createBirdInfo.bind(this);
  }

  getView(){
    const view = this.state.currentView;
    switch (view) {
      case 'welcome':
        return <Welcome setView={this.setView}/>
      case 'birds':
        return <RandomizeBirds selectedName={this.state.selectedName} birds={this.state.birds} createBirds={this.createBirds} createBirdInfo={this.createBirdInfo}/>
      default :
        return <Welcome />
    }
  }

  createBirds(){
    return this.state.birds.map(bird => {
      return (
        <div onClick={()=>this.handleSelect(bird)} key={bird.id}> {bird.name}</div>
      )
    })
  }

createBirdInfo(){
  console.log("this ran");
  return (
    <div className="info" key="info"> <h1> {this.state.selectedName} </h1> <p> {this.state.selectedDesc} </p> </div>
  )
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
              {this.getView()}
      </div>
    );
  }
}

export default App;
