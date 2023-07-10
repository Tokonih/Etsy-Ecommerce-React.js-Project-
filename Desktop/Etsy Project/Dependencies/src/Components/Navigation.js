import {
  IoLocationSharp,
  IoSearchSharp,
  IoHeartOutline,
  IoBasketOutline,
  IoArrowForwardSharp,
  IoChevronForwardOutline
} from "react-icons/io5";
import { Link } from "react-router-dom";
import Cart from "../Components/Pages/Cart";
import Signin from "./Pages/Signin";
import { DressContext } from "./Context/DressContext";
import { useContext } from "react";

function Navigation() {
  const contextData = useContext(DressContext);
  const { cart, setCart } = contextData;
  return (
    <div className="nav">
      <div className="nav-">
        <Link to="/">
          <h1 style={{ textDecoration: "none" }}>Etsy</h1>
        </Link>
        <div className="Nig">
          <IoLocationSharp />
          <div>
            <h6>
              Diliver to <br /> <span>Nigeria</span>
            </h6>
          </div>
        </div>
        <div className="search">
          <input type="text" placeholder="Search for anything" />
          <IoSearchSharp className="heart" />
        </div>
        <Link to="/Signin" element={<Signin />} className="Sign-in">
          {" "}
          Sign in
        </Link>
        <Link className="heart">
          {" "}
          <IoHeartOutline /> <span></span>{" "}
        </Link>
        <Link to="/Cart" element={<Cart />} className="heart">
          <IoBasketOutline className="cartbag" />
          <span className="cartspan">{cart.length ? cart.length : null}</span>
        </Link>
      </div>
      <div class="navbar">
       
        <div class="dropdown">
        <button >
          Jewellery & Accessories
        </button>
          <div class="dropdown-content">
            
            <div class="row">
              <div class="column">
             <ul>
               <li className="allJ"><b>All Jewellery and Accessories  <IoArrowForwardSharp/></b></li>
               <div className="megaArrow"><li>Accessories</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Bag & purses</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Necklace</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Rings</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Earrings</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Braclets</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Body Jewelleries</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li><b>All Jewelleries</b></li> <IoChevronForwardOutline/></div> 
             </ul>
              </div>
              <div class="column">
              <ul>
                <li><b>  Hats & Caps</b></li>
                <li>Baseball & Trucker Hats</li>
                <li>Sun Hats</li>
                <li>Hair Accessories</li>
                <li>Fascinators & Mini Hats</li>
                <li>Hairslides & Clips</li>
                <li>Ties & Elastics</li>
                <li>Body Jewelleries</li>
                <li><b>Wreaths & Tiaras</b></li>
             </ul>
              </div>
              <div class="column">
              <ul>
                <li><b>Sunglasses & Eyewear</b></li>
                <li>Scarves & Wraps</li>
                <li>Belts & Braces</li>
                <li>Keychains & Lanyards</li>
                <li>Cosmetic & Toiletry Bags</li>
                <li>Gloves & Mittens</li>
                <li>Umbrellas & Rain Accessories</li>
                <li>Wallets & Money Clips</li>
                <li className="allJ"><b>All Accessories  <IoArrowForwardSharp/></b></li>

             </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown">
        <button >
          Clothing & Shoes
        </button>
          <div class="dropdown-content">
            
            <div class="row">
              <div class="column">
             <ul>
                <li className="allJ"><b>All Jewellery and Accessories  <IoArrowForwardSharp/></b></li>
               <div className="megaArrow"><li>Accessories</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Bag & purses</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Necklace</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Rings</li> <IoChevronForwardOutline/></div> 
              
             </ul>
              </div>
              <div class="column">
              <ul>
                <li><b> All clothing and shoes</b></li>
                <li>Women's</li>
                <li>Men's</li>
                <li>Kids</li>
                <li>Bags</li>
                <li>Hairslides & Clips</li>
                <li>Ties & Elastics</li>
                <li>Body Jewelleries</li>
                <li><b>Wreaths & Tiaras</b></li>
             </ul>
              </div>
              <div class="column">
              <ul>
                <li><b>Sunglasses & Eyewear</b></li>
                <li>Scarves & Wraps</li>
                <li>Belts & Braces</li>
                <li>Keychains & Lanyards</li>
                
                <li>Wallets & Money Clips</li>
                <li className="allJ"><b>All Accessories  <IoArrowForwardSharp/></b></li>

             </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown">
        <button >
          Home & Living
        </button>
          <div class="dropdown-content">
            
            <div class="row">
              <div class="column">
             <ul>
                <li className="allJ"><b>All Jewellery and Accessories  <IoArrowForwardSharp/></b></li>
               <div className="megaArrow"><li>Accessories</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Bag & purses</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Necklace</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Rings</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Earrings</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Braclets</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li>Body Jewelleries</li> <IoChevronForwardOutline/></div> 
               <div  className="megaArrow"><li><b>All Jewelleries</b></li> <IoChevronForwardOutline/></div> 
             </ul>
              </div>
              <div class="column">
              <ul>
                <li><b>  Hats & Caps</b></li>
                <li>Baseball & Trucker Hats</li>
                <li>Sun Hats</li>
                <li>Hair Accessories</li>
                <li>Fascinators & Mini Hats</li>
                <li>Hairslides & Clips</li>
                <li>Ties & Elastics</li>
                <li>Body Jewelleries</li>
                <li><b>Wreaths & Tiaras</b></li>
             </ul>
              </div>
              <div class="column">
              <ul>
                <li><b>Sunglasses & Eyewear</b></li>
                <li>Scarves & Wraps</li>
                <li>Belts & Braces</li>
                <li>Keychains & Lanyards</li>
                <li>Cosmetic & Toiletry Bags</li>
                <li>Gloves & Mittens</li>
                <li>Umbrellas & Rain Accessories</li>
                <li>Wallets & Money Clips</li>
                <li className="allJ"><b>All Accessories  <IoArrowForwardSharp/></b></li>

             </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown">
        <button >
          Wedding & Party
        </button>
          <div class="dropdown-content">
            
            <div class="row">
              <div class="column">
             <ul>
                <li className="allJ"><b>All Jewellery and Accessories  <IoArrowForwardSharp/></b></li>
            <Link to= "/Shop" className="megaLink" ><div className="megaArrow"><li>Accessories</li> <IoChevronForwardOutline/></div> </Link> 
            <Link to= "/Shop" className="megaLink" ><div className="megaArrow"><li>Bag & purses</li> <IoChevronForwardOutline/></div> </Link> 
            <Link to= "/Shop" className="megaLink" ><div className="megaArrow"><li>Necklace</li> <IoChevronForwardOutline/></div> </Link> 
            <Link to= "/Shop" className="megaLink" ><div className="megaArrow"><li>Rings</li> <IoChevronForwardOutline/></div> </Link> 
            <Link to= "/Shop" className="megaLink" ><div className="megaArrow"><li>Earrings</li> <IoChevronForwardOutline/></div> </Link> 
            <Link to= "/Shop" className="megaLink" ><div className="megaArrow"><li>Braclets</li> <IoChevronForwardOutline/></div> </Link> 
            <Link to= "/Shop" className="megaLink" ><div className="megaArrow"><li>Body Jewelleries</li> <IoChevronForwardOutline/></div> </Link> 
            <Link to= "/Shop" className="megaLink" ><div className="megaArrow"> <li><b>All Jewelleries</b></li> <IoChevronForwardOutline/></div></Link> 
             </ul>
              </div>
              <div class="column">
              <ul>
                <li><b>  Hats & Caps</b></li>
                <li>Baseball & Trucker Hats</li>
                
             </ul>
              </div>
              <div class="column">
              <ul>
                <li><b>Sunglasses & Eyewear</b></li>
                <li>Scarves & Wraps</li>
                <li>Belts & Braces</li>
                <li>Keychains & Lanyards</li>
                <li>Cosmetic & Toiletry Bags</li>
                <li>Gloves & Mittens</li>
                <li>Umbrellas & Rain Accessories</li>
                <li>Wallets & Money Clips</li>
                <li className="allJ"><b>All Accessories  <IoArrowForwardSharp/></b></li>

             </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown">
        <button >
          Toy & Entertainment
        </button>
          
        </div>

        <div class="dropdown">
        <button >
          Jewellery & Accessories
        </button>
         
        </div>

        <div class="dropdown">
        <button >
          Art & Collectables
        </button>
          
        </div>

        <div class="dropdown">
        <button >
          Craft supplies & Tools
        </button>
          
        </div>
       
      </div>

     
    </div>
  );
}
export default Navigation;
