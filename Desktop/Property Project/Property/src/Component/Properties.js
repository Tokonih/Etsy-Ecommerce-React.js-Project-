import prop1 from "../img/prop1.jpg";

import { LuBed, LuBath } from "react-icons/lu";
import Sidebar from "./sidebar";
// import logo from "../img/logo.png"
// import IoBedOutline from "react-icons/io5";
// import  PiBathtubLight  from "react-icons/pi";
// import   PiBedThin from "react-icons/pi";
function Properties() {
  return (
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
               </div>
            <div>

            <div className="prp-banner">
        <div className="product-grid">
        
          <div className="prop-detail">
            <div className="property-card">
              {/* <div className="prop-detail"> */}
                <div className="property-dsc">
                <img src={prop1} alt="" />
                    <div className="price-details">
                        <button className="prop-price">$1,291,00</button>
                        <h6>52322 california Fake, Ave, 21BC</h6>
                        <h3>Califonia, USA</h3>
                        <h6><LuBed className="shower"/> 2 beds <LuBath className="shower"/> 2 baths</h6>
                        <button className="Detailsbtn">Post</button> <button className="editbtn">Edit</button> <button className="deletebtn">Delete</button>

                        {/* <button className="see-detail">See details</button> */}
                    </div>
                </div>

                <div className="property-dsc">
                <img src={prop1} alt="" />
                    <div className="price-details">
                        <button className="prop-price">$1,291,00</button>
                        <h6>52322 california Fake, Ave, 21BC</h6>
                        <h3>Califonia, USA</h3>
                        <h6><LuBed className="shower"/> 2 beds <LuBath className="shower"/> 2 baths</h6>

                         <button className="Detailsbtn">Post</button> <button className="editbtn">Edit</button> <button className="deletebtn">Delete</button>
                    </div>
                </div>

                <div className="property-dsc">
                <img src={prop1} alt="" />
                    <div className="price-details">
                        <button className="prop-price">$1,291,00</button>
                        <h6>52322 california Fake, Ave, 21BC</h6>
                        <h3>Califonia, USA</h3>
                        <h6><LuBed className="shower"/> 2 beds <LuBath className="shower"/> 2 baths</h6>

                         <button className="Detailsbtn">Post</button> <button className="editbtn">Edit</button> <button className="deletebtn">Delete</button>
                    </div>
                </div>

                <div className="property-dsc">
                <img src={prop1} alt="" />
                    <div className="price-details">
                        <button className="prop-price">$1,291,00</button>
                        <h6>52322 california Fake, Ave, 21BC</h6>
                        <h3>Califonia, USA</h3>
                        <h6><LuBed className="shower"/> 2 beds <LuBath className="shower"/> 2 baths</h6>

                         <button className="Detailsbtn">Post</button> <button className="editbtn">Edit</button> <button className="deletebtn">Delete</button>
                    </div>
                </div>

                <div className="property-dsc">
                <img src={prop1} alt="" />
                    <div className="price-details">
                        <button className="prop-price">$1,291,00</button>
                        <h6>52322 california Fake, Ave, 21BC</h6>
                        <h3>Califonia, USA</h3>
                        <h6><LuBed className="shower"/> 2 beds <LuBath className="shower"/> 2 baths</h6>

                         <button className="Detailsbtn">Post</button> <button className="editbtn">Edit</button> <button className="deletebtn">Delete</button>
                    </div>
                </div>

                <div className="property-dsc">
                <img src={prop1} alt="" />
                    <div className="price-details">
                        <button className="prop-price">$1,291,00</button>
                        <h6>52322 california Fake, Ave, 21BC</h6>
                        <h3>Califonia, USA</h3>
                        <h6><LuBed className="shower"/> 2 beds <LuBath className="shower"/> 2 baths</h6>
                         <button className="Detailsbtn">Post</button> <button className="editbtn">Edit</button> <button className="deletebtn">Delete</button>
                    </div>
                </div>

            
            </div>

            <div className="Pagination">
                <p>Pagination (1 of 10)</p>
                <div>
                    <button className="pages">1</button>
                    <button className="pages">2</button>
                    <button className="pages">3</button>
                    <button className="pages">4</button>
                </div>
            </div>
          </div>
        </div>
      </div>
                {/* <table>
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
                </table> */}
            </div>
            </div>

       </div>
  );
}
export default Properties;
