
import "./styles/navBar.css"
import { Link, NavLink } from 'react-router-dom';
import iconHome from "../images/iconHome.png"
import iconSearch from "../images/iconSearch.png"
import iconBell from "../images/iconBell.png"
import iconUser from "../images/iconUser.png"
import iconAdd from "../images/iconAdd.png"
const NavBar = () => {
  return (
    <nav>
      <ul className='navBarListItems'>
        <li><NavLink to={"/"}><img src={iconHome}/></NavLink></li>
      { /* <li><NavLink to={"/"}><img src={iconSearch}/></NavLink></li>
        <li><NavLink to={"/"}><img src={iconBell}/></NavLink></li>
        <li><NavLink to={"/"}><img src={iconAdd}/></NavLink></li>
      <li className='navBarUserIcon'><NavLink to={"/contact"}><img src={iconUser}/></NavLink></li>*/}
      </ul>
    </nav>
  )
}

export default NavBar