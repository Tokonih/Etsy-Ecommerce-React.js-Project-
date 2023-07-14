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
import Property from './UsersPage/Property';
import HeaderSection from './UsersPage/HeaderSection';
import AppointmentPage from './UsersPage/AppointmentPage';
import Properties from './Component/Properties';

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
                <Route path='/Property' element={<Property/>}/>
                <Route path='/HeaderSection' element={<HeaderSection/>}/>
                <Route path='/AppointmentPage' element={<AppointmentPage/>}/>
                <Route path='/Properties' element={<Properties/>}/>
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
