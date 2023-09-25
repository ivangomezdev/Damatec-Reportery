
import "../styles/navBar.css"
import { Link, NavLink } from 'react-router-dom';
import iconHome from "../images/iconHome.png"


const NavBar = () => {
  return (
    <nav>
      <ul className='navBarListItems'>
        <li><NavLink to={"/"}><img src={iconHome}/></NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar