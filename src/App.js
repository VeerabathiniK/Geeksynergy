import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'

import Login from './components/Login'
import Home from './components/Home'
import DashBoard from './components/DashBoard'
import Transactions from './components/Transactions'
import Profile from './components/Profile'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/transactions" component={Transactions} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
)

export default App
