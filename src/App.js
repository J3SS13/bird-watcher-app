
import React, { Component } from 'react';
import './App.css';
import RandomizeBirds from './components/BirdPages/BirdOptions.js'
import Welcome from './components/Welcome.js'
import birds from './services/birds.js'
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'welcome',
      selectedDesc : '',
      selectedSound: '',
      selectedName: '',
      birds: birds,
    };
      this.setView = this.setView.bind(this);
      this.createBirds = this.createBirds.bind(this);
  }

  getView(){
    const view = this.state.currentView;
    switch (view) {
      case 'welcome':
        return <Welcome setView={this.setView}/>
      case 'birds':
        return <RandomizeBirds showInfo={this.state.selectedBird} birds={this.state.birds} createBirds={this.createBirds}/>
      default :
        return <Welcome />
    }
  }

  createBirds(){
    return this.state.birds.map(bird => {
      return (
        <div onClick={()=>this.setState({
          selectedName: bird.name,
          selectedDesc: bird.description,
          selectedSound: ''
        })} key={bird.id}> {bird.name}</div>
      )
    })
  }

  setView(view){
    this.setState({
      currentView: view
    });
  }

  // handleSelect(bird){
  //   this.setState({
  //     selectedBird: bird.name
  //   });
  // }

  render() {
    return (
      <div className="App">
              {this.getView()}
      </div>
    );
  }
}

export default App;
