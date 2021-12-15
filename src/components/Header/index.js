// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="headerCont">
    <img
      className="headerImg"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <div className="contH1">
      <Link to="/">
        <li>home</li>
      </Link>
      <li>Products</li>
      <li>Cart</li>
      <Link to="/login">
        <button type="button" className="login-buttonH">
          LogOut
        </button>
      </Link>
    </div>
  </div>
)

export default Header
