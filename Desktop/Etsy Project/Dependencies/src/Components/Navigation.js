import {IoLocationSharp, IoSearchSharp, IoHeartOutline, IoBasketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navigation(){
    return(
        <div className="nav">
            <div className="nav-">
                <h1>Etsy</h1>
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
                <Link className="Sign-in"> Sign in</Link>
                <Link className="heart"> <IoHeartOutline/> </Link>
                <Link className="heart"><IoBasketOutline/></Link>
            </div>
            <div className="nav2">
                <Link className="nav2-">Jewellery & Accessories</Link>
                <Link className="nav2-">Clothing & Shoes</Link>
                <Link className="nav2-">Home & Living</Link>
                <Link className="nav2-">Wedding & Party</Link>
                <Link className="nav2-">Toys & Entertainment</Link>
                <Link className="nav2-">Art & Collectibles</Link>
                <Link className="nav2-">Craft Supplies & Tools</Link>
                <Link className="nav2-">Vintage</Link>
            </div>
        </div>
    )
}
export default Navigation