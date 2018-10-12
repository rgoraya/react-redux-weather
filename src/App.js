import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/search_bar'
import WeatherDetails from './containers/weather_details'

class App extends Component {
  render() {
    return (
      <div className="card bg-dark mx-auto">
        <SearchBar />
        <WeatherDetails />
      </div>  
    );
  }
}

export default App;
