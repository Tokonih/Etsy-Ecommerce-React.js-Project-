// import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import {
  IoLogoGoogle,
  IoLogoFacebook,
  IoLogoAppleAppstore,
} from "react-icons/io5";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || phone === "" || email === "" || password === "") {
      alert("pls fill the inputs ");
      setErr(true);
      return;
    }
    const signin = {
      name: name,
      phone: phone,
      email: email,
      password: password
    };
    console.log(signin);

   
    fetch("http://159.65.21.42:9000/register", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(signin),
    })
    //   .then((resp) => resp.json())
      .then((data) => {
        alert("user created");
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      {/* <Navigation/> */}
      <div className="overlay">
        <div className="wrapper">
          <div className="register">
            <h3>Create an account</h3>
          </div>
          <h5>Registration is easy.</h5>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label>Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {err === true && name === "" ? (
                <span>Enter name</span>
              ) : (
                name === null
              )}
            </div>

            <div className="input">
              <label>Phone</label>
              <input
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              {err === true && phone === "" ? (
                <span>Enter Phone number </span>
              ) : (
                phone === null
              )}
            </div>

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

            <button className="signinbtn">Register</button>
            <h6>
              <u>Trouble Signing in?</u>
            </h6>
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
                <IoLogoAppleAppstore />
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
          <Link to="/Signin" className="a"> X</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
