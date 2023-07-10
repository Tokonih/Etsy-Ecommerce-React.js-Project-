// import Navigation from "../Navigation";
// import Btn from "../Pages/btn";
import { Link, useNavigate } from "react-router-dom";
import {
  IoLogoGoogle,
  IoLogoFacebook,
  IoLogoAppleAppstore,
} from "react-icons/io5";
import { useEffect, useState } from "react";

function Signin() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("pls fill the inputs ");
      setErr(true);
      return;
    }
    const signin = {
      email: email,
      password: password,
    };
    // console.log(signin )
    fetch("http://159.65.21.42:9000/users")
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data)
        const getuser = data.find(
          (user) => user.email === email && user.password === password
        );
        if (getuser) {
          alert("login successful");
          Navigate("/");
        }else{
          alert("Invalid user details")
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // useEffect(()=> {

  // }, [])

  return (
    <div>
      {/* <Navigation/> */}
      <div className="overlay">
        <div className="wrapper">
          <div className="register">
            <h3>Sign in</h3>
            {/* <button onClick={() => Navigate("/Register")} className="Link"> */}
            {/* Register */}
            {/* </button> */}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label>Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {err === true && email === "" ? (
                <span>Enter emaill</span>
              ) : (
                email === null
              )}
            </div>

            <div className="input">
              <label>password</label>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {err === true && password === "" ? (
                <span>Enter password</span>
              ) : (
                password === null
              )}
            </div>

            <button className="signinbtn">Sign in</button>
            <h5>
              <Link to="/Register" className="a">Register</Link>
            </h5>
            <div className="OR">
              <hr />
              OR
              <hr />
            </div>

            <div>
              <div className="signin-opts">
                <IoLogoGoogle className="google" />
                Continue width Google
              </div>
              <div className="signin-opts">
                <IoLogoFacebook className="fb" />
                Continue width Facebook
              </div>
              <div className="signin-opts">
                <IoLogoAppleAppstore className="apple" />
                Continue width Apple
              </div>
            </div>

            <p>
              By clicking Sign in or Continue with Google, Facebook, or Apple,
              you agree to Etsy's Terms of Use and Privacy Policy. Etsy may send
              you communications; you may change your preferences in your
              account settings. We'll never post without your permission.
            </p>
          </form>
        </div>

        <div className="close">
          <button onClick={() => Navigate("/")}>X</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
