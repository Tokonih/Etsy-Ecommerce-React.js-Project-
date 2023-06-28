// import Navigation from "../Navigation";
import Btn from "../Pages/btn"
import {  useNavigate } from "react-router-dom";


function Signin(){
    const Navigate = useNavigate()


    return(
        <div>
            {/* <Navigation/> */}
            <div className="overlay">
                <div className="wrapper">
                <div className="register">
                   
                    <h3>Sign in</h3>
                    <button>Register</button>
                </div>
                <form> 
                    <div className="input">
                         <label>Email address</label>
                          <input type="email" />
                    </div>

                    <div className="input">
                         <label>Email address</label>
                          <input type="email" />
                    </div>

                    <div  className="checkbox">
                        <div className="check">
                            <input type="checkbox"/>
                            <p>Stay signed in</p>
                        </div>
                        <h6><u>Forgot your password?</u></h6>
                    </div>
                   <button className="signinbtn">Sign in</button>
                    <h6><u>Trouble Signing in?</u></h6>
                    <div className="OR">
                        <hr />
                        OR
                        <hr />
                    </div>
                    <div className="signin-opts">
                    <Btn title="Continue width Google" width="90%" height="40px" borderRadius="5px" bgcolor="white" color="" margin="10px 20px"/>
                    <Btn title="Continue width Facebook" width="90%" height="40px" borderRadius="5px" bgcolor="white" margin="10px 20px"/>
                    <Btn title="Continue width Apple" width="90%" height="40px" borderRadius="5px" bgcolor="white" margin="10px 20px"/>
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

export default Signin;