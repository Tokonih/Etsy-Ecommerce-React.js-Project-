import Sidebar from "./sidebar"

function AdminDashboard(){
    return(
       <div className="side-main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="side-container">
                <div className="Dashboard">
                   <h1 className="sidebar-title">Dashboard</h1>
                </div>
               <div className="totals">
                <div className="totalItems"><h1>Total properties: <span></span></h1> </div>
                <div className="totalItems"><h1>Total Agents: <span></span></h1> </div>
                <div className="totalItems"><h1>Total Users: <span></span></h1> </div>
                <div className="totalItems"><h1>Wishlist: <span></span></h1> </div>
                <div className="totalItems"><h1>Appointment: <span></span></h1> </div>
               </div>
            <div>
                <table>
                    <tr>
                        <th>Property</th>
                        <th>Agent</th>
                        <th>Users</th>
                    </tr>
                    <tr>
                        <td>Duplex</td>
                        <td>Tokonih</td>
                        <td>Standwell</td>
                    </tr>
                </table>
            </div>
            </div>

       </div>
    )
}

export default AdminDashboard