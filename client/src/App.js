import { Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Explore from "./Pages/Explore";
import Navbar from "./Components/Navbar";
import NewAddress from "./Pages/NewAddress";
import SelectAddress from "./Pages/SelectAddress";


function App() {
  return (
    <>
    <Navbar/>
    <Routes >
      <Route path="/" element={<Explore/>} />
      <Route path="/Explore" element={<Explore/>} />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/Product/:productID" element={<Product/>} />
      <Route path="/new-address" element={<NewAddress/>} />
      <Route path="/select-address" element={<SelectAddress/>} />
    </Routes>
    </>
  );
}

export default App;
