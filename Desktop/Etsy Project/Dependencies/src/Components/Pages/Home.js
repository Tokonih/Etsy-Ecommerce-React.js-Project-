import Footer from "../Footer";
import Navigation from "../Navigation";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Body from "./Body";
import useFetch from "./useFetch";

function Home() {
  const {data3: category} = useFetch("http://159.65.21.42:9000/products")
  const {data4:shop} = useFetch("http://159.65.21.42:9000/products")
  const {forHer:forHer} = useFetch("http://159.65.21.42:9000/products")
  return (
    <div>
      <Navigation />
      <div className="Background">
        <div className="background ">
          <Link to="/Shop" element={<Body />} className="bg-left">
            <div className="bg-heart">
              <IoHeartOutline />
            </div>
            <div className="gb-price">
              <button>USD 106.24</button>
            </div>
          </Link>

          <div className="bg-right">
            {shop && shop.map((item)=>(
            <Link to={`Shop/${item.category}/${item._id}`} className="bg-right-grid">
              <img src={item.image} alt="" />
              {/* <div className="bg-heart">
                <IoHeartOutline />
              </div> */}
              <div className="gb-price">
                {/* <button>USD {item.price}</button> */}
              </div>
            </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-2">
        <div className="bg-row-2">
            {category && category.map((item)=>(
              <Link to={`/Shop/${item.category}/${item._id}`}>
               <img src={item.image} alt="" />
               <div className="bg-heart">
                 {/* <IoHeartOutline /> */}
               </div>
               <div className="gb-price">
                 {/* <button>USD {item.price}</button> */}
               </div>
              </Link>
            ))}
        </div>
      </div>

      <div className="popular-gift">
        <div className="popular-gift-interest">
          <h2>Shop our popular gift categories</h2>
          <div className="popular-gift-row">
            {forHer && forHer.map((item)=>(

            <Link to={`/Shop/${item.category}/${item._id}`} className="popular-card">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </Link>
            ))}

           
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="fill wt-width-full"
        viewBox="0 0 1280 30"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M1280 30h-8.1c-5.7 0-37-10.9-37.4-10.7-2.2 1.2-17.6-.8-19.9-4.1 0 0-9.8-3.3-10.3-3.3-1.3 0-12.6 3-13 2.5-.7-.7-13.8-3.7-13.8-5.3-2.3 1.3-21.2-7.8-23.4-6.7-1-.8-2.2-1.5-3.3-2.4-1.8 1.9-3.3 3.4-4.7 4.9-2.7-.8-4.8-1.4-7.1-2.1-.5.1-1 .3-1.5.5-4 1.3-5.3 1-7.3-1.3-1.7-2.1-5.3-2.2-8.1-.8-2 1-4.6 2.6-6.5 2.3-4.5-.7-6 1.1-8.1 2.6-1.5 1.1-3.1 2.1-4.6 3.1-1.8-.8-3.5-1.2-5.3-2-.3.8-.7 1.3-.8 2-.5 0-.8 0-1.2-.1V3.5c-2 .8-3.5 1.2-4.8 1.8-1.3-.8-2.3-1.6-3.5-2.4-5.1 1.2-10.1 2-15.3.1-.8-.3-2.2-.3-3-.1-1.2.3-2.2 1-3.3 1.6-1.2-.3-2.3-.8-3.8-1.1-1.7 1.1-3 2.9-6.5 1.6-.8-.3-2.3.1-3.5.3-4 .8-7.8 1.4-11.9 2-1.5.2-3-.2-4.7-.3-1-.1-1.8-.2-2.8-.2-6-.3-11.8 2.3-17.8.1-.5-.2-1.3-.2-1.8-.1-3.8 1.6-8.3 1.2-12.5 1.3-1 0-2.2.5-3.1.9-1.8.8-9.5 1.5-11.5 1.1-4.5-.8-8.1-.3-10.1 2.3-12.8-1.6-12.8-1.6-17.1.9-2.3-.4-6-1.6-7.1-1.1-4.7 2.4-7 .2-9.8-1.4-5 1.1-10.8-.8-15.8 1.4-7.3-2.7-14.9-2.7-22.9-.2-5-3.7-9.6-3.8-13.8 0-.3-1.3-.7-2.5-1-3.8-3.3.8-6.1 1.1-8.6 1.8-2.7.7-6 2.3-7.5 1.9-4.2-1.3-5.3 1.8-9 1.4-1-.9-2.3-2.2-4-3.5-1.3.3-2.8.7-4 1-3.5 1.1-6.8 2-10.3 0-.5-.3-1.8-.2-2.8-.1-2.5.2-4.8.7-7.5.9-.8.9-1.7 1.9-2.3 2.9-8.5-1.1-16.4-2.6-24.7-.4-.3.1-1.2-.1-1.7-.3-2.3-1.2-3.7-.3-5.1.8-1.2.7-2.7 1.8-4 1.8-7.3.2-14.8-.4-22.1.3-3 .3-6.8-.3-9 .7-3.3 1.5-6 .9-9.1.5-2.7-.4-5-.9-7.1-2.1-2-1-4.3-.5-4.6 1.1-.3 1.5-1.8 2.3-3.7 2.1-3.3-.8-6.8-.3-10-1.8-4.8-2.1-10.6-2.7-16.3-.7-1.7.7-3.3 1-5 1.6-.3.1-.8.1-1.5.1-1.2-.7-2.3-1.2-3.5-1.9-2 1.8-4.6 1.8-7.1.9-2.8-.8-5.6-1.3-8.8-.9-2.7.3-5.5.5-8.3.7-2 .1-4.5.8-5.8-.9-.2-.3-1.5-.4-2.2-.3-3.7.7-7.3 1.5-11 2.2-.2-.3-.5-.5-.5-.7-.2-.3-.2-.8-.2-.8-1.8.5-3.7 1.2-5.6 1.4-1.8.2-4.7-.7-5.8-.1-3.8 1.9-8.1 1.2-12.3 1.9-2.2-2.5-2.2-2.5-5.8-.9-.7.3-1.5.5-2.3.5-3-.1-6.1-.2-9.1-.5-2.7-.3-5.6-.5-7.6-1.4s-3.8-1.3-6.1-1.2c-4.6.2-9.3.3-13.9.5-4.3.2-8.6.4-14.3.8-1.7-.5-4.7-1.2-7.5-2.2-3.7-1.4-7.1-1.4-10.8.1-1.7.7-4.5 1.6-5.5 1.2-3.3-1.4-1.7 1.3-3 1.1-1.8-.3-3.7-.9-5.1-.7-3.7.4-7.1-.2-10.8-.1-5 .1-10 0-11.6 4.1-5-2.4-9.1-1-13 .5-1.3-.8-2.2-1.4-2.8-1.9-1.7.5-3 1.3-4.2 1.1-2.7-.3-5-1.1-7.3-1.8-1 .4-2 1-3 1.1-5.1.4-10.3.4-15.3.9-2 .2-5-.5-6.6 1.1-.3.3-2.8.4-3.3 0-2.2-1.9-5.1-1.2-8-1-3.3.3-6.6.5-9.8-.7-1.5-.5-4-.8-5.3-.2-4.6 1.9-9.5 2.6-14.9 3.3-5.6.8-9.8-.5-13.9-2.2-1.7 1-3.3 1.6-5.5.4-4.8-3-10.1-2.1-15.6-.7-2.8-.8-5.5-3.3-9.6-1.2-5.6-.8-11.1-.7-16.4 1-.7.2-2 .1-2.3-.2-1.7-1-3.5-1.8-6-1.6-1.2-2.5-4-.9-6.1-.8-2.5 0-5.1 1-7.1.5-2.5-.7-5-.4-7.3-.8-2.8-.4-6 .8-9 .8-5.3.3-10 1.4-13.9 3.6-.8.4-1.7.9-2.5.9-3.8.3-7.6.7-11.5.4-3.7-.3-7.3-.7-11.1-.1-1 .1-2.3-.5-3.3-.9-2.5-1-4.8-1.9-8.1-1.1-2.2.4-4.2 0-3.8-1.8-2.3.1-5 .8-7.1.3-2-.4-3-.9-4.5.5-.7.5-3.2.1-4.6.5-4.2.9-8.1 2.4-12.3 3-2.2.3-5.5.3-7.5-1.3-3.5-2.6-5.3-2.4-11-.9-1.3.3-2.8.8-4.3.9-3.3.2-6.8.3-10.8.5-2-2.9-6-5.2-11.5-7v3.1c-4.5-3.8-10.8-3-16.1-4.4-4.5 1.8-9 3.4-14.6 5.5-5-1-9.6-3.1-15.3-1.2-1 .3-3.2.1-4-.4-3.2-1.9-7.5-1.9-11-3.2-4.2-1.6-8.8-2.9-13.3-4.2-1.2-.3-11.8 2.4-13 2.4-6.6 0-20.3 11.5-25.6 9.8-6.1-2-13 .2-20.1-1-8.1 2.3-15.3 7.2-19.8 7.7H0M172.9 20c.1 0 .3 0 0 0z"></path>
      </svg>
      <div className="what-is-etsy">
        <div className="what-is">
          <h1>What is Etsy?</h1>
          <p className="read">
            <u>Read our wonderfully weird story</u>
          </p>
          <div  className="community">
            <div>
              <h2>A community doing good</h2>
              <p>
                Etsy is a global online marketplace, where people come together
                to make, sell, buy and collect unique items. We’re also a
                community pushing for positive change for small businesses,
                people, and the planet.
              </p>
              <p>
                Here are some of the ways we’re making a positive impact,
                together.
              </p>
            </div>
            <div>
              <h2>Support independent creators</h2>
              <p>
                There’s no Etsy warehouse – just millions of people selling the
                things they love. We make the whole process easy, helping you
                connect directly with makers to find something extraordinary.
              </p>
            </div>
            <div>
              <h2>Peace of mind</h2>
              <p>
                Your privacy is the highest priority of our dedicated team. And
                if you ever need assistance, we are always ready to step in for
                support.
              </p>
            </div>
          </div>

          <h4>Have a question? Well, we’ve got some answers.</h4>
          <div className="help">
          <button>Go to Help Center</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
