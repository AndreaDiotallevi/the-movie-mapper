[![CircleCI](https://circleci.com/gh/AndreaDiotallevi/the-movie-mapper.svg?style=shield)](https://circleci.com/gh/AndreaDiotallevi/the-movie-mapper) [![Test Coverage](https://api.codeclimate.com/v1/badges/2e51fe5571066fd4380b/test_coverage)](https://codeclimate.com/github/AndreaDiotallevi/the-movie-mapper/test_coverage)

# The Movie Mapper

[Description](#description) | [Live Website](#live-website) | [Technologies Used](#technologies-used) | [The Team](#the-team) | [Challenges and Goals](#challenges-and-goals) | [Features](#features) | [User Stories](#user-stories) | [Getting Started](#getting-started) | [How to Run the Tests](#how-to-run-the-tests) | [How to Run the App](#how-to-run-the-app) | [Design Approach](#design-approach) | [Code Quality](#code-quality) | [Continuous Integration](#continuous-integration)

## Description

This is a single page application made with React that allows the user to click on a country from a map and see a suggestion of the best movies for that country. The user can then filter the movies by genre and expand the research by clicking on the movie poster, to be redirected to the IMDB movie page.

## Live Website

The application is deployed with AWS Amplify Console at this custom domain: [https://www.themoviemapper.com](https://www.themoviemapper.com/).

Home Page             |  Movies Page
:-------------------------:|:-------------------------:
![](./src/assets/the-movie-mapper-home.png)  |  ![](./src/assets/the-movie-mapper-movies.png)

## Technologies Used

- Main technologies:

  - [Node](https://nodejs.org/en/): a JavaScript runtime built on Chrome's V8 JavaScript engine.
  - [React](https://reactjs.org/): a JavaScript library we used to build the user interface and gather data from external APIs.
  - [Redux](https://redux.js.org/): a predictable state container for JavaScript apps.
  - [Google Maps React](https://www.npmjs.com/package/google-maps-react): a library that includes a helper to wrap around the Google maps API.
  - [Python](https://www.python.org/): a general purpose programming language we used for web scraping (see [this](https://github.com/AndreaDiotallevi/movie-titles-scraper) helper repository).
  - [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox): the flexible box layout module makes it easier to design flexible responsive layout structure without using float or positioning.

- External APIs:

  - [Google Maps Api](https://developers.google.com/maps/documentation): web service we used to show the map on the page and get geographical coordinates from the user click.
  - [LocationIQ API](https://locationiq.com/docs): web service we used to get the country information from geographical coordinates.
  - [OMDb API](http://www.omdbapi.com/): web service we used to get each movie information by title.

- Testing frameworks:
  - [Jest](https://jestjs.io/): a JavaScript Testing Framework with a focus on simplicity.
  - [Enzyme](https://www.npmjs.com/package/enzyme): a JavaScript Testing utility for React that makes it easier to test the React Components' output.

## The Team

This was a group project during the final two weeks at [Makers Academy](https://makers.tech/). The team was composed by:

- [Tuan Nguyen](https://github.com/TuanNguyen1010)
- [Hisham Bokhari](https://github.com/hishambokhari)
- [Andrea Diotallevi](https://github.com/AndreaDiotallevi)
- [Daniel Martinez-Gatell](https://github.com/denriquem)

After the course, I re-designed the application by using Redux for state management, implementing asynchronous tests, re-designing the styling and deploying it to AWS with a custom domain.

## Challenges and Goals

- Build a front-end web application that people would use and have fun playing around with.
- Use and understand React design patterns and its testing frameworks Jest and Enzyme.
- Use Redux for state management.
- Test Redux actions and reducers with integration tests.
- Handle nested asynchronous requests from multiple APIs within a React application.
- Deploy a front-end app to AWS, given API restrictions for production websites.
- Use Python to scrape data from the internet and save it into a usable JSON format.

## User Stories

```
As a user,
So that I can see all countries,
I'd like to see a map of the World

As a user,
So that I can choose a country,
I'd like to be able to be able to click on a country

As a user,
So that I can see some great movie suggestions,
I'd like to see a list of movies for the country I selected,

As a user,
So that I can recognize each movie,
I'd like to see the title of each movie.

As a user,
So that I can know what a movie is about,
I'd like to see a description of each movie.

As a user,
So that I can know how old is a movie,
I'd like to see the release date for each movie

As a user,
So that I can return to the home page,
I'd like to be able to use a back button on the movies page.

As a user,
So that I can pick my favorite type of movie,
I'd like to be able to filter the available movies by genre.

As a user,
So that I can read reviews and learn more about a movie,
I would like a link to the IMDB page for each movie.
```

## Getting Started

- Clone this repository and change into it
- Make sure you have [Node.js](https://nodejs.org/en/download/) installed
- Install all the dependencies with `npm install`

## How to Run the Tests

To run all the tests type `npm test`

## How to Run the App

Start the local server with `npm start`

## Design Approach

<p align="center">
  <img src="./src/assets/react-components-diagram.svg" alt="react-components-diagram"></img>
</p>

The application has 6 react components and each of them has a clear responsibility:

- `App`: application main container.

- `Header`: responsible for showing the correct header according to the pathname.

- `SubHeader`: responsible for showing the correct sub-header according to the pathname.

- `MapContainer`: responsible for showing the map and managing the info window.

- `MovieList`: responsible for listing the best movies for each country and filtering them by genre.

- `MovieDetail`: responsible for showing the movie info on the page.

## Code Quality

[ESLint](https://eslint.org/): tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

## Continuous Integration

[CircleCI](https://circleci.com/): tool for automating the development process quickly, safely, and at scale.
