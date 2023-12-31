import { useEffect, useState } from "react";
import { IoCartOutline, IoPeopleOutline, IoShirtOutline } from "react-icons/io5";
import { Link, } from "react-router-dom";
function Dashboard() {
  const [totalProduct, setTotalProduct]= useState([])
  const getData = (category)=>{
    fetch(`http://159.65.21.42:9000/products`)
    .then((resp)=>resp.json())
    .then((data)=> {
      const info = data.filter((cat)=> cat.category===category)
      setTotalProduct(info)
      console.log(info)
    } )
  }

  const [users, setUsers] = useState([])
  const getUser = ()=>{
    fetch(`http://159.65.21.42:9000/users`)
    .then((resp)=> resp.json())
    .then((data)=>{
      setUsers(data)
    })
  }

  const [cart, setCart]= useState([])
  const cartData = ()=>{
   const localData =  JSON.parse(localStorage.getItem("tk-food")) 
    setCart(localData)
    console.log(localData)
  }



  useEffect(()=>{
      getData("Tokonih")
      getUser()
      cartData()
  }, [])
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
          <Link className="link" to="/Createusers">Create User </Link>
        </div>
        <div className="Dash-right">
          <h1>Etsy</h1>
          <div className="total">
            {/* {totalProduct && totalProduct.map((totalprod)=>{ */}
                <div className="TP" >
                  <h2>Total Products:  <span>{totalProduct.length}</span></h2>
                <IoShirtOutline className="TPC-"/>
                </div>
            {/* })} */}
            
            <div className="TU"><h2>Total Users: <span>{users.length}</span></h2>
                <IoPeopleOutline  className="TPC-"/>
            </div>
            <div className="TPC">
                    <h2>Total Product in cart: <span>{}</span></h2>
               <IoCartOutline className="TPC-"/>
            </div>
          </div>
          <div>
            <h1>Products</h1>
            {/* <div className="find-something-row"> */}

            <table>
            <tr >
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Description</th>
            </tr>

            {totalProduct && totalProduct.map((data)=>(
              <tr >
                <td>{data.name}</td>
                <td>{data.price}</td>
                <img src={data.image} style={{width: "100px", height: "100px", objectFit: "cover"}} alt="" />
                <td>{data.description}</td>
                {/* <td><button className="edit" >Edit</button> <button className="delete" onClick={()=> deleteUser(use._id)}>Delete</button></td> */}

            </tr>
            ))}
          </table>
            {/* {totalProduct && totalProduct.map((data)=>(
                     <div className="find-something-card" key={totalProduct.id}>
                     <img src={data.image} alt="" />
                     <p>{data.description}</p>
                     <h3>₦{data.price}</h3>
                     <p>{data.name}</p>
                    
                   </div>
            ))} */}
         

          

         
        </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Dashboard;
