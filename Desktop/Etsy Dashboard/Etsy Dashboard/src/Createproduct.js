import {  useState } from "react";
import { Link} from "react-router-dom";

function Createproduct() {
    const [name, setName]= useState("")
    const [category, setCategory]= useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity]= useState("")
    const [image, setImage]= useState("")
    const [description, setDescription]= useState("")
    const [err, setErr] =useState (false)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(name === "" || category=== "" || price==="" || quantity==="" || image==="" || description==="" ){
            alert('not working')
            setErr(true)
            return
        } 
        
        const prodDetail = {
            name: name,
            category: category,
            price: price,
            quantity: quantity,
            image:image,
            description: description,
        };
        console.log(prodDetail)


        fetch('http://159.65.21.42:9000/create/product',{
        method: "POST",
        headers: {"Content-Type": "Application/Json "},
        body:JSON.stringify(prodDetail)
        })
        .then((resp)=> resp.json())
        .then((data)=> {
            alert("Product Created")
            console.log(data)
        }).catch((err)=>
            console.log(err)
        )
    }

  return (
    <div className="Dash">
      <div className="Dashboard">
        <div className="Dash-left">
         <button> <Link className="link" to="/" >Dashboard</Link></button>
         <button> <Link className="link" to="/Product">Product </Link></button>
          <button><Link className="link" to="/Users">Users</Link></button>
          <button><Link className="link" to="/Createproduct">
            Create Product
          </Link></button>
         <button> <Link className="link" to="/Createusers">Create User </Link></button>
        </div>
        <div className="Dash-right">
          <h1>Create Product</h1>

          <div>
             <form onSubmit={handleSubmit} className="createproduct">
                <div>
                    <label>Name</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
                   {err === true && name ===""? <span>Name required</span> : name=== null} 
                </div>

                <div>
                    <label>Category</label>
                    <select onChange={(e)=>setCategory(e.target.value)} value={category}>
                        <option value="">Select</option>
                        <option value="Tokonih">Tokonih</option>
                    </select>
                    {err=== true && category==="" ? <span>Category required</span> : category=== null}
                </div>

                <div>
                    <label>Price</label>
                    <input type="number" onChange={(e)=> setPrice(e.target.value)} value={price}/>
                    {err=== true && price === ""? <span>Price Required</span>: price === null}
                </div>

                <div>
                    <label>Quantity</label>
                    <input type="number" onChange={(e)=>setQuantity(e.target.value)} value={quantity}/>
                    {err===true && quantity ===""?  <span>Quantity Required</span> : quantity === null}
                </div>

                <div>
                    <label>Image</label>
                    <input type="text" onChange={(e)=> setImage(e.target.value)} value={image}/>
                   {err=== true && image===""?  <span>Image require</span> : image===null}
                </div>

                <div>
                    <label>Description</label>
                    <textarea type="text" onChange={(e)=> setDescription(e.target.value)} value={description}/>
                    {err=== true && description===""? <span>Description required</span> : description ===null}
                </div>
                <button>Submit</button>
             </form>
          </div>


        </div>
      </div>
    </div>
  );
}
export default Createproduct;
