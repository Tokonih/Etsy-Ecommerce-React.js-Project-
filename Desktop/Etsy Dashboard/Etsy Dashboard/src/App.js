import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
