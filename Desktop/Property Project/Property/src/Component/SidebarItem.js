import { useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SidebartItem() {
  const [open, setopen] = useState(false);
  const [agentopen, setagentopen] = useState(false);
   const Navigate = useNavigate()

  return (
    <div>
    <div className={open ? "sidebar-item open" : "sidebar-item "}>
      <h1>TAGS</h1>
      {/* <div className="sidebar-title">
        <span>
          <i className="bi-house "></i>
          Properties
        </span>
        <i
          className="bi-chevron-down toggle-btn"
          onClick={() => setopen(!open)}
        ></i>
      </div> */}
      <div className="sidebar-content">
        {/* <NavLink classname='properties'>Appartment for Rent</NavLink><br />
        <NavLink classname='properties'>Appartment for sale</NavLink><br />
        <NavLink classname='properties'>Plot of land for sale</NavLink><br />
        <NavLink classname='properties'>plot of land for rent</NavLink><br />
        <NavLink classname='properties'>Commercial property for rent</NavLink><br />
        <NavLink classname='properties'>Commercial property for sale</NavLink><br />
        <NavLink classname='properties'>Event center/Work center  for sale</NavLink><br />
        <NavLink classname='properties'>Event center/Work center  for sale</NavLink><br />
        <NavLink classname='properties'>Short let property</NavLink> */}
      </div>
    </div>
    <div>
        <Link className="properties" to='/'>Dashboard</Link>
        <Link className="properties" to='/CreateUser'>Create User</Link>
        <Link className="properties" to='/EditUser'>Edit User</Link>
        <Link className="properties" to='/Users'>Users</Link>
        <Link className="properties" to="/CreateAgent">Create Agent</Link>
        <Link className="properties" to="/EditAgent">Edit Agent</Link>
        <Link className="properties" to="/Agents">Agents</Link>
        <Link className="properties" to="/Appointment"> Appointment</Link>
        <Link className="properties"> Property Reviews</Link>
        <Link className="properties"> Wishlist</Link>

    </div>
    <div className={agentopen ? "sidebar-item open" : "sidebar-item "}>
      <div className="sidebar-title">
        <span>
          <i className="bi-house "></i>
          Agenst
        </span>
        <i
          className="bi-chevron-down toggle-btn"
          onClick={() => setagentopen(!agentopen)}
        ></i>
      </div>
      <div className="sidebar-content">
        <Link classname='properties'>All Agents</Link><br />
        <Link classname='properties'>Edit Agents</Link><br />
        
      </div>
    </div>
    </div>
  );
}
