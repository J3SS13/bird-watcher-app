
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
      selectedBird : '',
      birds: birds,
      selectedBirdData: [],
      apiData: []
    };
      this.setView = this.setView.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
  }

  createBirds(){
      return this.state.birds.map(bird => {
        return (
          <div>
            <h1> {bird.name} </h1>
            <p> {bird.description} </p>
          </div>
        )
      })
    }


  getView(){
    const view = this.state.currentView;
    switch (view) {
      case 'welcome':
        return <Welcome setView={this.setView}/>
      case 'birds':
        return <RandomizeBirds selectedBird={this.state.selectedBird} birds={this.state.birds} onClick={this.createBirds()}/>
      default :
        return <Welcome />
    }
  }

  setView(view){
    this.setState({
      currentView: view
    });
  }

  handleSelect(e){
    const value = e.target.name;
    this.setState({
      selectedBird: value
    })
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
