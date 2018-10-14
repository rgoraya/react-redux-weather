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
      <div className="position-relative w-100 h-100">
        <div id="tempContainer" className="text-center w-100 position-absolute">
          <div id="tempCircle" className="d-flex flex-row justify-content-center mx-auto rounded-circle bg-light text-dark">
            <h1 className="display-3 mb-0 align-self-center">
              {this.tempInSelectedUnits(this.props.weatherData.main.temp)}
            </h1>
            <p className="m-0 align-self-center">
              <button className={`btn btn-light border-0 px-1 py-0 ${this.state.units === "F" ? "text-info" : "text-muted"}`} href="#"
              onClick={ (e) => this.setState({units: "F"}) }>&deg;F</button>
              <span >|</span>
              <button className={`btn btn-light border-0 px-1 py-0 ${this.state.units === "C" ? "text-info" : "text-muted"}`} href="C"
              onClick={ (e) => this.setState({units: "C"}) }>&deg;C</button>
            </p>
          </div>
          <p className="p-3">
            High {this.tempInSelectedUnits(this.props.weatherData.main.temp_max)}&deg;{this.state.units} | 
            Low {this.tempInSelectedUnits(this.props.weatherData.main.temp_min)}&deg;{this.state.units}
          </p>
        </div>
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