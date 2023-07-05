import "./App.css";
import Shop from "./Components/Pages/Body";
import Home from "./Components/Pages/Home";
import Product from "./Components/Pages/Product";
import Cart from "../src/Components/Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Components/Pages/Signin";
import Register from "./Components/Pages/Register";
import DressProvider from "./Components/Context/DressContext";

function App() {
  return (
    <DressProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Shop/:category/:id" element={<Product />} />
          {/* <Route path="/Product" element={<Product/>}/> */}
          {/* <Route path="/Product" element={<Product/>}/> */}
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </DressProvider>

    // <div className="App">
    //  <Navigation/>
    // </div>
  );
}

export default App;
