import { useEffect, useState,  } from "react";
import {Link, useNavigate,  } from "react-router-dom";

function Product() {
    const [product, setProduct] = useState([]) 
    const Navigate = useNavigate()

    const editprd = (id)=>{
        Navigate("/Editproduct/"+id)
    }
    const deleteprd =(id)=>{
        Navigate()
    }

    const getProd =(category)=>{
        fetch(`http://159.65.21.42:9000/products` )
        .then((resp)=>resp.json())
        .then((data)=> {
            const filterproduct = data.filter((product)=> product.category === category)
            setProduct(filterproduct)
            console.log(filterproduct)
        })
    }

    useEffect(()=>{
        getProd("Tokonih")
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
          <Link className="link">Create User </Link>
        </div>
        <div className="Dash-right">
          <h1>Product</h1>
          
          <div className="find-something-row">
            {product && product.map((data)=>(
                     <div className="find-something-card" key={product.id}>
                     <img src={data.image} alt="" />
                     <p>{data._id}</p>
                     <p>{data.description}</p>
                     <h3>{data.price}</h3>
                     <p>{data.name}</p>
                     <div className="prdbtn">
                     <button onClick={()=>editprd(data._id)} className="edit">Edit</button>
                     <button onClick={()=> deleteprd(data._id)} className="delete">Delete</button>
         
                     </div>
                   </div>
            ))}
         

          

         
        </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
