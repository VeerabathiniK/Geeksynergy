import './index.css'

const MoviesListPage = props => {
  const {movies} = props
  const {imageUrl, description} = movies

  return (
    <li className="product-item">
      <img src={imageUrl} alt="product" className="thumbnail" />

      <p className="description">by {description}</p>
    </li>
  )
}
export default MoviesListPage
