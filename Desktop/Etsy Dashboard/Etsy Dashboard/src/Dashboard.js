import { IoCartOutline, IoPeopleOutline, IoShirtOutline } from "react-icons/io5";
import { Link, } from "react-router-dom";
function Dashboard() {
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
          <h1>Etsy</h1>
          <div className="total">
            <div className="TP"><h2>Total Products: <span>5432</span></h2>
            <IoShirtOutline className="TPC-"/>
            </div>
            <div className="TU"><h2>Total Users: <span>5432</span></h2>
                <IoPeopleOutline  className="TPC-"/>
            </div>
            <div className="TPC">
                    <h2>Total Product in cart: <span>5432</span></h2>
               <IoCartOutline className="TPC-"/>
            </div>
          </div>
          <div>
            {/* <h1>Products</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
