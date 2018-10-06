import React, { Component } from 'react';
// import './App.css';
import Navbar from './Navbar';
import Temperature from './Temperature';
import axios from 'axios';

class App extends Component {
  state = {
    uvIndex : 0,
    dayType : true,
    pop : 50,
    temperature: 15,
    latitude: 40.73,
    longitude: -74,
    locationKey: 2102847,
    loaded:false
  }

  componentDidMount() {
    const API_KEY = "miATRhgkPlP0zAtrms4H6kw0GKKNdXcQ";
    const url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}`
    const baseUrl = url + "&q=" + this.state.latitude + "%2C" + this.state.longitude
    let forcastUrl = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${this.state.locationKey}?apikey=${API_KEY}`

    axios.get(baseUrl)
      .then(baseUrlResponse => {
        let newKey = baseUrlResponse.data.Key;
        let forcastUrl = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${newKey}?apikey=${API_KEY}`
        axios.get(forcastUrl)
          .then(forcastUrlResponse => {
            console.log(forcastUrlResponse) 
            let state = {
              temperature: forcastUrlResponse.data[0].Temperature.Value,
              dayType: forcastUrlResponse.data[0].IconPhrase,
              pop: forcastUrlResponse.data[0].PrecipitationProbability,
              loaded: true,
            }
            this.setState({
              ...state
            })
          })
      })
  }

  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <Navbar/>
        </nav>
        <main>
          <Temperature 
          temperature={this.state.temperature}
          pop={this.state.pop}
          dayType={this.state.dayType}/>
        </main>
      </div>
    );
  }
}

export default App;
