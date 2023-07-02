

  import { useEffect, useState } from "react";
// import img7 from "./img/il_340x270.1013457467_9b2h.jpg";
import {Link,  } from "react-router-dom";
function Product() {
    const [product, setProduct] = useState([])

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
                     <p>{data.description}</p>
                     <h3>{data.price}</h3>
                     <p>{data.name}</p>
                     <div className="prdbtn">
                     <button className="edit">Edit</button><button className="delete">Delete</button>
         
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
