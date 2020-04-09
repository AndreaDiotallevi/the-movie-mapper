import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import fetchCountryCode from './api/fetchCountryCode'
import fetchMovies from './api/fetchMovies'
import countryCodesJson from './utils/countryCodes.json';
import fetchCoordinates from './api/fetchCoordinates';

import './App.css';

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      movies: [],
      infoWindowVisible: false,
      onClickCoordinates: [15, 0]
    }
  }

  handleCountryChoice = async (t, map, coord) => {
    this.setState({infoWindowVisible: false});
    const [lat, lng] = fetchCoordinates(t, map, coord);
    this.setState({onClickCoordinates: [lat, lng]});
    await fetchCountryCode(lat, lng)
      .then(response => {
        const countryCode = response.address.country_code;
        const country = countryCodesJson[countryCode];
        this.setState({country, infoWindowVisible: false});
        return country;
          }).then(country => Promise.all(fetchMovies(country))
            ).then(response => {
              const movies = response.filter(movie => movie !== undefined);
              this.setState({movies});
              history.push(`/${this.state.country.toLocaleLowerCase()}`);
            })
      .catch(error => {
        this.setState({infoWindowVisible: true});
      })
  }

  render() {
    return (
      <div className='App'>
        <Router history={history}>
          <Route exact path="/index.html">
            {<Redirect to="/" />}
          </Route>
          <Route
            exact path="/"
            render={(routeProps) => (
              <Home {...routeProps} country = {this.state.country} onCountryChoice={this.handleCountryChoice} infoWindowVisible={this.state.infoWindowVisible} onClickCoordinates={this.state.onClickCoordinates}/>
            )}
          />
          <Route
            path="/:country"
            render={(routeProps) => (
              <Movies {...routeProps} movies={this.state.movies} country={this.state.country}/>
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
