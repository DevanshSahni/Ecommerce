import React from 'react'
import "../CSS/account.css"
import { Link, Route, Routes } from 'react-router-dom'

const Account = () => {
  return (
    <div className='accountNavbar'>
      <Link to={"/account/profile"}> Profile </Link>
      <Link to={"/account/my_addresses"}>My addresses</Link>
      <Link to={"/account/my_orders"}>Orders</Link>
      <Link to={"/account/settings"}>Settings</Link>
    </div>
  )
}

export default Account