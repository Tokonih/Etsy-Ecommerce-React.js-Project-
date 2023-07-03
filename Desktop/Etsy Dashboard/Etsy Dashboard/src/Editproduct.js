import { useEffect, useState } from "react";
// import {editId} from useParams
import { useNavigate, useParams } from "react-router-dom";
function Editproduct() {
    
  const { id } = useParams();

  useEffect(()=>{
        fetch( `http://159.65.21.42:9000/product/${id}`)
        .then((resp)=> resp.json())
        .then((data)=>{
          console.log(data)
            setName(data.name)
            setCategory(data.category)
            setPrice(data.price)
            setQuantity(data.quantity)
            setImage(data.image)
            setDescription(data.description)
        }).catch((err)=> {
            console.log(err)
        })
  }, [])

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [err, setErr] = useState(false);

  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const editdata = {name, category, price, quantity, image, description}
    console.log(editdata)
      fetch(`http://159.65.21.42:9000/update/product/${id}`,{
          method: "PUT",
          headers: {"Content-Type" : "Application/json"},
          body: JSON.stringify(editdata)
      }).then((resp)=> {
        alert('saved successfully')
      }).catch((err)=>{
        console.log(err.message)
      })
      

   
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {err === true && name === "" ? (
            <span>name is required</span>
          ) : (
            name === null
          )}
        </div>

        <div>
          <label htmlFor="">Category</label>
          <input
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          {err === true && category === "" ? (
            <span>category is required</span>
          ) : (
            category === null
          )}
        </div>

        <div>
          <label htmlFor="">Price</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          {err === true && price === "" ? (
            <span>Price is required</span>
          ) : (
            price === null
          )}
        </div>

        <div>
          <label htmlFor="">Quantity</label>
          <input
            type="Number"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />
          {err === true && quantity === "" ? (
            <span>Quantity required</span>
          ) : (
            quantity === null
          )}
        </div>

        <div>
          <label htmlFor="">image</label>
          <input
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          {err === true && image === "" ? (
            <span>Image is required</span>
          ) : (
            image === null
          )}
        </div>

        <div>
          <label htmlFor="">Description</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          {err === true && description === "" ? (
            <span>Description required</span>
          ) : (
            description === null
          )}
        </div>
        <button>Edit Product</button>
      </form>
    </div>
  );
}
export default Editproduct;
