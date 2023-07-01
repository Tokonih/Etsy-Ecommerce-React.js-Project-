import { IoCartOutline, IoPeopleOutline, IoShirtOutline } from "react-icons/io5";

function Dashboard() {
  return (
    <div className="Dash">
      <div className="Dashboard">
        <div className="Dash-left">
          <button>Dashboard</button>
          <button>Product </button>
          <button>Users</button>
          <button>Create Product</button>
          <button>Create User </button>
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
