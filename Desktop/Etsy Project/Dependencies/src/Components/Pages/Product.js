import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Navigation from "../Navigation";
import img from "../img/il_300x300.1049222468_dsnp.jpg";

import {
  IoChevronBackOutline,
  IoChevronForwardSharp,
  IoStarSharp,
  IoCheckmark,
} from "react-icons/io5";
import { useEffect, useState } from "react";
import { DressContext } from "../Context/DressContext";
import { useContext } from "react";

// import HeroSlider, { Slide } from "hero-slider";
function Product() {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  const [select, setSelect] = useState("");
  const [err, setErr] = useState(false);
  const contextData = useContext(DressContext);
  const { cart, setCart } = contextData;

  const getprod = () => {
    fetch(`http://159.65.21.42:9000/product/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        // const getsingleproduct = data.find((dress)=> dress.id === itemid)
        setSingleProduct(data);
        console.log(data);
        // console.log(getsingleproduct)
      });
  };

  // const selectedColor = select

  const handleSubmit = (e) => {
    e.preventDefault();
 
  };
  const handleCart = (dress) => {
    if (!select) {
      setErr(true);
      return;
    }
    const existingCartData = [...cart];
    const CheckIfDressExist = existingCartData.find(
      (item) => item._id === dress._id
    );
    if (CheckIfDressExist) {
      alert("Item already in cart");
      return;
    }
    const newItem = {
      ...dress,
      quantity: 1,
      totalPrice: dress.price,
      select: select,
    };
    existingCartData.push(newItem);
    setCart(existingCartData);
    localStorage.setItem("user-cart", JSON.stringify(existingCartData));
    alert("Item added to cart");
  };

  useEffect(() => {
    getprod();
  }, []);
  return (
    <div>
      <Navigation />
      <div className="Product">
        <div className="single-product">
          <div className="sideimg">
            <img src={singleProduct.image} alt="" />
            <img src={singleProduct.image} alt="" />
            <img src={singleProduct.image} alt="" />
            <img src={singleProduct.image} alt="" />
            <img src={singleProduct.image} alt="" />
            <img src={singleProduct.image} alt="" />
          </div>
          <div className="middleimg">
            <button>
              <IoChevronBackOutline />
            </button>
            <img src={singleProduct.image} alt="" />
            <button>
              <IoChevronForwardSharp />
            </button>
          </div>
          <div className="right-details">
            <div>
              <p className="low">Low in stock, only 2 left and in 2 baskets</p>
              <div className="prdprice">
                <h2>USD {singleProduct.price}</h2>
                <p>
                  <s>USD 74.95</s>(10% Off)
                </p>
              </div>
              <p>{singleProduct.name}</p>
              <p>{singleProduct.description}</p>
              <p>
                AlkebulanLifestyle <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />{" "}
              </p>
              <p>
                <IoCheckmark className="tick" />
                Exchanges accepted
              </p>
              <p>
                Primary colour
                <IoStarSharp className="primary-start" />{" "}
              </p>
              <div className="select-color">
                <form action="" onSubmit={handleSubmit}>
                  <select
                    placeholder="Select a color"
                    onChange={(e) => setSelect(e.target.value)}
                    value={select}
                  >
                    <option value="">Select a color</option>
                    <option value="yellow">Yellow</option>
                    <option value="pink">Pink</option>
                    <option value="red">Rd</option>
                  </select>
                  {err === true && select === "" ? (
                    <span>Select a color</span>
                  ) : (
                    select === null
                  )}

                  <button onClick={() => handleCart(singleProduct)}>
                    Add to cart
                  </button>
                </form>
              </div>
              <div className="star-seller">
                <IoStarSharp className="starSeller" />
                <p>
                  Star Seller. This seller consistently earned 5-star reviews,
                  dispatched on time, and replied quickly to any messages they
                  received.
                </p>
              </div>
              <div className="highlight">
                <select>
                  <option value="">Highlight</option>
                </select>
                <select>
                  <option value="">Description</option>
                </select>
                <select>
                  <option value="">Delivery and return policies</option>
                </select>
                <select>
                  <option value="">Meet your seller</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Product;
