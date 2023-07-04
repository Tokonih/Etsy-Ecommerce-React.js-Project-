import {
  IoChevronForward,
  IoHelpCircleOutline,
  IoOptions,
  IoCaretDown,
  IoHeartOutline,
  IoStar,
} from "react-icons/io5";
import img1 from "./img/il_300x300.1198790544_cc7f.jpg";
import img2 from "./img/il_300x300.1049222468_dsnp.jpg";
import img3 from "./img/il_300x300.1544978823_sdel.jpg";
import img4 from "./img/il_300x300.3056818895_2d37.jpg";
import img5 from "./img/il_300x300.1523969724_3laf.jpg";
import img6 from "./img/il_300x300.678757364_gnj7.jpg";
import img7 from "./img/il_340x270.1013457467_9b2h.jpg";
// import img7 from "./img/il_340x270.1034789314_656r.jpg"
// import img8 from "./img/il_340x270.1060198212_3316.jpg";
// import img9 from "./img/il_340x270.1068804108_fh76.jpg";
// import img10 from "./img/il_340x270.1090023744_sd7k.jpg";
// import img11 from "./img/il_340x270.1106773631_ydec.jpg";
// import img12 from "./img/il_340x270.1110816360_22l8.jpg";
// import img13 from "./img/il_300x300.678757364_gnj7.jpg";
// import img14 from "./img/il_340x270.1013457467_9b2h.jpg";
// import img15 from "./img/il_340x270.1278458743_5bch.jpg";
// import img16 from "./img/il_340x270.1376263334_1gaj.jpg";
// import img17 from "./img/il_340x270.1273225291_d53z.jpg";
// import img18 from "./img/il_340x270.1277722923_8dcf.jpg";
// import img19 from "./img//il_340x270.1376263334_1gaj.jpg";
import { Link } from "react-router-dom";
import Product from "./Pages/Product";
import { useEffect, useState } from "react";
// import img14 from "./img/il_340x270.1013457467_9b2h.jpg"
// import img15 from "./img/il_340x270.1278458743_5bch.jpg"
// import img16 from "./img/il_340x270.1376263334_1gaj.jpg"
// import img17 from "./img/il_340x270.1273225291_d53z.jpg"
// import img18 from "./img/il_340x270.1277722923_8dcf.jpg"
// import img19 from "./img//il_340x270.1376263334_1gaj.jpg"
function Body() {
  const [category, setCategory]= useState([])
  const getprod =(category)=>{
    fetch("http://159.65.21.42:9000/products")
    .then((resp)=>resp.json())
    .then((data)=>{
      const getcategory = data.filter((prod)=> prod.category === category )
      console.log(getcategory)
      setCategory(getcategory)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getprod("Tokonih")
  }, [])

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
          <Link to="/Product" element={<Product/>} className="shop-card">
            <img src={img1} alt="" />

            <p>Embroidery</p>
          </Link>

          <div className="shop-card">
            <img src={img2} alt="" />
            <p>Embroidery</p>
          </div>

          <div className="shop-card">
            <img src={img3} alt="" />
            <p>Embroidery</p>
          </div>

          <div className="shop-card">
            <img src={img4} alt="" />
            <p>Embroidery</p>
          </div>

          <div className="shop-card">
            <img src={img5} alt="" />
            <p>Embroidery</p>
          </div>

          <div className="shop-card">
            <img src={img6} alt="" />
            <p>Embroidery</p>
          </div>
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
                <Link to={`/Shop/${shop._id}`} className="find-something-card" key={category.id}>
                <img src={shop.image} alt="" />
                <IoHeartOutline className="find-heart" />
                <p>{shop.description}</p>
                <h3>USD{shop.price}</h3>
                <p>{shop.name}</p>
                <p>{shop._id}</p>
                <button className="free-delivery">FREE Delivery</button>
              </Link>
          ))}
          

          {/* <div className="find-something-card">
            <img src={img8} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>
            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img9} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>
            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img10} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>
            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img11} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>

            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img12} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>
            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img13} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>

            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img14} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>
            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img15} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>

            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img16} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>
            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img17} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>
            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img18} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>
            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img19} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>
            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img14} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>
            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img15} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>

            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img16} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>
            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img17} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>

            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>

            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img18} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>
            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img19} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>
            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div>

          <div className="find-something-card">
            <img src={img1} alt="" />
            <IoHeartOutline className="find-heart" />
            <p>Cute Summer Dress, Mini Dress, Ladies</p>
            <div className="star">
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <span className="num"> (15789)</span>
            </div>
            <h3>USD 26.24</h3>
            <p>Ad by LotuastudiosbyDC</p>
            <button className="free-delivery">FREE Delivery</button>
          </div> */}
        </div>
      </div>

      
    </div>
  );
}
export default Body;