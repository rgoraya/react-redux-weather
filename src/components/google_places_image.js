import React, { Component } from 'react';

const google = window.google;

export default class GooglePlacesImage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imgUrl: this.props.imgUrl,
      imgLoaded: false
    }

    this.onPlaceSearchComplete = this.onPlaceSearchComplete.bind(this);
    this.onPlacesImageLoaded = this.onPlacesImageLoaded.bind(this);
  }

  componentDidMount() {
    this.renderGooglePlacesImg();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.weatherData.name !== this.props.weatherData.name) {
      this.setState({imgUrl: null});
      this.renderGooglePlacesImg();
    } 
  }

  render() {
    return (
      <div>
        <div className="d-none" ref="map"></div>
        <img className={`w-100 h-100 position-absolute ${(this.state.imgLoaded && this.state.imgUrl !== null) ? "d-inline" : "d-none"}`} 
          src = {this.state.imgUrl} 
          alt="google places representation" 
          onLoad={this.onPlacesImageLoaded} 
        /> 
      </div>
    )
  }

  renderGooglePlacesImg() {
    let map;
    let service;
    let weatherData = this.props.weatherData;
    let mapCenter = new google.maps.LatLng(weatherData.coord.lat, weatherData.coord.lon);
  
    map = new google.maps.Map(this.refs.map, {
      center: mapCenter,
      zoom: 15
    });
  
    var request = {
      query: weatherData.name,
      fields: ['photos'],
    };
  
    service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, this.onPlaceSearchComplete);
  }
  
  onPlaceSearchComplete(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      let imgUrl = results[0].photos[0].getUrl({'maxWidth': 600, 'min-height': 250})
      this.setState({imgUrl})
    } 
  }

  onPlacesImageLoaded() {
    this.setState({imgLoaded: true});
  }
}