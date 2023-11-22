import React from 'react'
import "../CSS/navbar.css"
import { FaShoppingCart, FaUser} from "react-icons/fa"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarLinks'>
        <Link to="/cart"><FaShoppingCart/></Link>
        <Link to=""><FaUser/></Link>
      </div>
    </div>
  )
}

export default Navbar