import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCityWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { cityStr: "" }
  }
  
  render () {
    return (
        <div className="card-header py-4">
        <form onSubmit={ (e) => {this.handleSubmit(e)} }>
          <div className="input-group mx-auto">
            <input type="text" className="form-control bg-dark font-weight-light text-light border border-secondary" placeholder="Search for the city" 
              value={this.state.cityStr}
              onChange={ (e) => this.handleChange(e) } 
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-secondary">Search</button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchCityWeather(this.state.cityStr);
    this.setState({cityStr: ''})
  }
  
  handleChange(e) {
    this.setState({cityStr: e.target.value});
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchCityWeather }, dispatch )
}

export default connect(null, mapDispatchToProps) (SearchBar)