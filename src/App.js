import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'

import MoviesPage from './components/MoviesPage'
import MoviesListPage from './components/MoviesListPage'
import Login from './components/Login'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={MoviesPage} />
      <Route exact path="/movies" component={MoviesListPage} />
    </Switch>
  </BrowserRouter>
)

export default App
