import React, { Component } from 'react';

class Movies extends Component {
  state = {
    genreList: ["Action", "Comedy", "Crime",
                "Documentary", "Drama", "History",
                "Horror", "Music", "Science Fiction",
                "Thriller", "Western"
    ],
    selectedGenre: null
  }

  handleGenreChoice = (event) => {
    const selectedGenre = event.target.value;
    this.setState({selectedGenre});
  }

  filterMovies = () => {
    if (this.state.selectedGenre === 'All' || this.state.selectedGenre === null) {
      return this.props.movies;
    } else {
      return this.props.movies.filter((movie) => movie.genreList.includes(this.state.selectedGenre))
    }
  }

  render() { 
    return (
      <div data-test="movies">
      <h1 data-test="movies-country-message">
        You have choosen
        {' '}
        {this.props.country}
        !
      </h1>

      <div>
        {this.state.genreList.map(genre => <button value={genre} onClick={this.handleGenreChoice}>{genre}</button>)}
        <button value={'All'} onClick={this.handleGenreChoice}>All</button>
      </div>

      <div data-test="movies-container">
        <ul>
          {this.filterMovies().map(movie => (
            <li key={movie.id}>
              <h3 data-test={`movie-title-${movie.id}`}>
                {movie.title}
              </h3>
              <p data-test={`movie-overview-${movie.id}`}>
                {movie.overview}
              </p>
              <p data-test={`movie-release-date-${movie.id}`}>
                {movie.releaseDate}
              </p>
              <p data-test={`movie-vote-average-${movie.id}`}>
                {movie.voteAverage}
              </p>
              <img data-test={`movie-poster-url-${movie.id}`}
                  src={`${movie.posterUrl}`}>
                  </img>
              <p data-test={`movie-genre-list-${movie.id}`}>
                Genre/s: {movie.genreList.join(', ')}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={this.props.onBackToHome}>Back</button>
    </div>
    );
  }
}
 
export default Movies;
