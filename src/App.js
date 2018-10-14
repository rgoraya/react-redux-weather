import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/search_bar'
import WeatherDetails from './containers/weather_details'
const defaultCity = 'San Francisco'

class App extends Component {
  render() {
    return (
      <div className="card bg-dark mx-auto col-sm-6 p-0 rounded-0">
        <SearchBar defaultCity={defaultCity} />
        <WeatherDetails />
      </div>  
    );
  }
}

export default App;
