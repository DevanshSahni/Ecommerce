import React from 'react'
import "../CSS/account.css"
import { Route, Routes } from 'react-router-dom'
import AccountNavbar from "../Components/AccountNavbar";
import MyAddress from "../Components/MyAddress";
import MyOrders from "../Components/MyOrders";
import Settings from "../Components/Settings";
import Profile from '../Components/Profile';


const Account = () => {
  return (
    <>
    <AccountNavbar/>
    <Routes>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/my_addresses" element={<MyAddress/>}/>
      <Route path="/my_orders" element={<MyOrders/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>
    </>
    
  )
}

export default Account