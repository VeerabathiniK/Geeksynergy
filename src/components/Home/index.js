import {Link} from 'react-router-dom'

import './index.css'

const Home = () => (
  <>
    <div className="home-container">
      <div className="card">
        <h1 className="heading">Bank App</h1>
        <ul className="items">
          <Link to="/dashboard" className="none">
            <li className="list">DashBoard</li>
          </Link>
          <Link to="/transactions" className="none">
            <li className="list">All Transactions</li>
          </Link>
          <Link to="/profile" className="none">
            <li className="list">Profile</li>
          </Link>
        </ul>
      </div>
    </div>
  </>
)
export default Home
