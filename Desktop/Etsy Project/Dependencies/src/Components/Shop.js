import {
  IoChevronForward,
  IoHelpCircleOutline,
  IoOptions,
  IoCaretDown,
  IoHeartOutline,
  IoStar,
} from "react-icons/io5";

import { Link } from "react-router-dom";
import Product from "./Pages/Product";
import { useEffect, useState } from "react";
import useFetch from "./Pages/useFetch";

function Body() {
  const {data:category} = useFetch("http://159.65.21.42:9000/products")
  const {data2:items} = useFetch("http://159.65.21.42:9000/products")

  return (
    <div className="body">
      <div className="women">
        <div className="women-dress">
          <p className="wom">Women's Dresses</p>
          <p>
            <u>All</u> <IoChevronForward /> <u>Clothing</u> <IoChevronForward />{" "}
            <u>Women's Clothing</u> <IoChevronForward /> Dresses
          </p>
          <p>
            679,381 result, with Ads
            <IoHelpCircleOutline />{" "}
          </p>
        </div>
      </div>

      <div className="Shop-by-interest">
        <h2>Shop by interest</h2>
        <p>Dresses</p>
        <div className="shop-row">
          {items && items.map((item)=>(
          <Link to={`/Shop/${item.category}/${item._id}`} element={<Product/>} className="shop-card" key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </Link>
          ))}

        </div>
      </div>

      <div className="find-something">
        <h2>Find something you love</h2>
        <div className="find-settings">
          <div className="filter">
            <IoOptions />
            <button>All filters</button>
          </div>
          <div className="filter2">
            {/* <p> */}
              Sort by: <span className="Relevancy">Relevancy</span> <IoCaretDown />
            {/* </p> */}
          </div>
        </div>
        <div className="find-something-row">
          {category.map((shop)=>(
                <Link to={`/Shop/${shop.category}/${shop._id}`} className="find-something-card" key={category.id}>
                <img src={shop.image} alt="" />
                <IoHeartOutline className="find-heart" />
                <p>{shop.description}</p>
                <h3>USD { shop.price}</h3>
                <p>{shop.name}</p>
                <button className="free-delivery">FREE Delivery</button>
              </Link>
          ))}
        </div>
      </div>

      
    </div>
  );
}
export default Body;