import { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
function Users() {

  const [users, setUsers] = useState([])
  const getUser = ()=>{
    fetch(`http://159.65.21.42:9000/users`)
    .then((resp)=> resp.json())
    .then((data)=>{
      // const user = data.map((thisuser)=>{
      //   return{...thisuser, category:cat}
      // })
      setUsers(data)
      // console.log(data)
    })
  }

  const deleteUser = (id)=>{
    if(window.confirm("Do you want to delete ?")){
      fetch(`http://159.65.21.42:9000/user/${id}`,{
        method:"Delete",
      }).then((resp)=>{
        alert("Delete successful")
        window.location.reload()
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
  
  useEffect(()=>{
    getUser()
  },[])

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
          <h1>Users</h1>
         <div>

         <table>
            <tr >
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Password</th>
                <th>Action</th>
            </tr>

            {users && users.map((use)=>(
              <tr >
                  <td>{use.name}</td>
                <td>{use.email}</td>
                <td>{use.phone}</td>
                <td>{use.password}</td>
                <td><button className="edit" >Edit</button> <button className="delete" onClick={()=> deleteUser(use._id)}>Delete</button></td>

            </tr>
            ))}
                


            
            {/* <tr>{users && users.map((thisuser)=>(
              <div>
                    <td>{thisuser.name}</td>
                <td>{thisuser.email}</td>
                <td>{thisuser.phone}</td>
                <td>{thisuser.password}</td>
                <td><button className="edit">Edit</button> <button className="delete">Delete</button></td>
              </div>
            ))}
            <tr/> */}
                
            {/* </tr> */}

          </table>

         </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
