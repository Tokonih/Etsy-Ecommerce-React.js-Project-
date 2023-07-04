import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './Dashboard';
import Product from './Product';
import Users from './Users';
import Createproduct from './Createproduct';
import Editproduct from './Editproduct';
import Createusers from './Createusers';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Dashboard/>}/>
                <Route exact path="/Product" element={<Product/>} />
                <Route exact path="/Users" element={<Users/>} />
                <Route exact path="/Createproduct" element={<Createproduct/>} />
                <Route exact path="/Editproduct/:id" element={<Editproduct/>} />
                <Route exact path="/Createusers" element={<Createusers/>} />
            </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
