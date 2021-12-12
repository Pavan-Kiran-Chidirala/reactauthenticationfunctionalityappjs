// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <li className="header">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </li>
)

export default Header
