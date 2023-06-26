import Navigation from "../Navigation";
import {
  IoPencilSharp,
  IoAdd,
  IoPricetag,
  IoEarthSharp,
} from "react-icons/io5";
import img from "../img/grid 5.jpg";
function Cart() {
  return (
    <div>
      <Navigation />
      <div className="cart-page">
        <div className="oh-dear">
          <p>
            Oh dear. You can't add this listing to your basket. You've already
            added that item, and no more are available.
          </p>
        </div>
        <div className="item-num">
          <h1>1 item in the cart </h1>
        </div>
        <div className="buy-conf">
          <p>
            Buy confidently with Etsy's Purchase Protection programme for
            buyers, get a full refund in the rare case your item doesn't arrive,
            arrives damaged, or isn't as described. See eligibility
          </p>
        </div>

        <div className="payment">
          <div className="payment-details">
            <div>
              <div>
                <p>Brand Name</p>
                <p>Contact shop</p>
              </div>
              <p>Buy 2 more items from this shop to get 15% off.</p>
              <div className="price-details">
                <div className="prod">
                  <div>
                  <div className="proddsc">
                    <img src={img} alt="" />
                   
                    <div>
                      <p>Product Dsc</p>
                      <p>Product colour: color</p>
                      <p>Size: </p>
                      <p>
                        <IoPencilSharp /> Edit
                      </p>
                      <div className="prodbtn">
                        <button >Save for Later</button>
                        <button>Remove</button>
                      </div>
                    </div>
                    </div>

                    <div>
                      <button className="addbtn">
                        <IoAdd /> Add a note to <b>Brand Name </b>
                      </button>
                    </div>
                   

                    <div>
                      <input type="checkbox" />
                      <div>
                        <p>This order is a gift</p>
                        <p>Prices will not be shown on packing slip</p>
                      </div>
                    </div>
                  </div>

                  <div className="prices">
                    <div>
                      <h3>USD 67.45</h3>
                      <p>
                        <s>74.95</s>
                      </p>
                      <p>Sale :10% off</p>
                    </div>
                    <div>
                      <p>Only 2 available and it's in 3 people's baskets</p>
                    </div>
                     <div>
                      <select className="standard">
                        <option value="">USD 36.72 (Standard </option>
                      </select>
                      <p>
                        Ready to dispatch in 1–4 business days from United
                        States
                      </p>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div className="how-to-pay">
              <p>How you'll pay</p>
              <div>
                <button></button>
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 48.00 48.00"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1e64ae"
                  stroke="#1e64ae"
                  transform="matrix(1, 0, 0, 1, 0, 0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.576"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="Layer_2" data-name="Layer 2">
                      {" "}
                      <g id="invisible_box" data-name="invisible box">
                        {" "}
                        <rect width="48" height="48" fill="none"></rect>{" "}
                      </g>{" "}
                      <g id="Icons">
                        {" "}
                        <g>
                          {" "}
                          <path d="M43,8H5a2.9,2.9,0,0,0-3,3V37a2.9,2.9,0,0,0,3,3H43a2.9,2.9,0,0,0,3-3V11A2.9,2.9,0,0,0,43,8ZM42,36H6V12H42Z"></path>{" "}
                          <path d="M30.6,28.9H33l.3-.2c.3-.7.4-1.2.5-1.3h3.4a6.1,6.1,0,0,1,.3,1.3l.3.2h1.9c.1,0,.2,0,.2-.1a.4.4,0,0,0,.1-.3l-2.1-9.3c0-.2-.1-.3-.2-.3H35.8a1.4,1.4,0,0,0-1.4.9l-3.8,8.7C30.5,28.7,30.6,28.8,30.6,28.9ZM36,21.7l.2.9.6,2.9H34.6Z"></path>{" "}
                          <path d="M23.3,28.5a10,10,0,0,0,2.6.5h0c2.8,0,4.5-1.3,4.6-3.3s-.7-2-2.2-2.6-1.5-.8-1.5-1.2.5-.9,1.5-.9h.1a3.2,3.2,0,0,1,1.7.4h.3c.1,0,.1-.1.1-.2l.3-1.4a.5.5,0,0,0-.2-.4,9.5,9.5,0,0,0-2.1-.3c-2.6,0-4.4,1.3-4.4,3.2s1.3,2.2,2.3,2.6,1.3.8,1.3,1.2-.8,1-1.5,1a5.7,5.7,0,0,1-2.4-.5.2.2,0,0,0-.3,0c-.1,0-.1.1-.2.2l-.2,1.5C23.1,28.3,23.1,28.5,23.3,28.5Z"></path>{" "}
                          <path d="M8.2,19.6a8.8,8.8,0,0,1,4.1,2.9h.3c.2-.1.2-.2.2-.4l-.5-2.4h0a1.1,1.1,0,0,0-1.2-.8H8.3a.3.3,0,0,0-.3.3Z"></path>{" "}
                          <path d="M18.6,28.9H21c.1,0,.2-.1.2-.3l1.6-9.3v-.3H20.5a.3.3,0,0,0-.3.3l-1.6,9.3Z"></path>{" "}
                          <path d="M10.3,21.2H10c-.1,0-.2.2-.2.3l2.1,7.3.3.2h2.5a.2.2,0,0,0,.2-.2l4-9.4c.1,0,.1-.2,0-.2s-.1-.2-.2-.2H16.5c-.2,0-.3.1-.3.2l-2.6,6.6-.3-1h0A10.2,10.2,0,0,0,10.3,21.2Z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <div>
                <div className="items">
                  <h3>Items(s) total</h3>
                  <p>USD 74.95</p>
                  <h3>Shop discount</h3>
                  <p>-USD 7.50</p>
                </div>
                <hr />
                <div  className="items">
                  <h3>Subtotal</h3>
                  <p>USD 74.95</p>
                  <h3>Delivery</h3>
                  <p>-USD 7.50</p>
                </div>
                <hr />
                <div className="total-price">
                  <h3>Total (1 item)</h3>
                  <h3>USD 104.17</h3>
                </div>
              </div>
              <button className="procees">Proceed to Checkout </button>
              <div>
                <button className="apply">
                  <IoPricetag />
                  Apply Etsy coupon code{" "}
                </button>
                {/* <p>
              Local taxes included (where applicable) * Additional duties and
              taxes may apply
            </p> */}
              </div>
            </div>
          </div>
      
        </div>
        <hr />
        <div className="cart-footer">
          <div className="cart-footer-details">
            <div className="lang">
              <IoEarthSharp />
              <p>Nigeria</p>
              <p>|</p>
              <p>English (UK)</p>
              <p>|</p>
              <p>$ (USD)</p>
            </div>
            <div className="terms">
              <p>© 2023 Etsy, Inc.</p>
              <p>Terms of use</p>
              <p>Privacy</p>
              <p>Interest</p>
              <p>Local shop</p>
            </div>
          </div>
         <div className="Merchant">
         <div>
            <p>
              Merchant is Etsy, Inc. (USA), Etsy Ireland UC (Ireland), or Etsy
              UK Limited (United Kingdom) depending on the currency and location
              of the payment instrument issuance. See Etsy Payments Policy.
            </p>
          </div>
          <div>
            <p>Etsy, Inc., USA 117 Adams Street Brooklyn, NY 11201</p>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
