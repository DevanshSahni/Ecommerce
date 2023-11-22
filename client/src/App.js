import { Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Explore from "./Pages/Explore";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
    <Navbar/>
    <Routes >
      <Route path="/Explore" element={<Explore/>} />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/Product/:productID" element={<Product/>} />
    </Routes>
    </>
  );
}

export default App;
