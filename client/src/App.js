import { Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Explore from "./Pages/Explore";
import Navbar from "./Components/Navbar";
import NewAddress from "./Pages/NewAddress";
import SelectAddress from "./Pages/SelectAddress";
import Account from "./Pages/Account";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


function App() {
  return (
    <>
    <Navbar/>
    <Routes >
      <Route path="/" element={<Explore/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/product/:productID" element={<Product/>} />
      <Route path="/new-address" element={<NewAddress/>} />
      <Route path="/select-address" element={<SelectAddress/>} />
      <Route path="/account/*" element={<Account/>} />
    </Routes>
    </>
  );
}

export default App;
