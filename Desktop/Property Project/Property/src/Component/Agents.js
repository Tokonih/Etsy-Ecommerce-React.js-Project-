import Sidebar from "./sidebar"

function Agents(){
    return(
       <div className="side-main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="side-container">
                <div className="Dashboard">
                   <h1 className="sidebar-title">Agents</h1>
                </div>
               {/* <div className="totals">
                <div className="totalItems"><h1>Total properties: <span></span></h1> </div>
                <div className="totalItems"><h1>Total Agents: <span></span></h1> </div>
                <div className="totalItems"><h1>Total Users: <span></span></h1> </div>
                <div className="totalItems"><h1>Wishlist: <span></span></h1> </div>
                <div className="totalItems"><h1>Appointment: <span></span></h1> </div>
               </div> */}
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Tokonih</td>
                        <td>tokonih@gmail.com</td>
                        <td>3456789</td>
                        <td>tk</td>
                        <td><button>Details</button> <button>Edit</button> <button>Delete</button></td>
                    </tr>
                </table>
            </div>
            </div>

       </div>
    )
}

export default Agents;