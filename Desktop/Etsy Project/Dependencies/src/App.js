import './App.css';
import Shop from "./Components/Pages/Body"
import Home from "./Components/Pages/Home"
import Product from './Components/Pages/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Shop" element={<Shop/>}/>
            <Route path="/Product" element={<Product/>}/>
        </Routes>
    </BrowserRouter>
    // <div className="App">
    //  <Navigation/>
    // </div>
  );
}

export default App;
