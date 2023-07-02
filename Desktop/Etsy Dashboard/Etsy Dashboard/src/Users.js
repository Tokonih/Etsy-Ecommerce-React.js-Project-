import { Link,  } from "react-router-dom";
function Users() {
  return (
    <div className="Dash">
      <div className="Dashboard">
        <div className="Dash-left">
        <Link className="link" to="/" >Dashboard</Link>
          <Link className="link" to="/Product">Product </Link>
          <Link className="link" to="/Users">Users</Link>
          <Link className="link" to="/Createproduct">
            Create Product
          </Link>
          <Link className="link">Create User </Link>
        </div>
        <div className="Dash-right">
          <h1>Users</h1>
         <div>
         <table>
            <tr className="table-row">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
            
            <tr>
                <td>Tokonih</td>
                <td>Tokonih@gmail.com</td>
                <td>1234567890</td>
                <td><button className="edit">Edit</button> <button className="delete">Delete</button></td>
            </tr>
          </table>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
