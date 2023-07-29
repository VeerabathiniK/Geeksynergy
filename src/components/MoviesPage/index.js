import {Component} from 'react'

import Cookies from 'js-cookies'

import MoviesListPage from '../MoviesListPage'

import './index.css'

class MoviesPage extends Component {
  state = {
    moviesList: [],
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const apiUrl = 'https://hoblist.com/api/movieList'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'POST',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.movies.map(movie => ({
        title: movie.title,
        description: movie.description,
        imageUrl: movie.imageUrl,
      }))
      this.setState({
        moviesList: updatedData,
      })
    }
  }

  renderProductsList = () => {
    const {moviesList} = this.state
    return (
      <div>
        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {moviesList.map(movie => (
            <MoviesListPage movies={movie} key={movie.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return <>{this.renderProductsList()}</>
  }
}
export default MoviesPage
