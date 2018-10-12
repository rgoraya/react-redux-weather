import React, { Component } from 'react'

class Temperature extends Component {
  constructor(props) {
    super(props)

    this.state = {
      units: "F"
    }
  }

  render() {
    return(
      <div>
        <div className="d-flex flex-row">
          <h1 className="display-2 mb-0">
            <i className={`mr-2 align-middle owf owf-${this.props.weatherData.weather[0].id}`}></i>
            {this.tempInSelectedUnits(this.props.weatherData.main.temp)}
          </h1>
          <p className="mt-3 mb-0">
            <button className={`btn btn-dark px-1 py-0 ${this.state.units === "F" ? "text-light" : "text-muted"}`} href="#"
            onClick={ (e) => this.setState({units: "F"}) }>&deg;F</button>
            <span >|</span>
            <button className={`btn btn-dark px-1 py-0 ${this.state.units === "C" ? "text-light" : "text-muted"}`} href="C"
            onClick={ (e) => this.setState({units: "C"}) }>&deg;C</button>
          </p>
        </div>
        <p className="text-muted">
          Max {this.tempInSelectedUnits(this.props.weatherData.main.temp_max)}&deg;{this.state.units} | 
          Min {this.tempInSelectedUnits(this.props.weatherData.main.temp_min)}&deg;{this.state.units}
        </p>
      </div>
    )
  }

  tempInSelectedUnits(temp) {
    const kelvin = temp;
    const celsius = kelvin - 273;

    switch (this.state.units) {
      case "F": 
        return Math.floor(celsius * (9/5) + 32);
      case "C":
        return Math.floor(celsius);
      default:
        return null;  
    }
  }
}

export default Temperature