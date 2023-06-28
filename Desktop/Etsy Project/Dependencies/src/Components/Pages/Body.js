import Shops from "../Shop";
import Footer from "../Footer";
import Navigation from "../Navigation";
// import Signin from "./Signin";

function Shop(){
    return(
       <div>
         <Navigation/>
        <Shops/>
        {/* <Signin/> */}
        <Footer/>
       </div>
    )
}
export default Shop; 