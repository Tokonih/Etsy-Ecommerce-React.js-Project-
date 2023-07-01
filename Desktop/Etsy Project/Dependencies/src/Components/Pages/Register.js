// import Navigation from "../Navigation";
import Btn from "../Pages/btn"
import {  useNavigate } from "react-router-dom";
import { IoLogoGoogle, IoLogoFacebook, IoLogoAppleAppstore } from "react-icons/io5";


function Register(){
    const Navigate = useNavigate()

    return(



        <div>
            {/* <Navigation/> */}
            <div className="overlay">
                <div className="wrapper">
                <div className="register">
                   
                    <h3>Create an account</h3>
                </div>
                    <h5>Registration is easy.</h5>
                <form> 
                    <div className="input">
                         <label>Email address</label>
                          <input type="email" />
                    </div>

                    <div className="input">
                         <label>First name</label>
                          <input type="text" />
                    </div>

                    <div className="input">
                         <label>Password</label>
                          <input type="text" />
                    </div>

                  
                   <button className="signinbtn">Register</button>
                    <h6><u>Trouble Signing in?</u></h6>
                    <div className="OR">
                        <hr />
                        OR
                        <hr />
                    </div>
                    <div>
              <div className="signin-opts">
                <IoLogoGoogle   className="google" />
               Continue width Google
              </div>
              <div className="signin-opts">
                <IoLogoFacebook  className="fb" />
                Continue width Facebook
              </div>
              <div className="signin-opts">
                <IoLogoAppleAppstore/>
               Continue width Apple
              </div>
            </div>

                    <p>By clicking Sign in or Continue with Google, Facebook, or Apple, you agree to Etsy's Terms of Use and Privacy Policy. Etsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.</p>
                </form>
                </div>
               
                <div className="close">
                      <button onClick={()=>Navigate(-1)}>X</button>
                    </div>
            </div>
            
        </div>
    )
}


export default Register;