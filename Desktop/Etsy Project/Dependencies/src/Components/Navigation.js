import {IoLocationSharp, IoSearchSharp, IoHeartOutline, IoBasketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Cart from "../Components/Pages/Cart"
import Signin from "./Pages/Signin";
import { DressContext } from "./Context/DressContext";
import { useContext } from "react";

function Navigation(){

    const contextData = useContext(DressContext)
    const {cart, setCart}= contextData
    return(
        <div className="nav">
            <div className="nav-">
                <Link to="/"><h1 style={{textDecoration:"none"}}>Etsy</h1></Link>
                <div className="Nig">
                    <IoLocationSharp/>
                    <div>
                        <h6>
                            Diliver to <br /> <span>Nigeria</span>
                    </h6>
                    </div>
                </div>
                <div className="search">
                <input type="text" placeholder="Search for anything" />
                <IoSearchSharp className="heart"/>
                </div>
                <Link to="/Signin" element={<Signin/>} className="Sign-in"> Sign in</Link>
                <Link className="heart"> <IoHeartOutline/> <span></span> </Link>
                <Link to="/Cart" element={<Cart/>} className="heart"><IoBasketOutline className="cartbag"/><span className="cartspan">{cart.length ? (cart.length) : ( null)}</span></Link>
            </div>
            <div className="nav2">
                <Link className="nav2-" to='/Shop'>Jewellery & Accessories</Link>
                <Link className="nav2-" to='/Shop'>Clothing & Shoes</Link>
                <Link className="nav2-" to='/Shop'>Home & Living</Link>
                <Link className="nav2-" to='/Shop'>Wedding & Party</Link>
                <Link className="nav2-" to='/Shop'>Toys & Entertainment</Link>
                <Link className="nav2-" to='/Shop'>Art & Collectibles</Link>
                <Link className="nav2-" to='/Shop'>Craft Supplies & Tools</Link>
                <Link className="nav2-" to='/Shop'>Vintage</Link>
            </div>
        </div>
    )
}
export default Navigation