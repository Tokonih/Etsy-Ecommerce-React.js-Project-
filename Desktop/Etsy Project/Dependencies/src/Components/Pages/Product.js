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

// import HeroSlider, { Slide } from "hero-slider";
function Product() {
  const [singleProduct, setSingleProduct]= useState({})
  const {id}= useParams()

  const getprod = ()=>{
    fetch(`http://159.65.21.42:9000/product/${id}`)
    .then((resp)=> resp.json())
    .then((data)=>{
      // const getsingleproduct = data.find((dress)=> dress.id === itemid)
      setSingleProduct(data)
      console.log(data)
      // console.log(getsingleproduct)
    })
  }
  useEffect(()=>{
    getprod()
  },[])
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

              <div>
                  <button><IoChevronBackOutline/></button>
                  <img src={singleProduct.image} alt="" />
                  <button><IoChevronForwardSharp/></button>
                  </div>
            
          </div>
          <div className="right-details">
            <div>
              <p className="low">Low in stock, only 2 left and in 2 baskets</p>
              <div className="prdprice">
                <h2>USD 67.25 </h2>
                <p>
                  <s>USD 74.95</s>(10% Off)
                </p>
              </div>
              <p>Local taxes included (where applicable)</p>
              <p>
                African Ankara Print Style Smock Elastic Waist Maxi Dress Ankle
                Length Bell Sleeve Black Yellow
              </p>
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
                <form action="">
                  <select placeholder="Select a color">
                    <option value="">Select a color</option>
                    <option value="yello">Yellow</option>
                    <option value="pink">Pink</option>
                    <option value="red">Rd</option>
                  </select>
                  <button >Add to cart</button>
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
