import { useEffect, useState } from "react";
// import {editId} from useParams
// import { useNavigate, useParams } from "react-router-dom";
function Editproduct() {
    
//   const { id } = useParams();



  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [err, setErr] = useState(false);

//   const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
   
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
