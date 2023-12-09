import React from 'react'
import "../CSS/navbar.css"
import { FaShoppingCart, FaUser} from "react-icons/fa"
import { BsGrid3X3GapFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarLinks'>
        <Link to="/explore"><BsGrid3X3GapFill /></Link>
        <Link to="/cart"><FaShoppingCart/></Link>
        <Link to="/account/profile"><FaUser/></Link>
      </div>
    </div>
  )
}

export default Navbar