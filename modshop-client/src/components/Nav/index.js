import Logo from '../Logo';
import './index.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__wrapper">
          <NavLink className="nav__logo" to="/">
            <Logo />
          </NavLink>
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <NavLink className="nav__menu-link" to="/login" activeClassName="nav__menu-link--active">Log In</NavLink>
            </li>
            <li>
              <NavLink className="nav__menu-link" to="/signup" activeClassName="nav__menu-link--active">Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav;