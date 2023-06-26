import './App.css';
import Shop from "./Components/Pages/Body"
import Home from "./Components/Pages/Home"
import Product from './Components/Pages/Product';
import Cart from "../src/Components/Pages/Cart"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Shop" element={<Shop/>}/>
            <Route path="/Product" element={<Product/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
    // <div className="App">
    //  <Navigation/>
    // </div>
  );
}

export default App;
