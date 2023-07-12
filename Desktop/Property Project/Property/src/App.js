import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Component/AdminDashboard';
import CreateUser from './Component/CreateUser';
import EditUser from './Component/EditUser';
import Users from './Component/Users';
import CreateAgent from './Component/CreateAgent';
import EditAgent from './Component/EditAgent';
import Agents from './Component/Agents';
import Appointment from './Component/Appointment';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
                <Route path='/' element={<AdminDashboard/>}/>
                <Route path='/CreateUser' element={<CreateUser/>}/>
                <Route path='/EditUser' element={<EditUser/>}/>
                <Route path='/Users' element={<Users/>}/>
                <Route path='/CreateAgent' element={<CreateAgent/>}/>
                <Route path='/EditAgent' element={<EditAgent/>}/>
                <Route path='/Agents' element={<Agents/>}/>
                <Route path='/Appointment' element={<Appointment/>}/>
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
