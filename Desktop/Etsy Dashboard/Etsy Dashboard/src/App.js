import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './Dashboard';
import Product from './Product';
import Users from './Users';
import Createproduct from './Createproduct';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Dashboard/>}/>
                <Route exact path="/Product" element={<Product/>} />
                <Route exact path="/Users" element={<Users/>} />
                <Route exact path="/Createproduct" element={<Createproduct/>} />
            </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
