import { useState } from "react";
import { Link } from "react-router-dom";

function Createusers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || password === "") {
      alert("not working");
      setErr(true);
      return;
    }

    const userDetails = {
      name: name,
      phone: phone,
      email: email,
      password: password,
    };
    console.table(userDetails);

    fetch("http://159.65.21.42:9000/register", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(userDetails),
    })
      .then((resp) => resp.json)
      .then((data) => {
        alert("user created");
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="Dash">
      <div className="Dashboard">
        <div className="Dash-left">
          <Link className="link" to="/">
            Dashboard
          </Link>
          <Link className="link" to="/Product">
            Product{" "}
          </Link>
          <Link className="link" to="/Users">
            Users
          </Link>
          <Link className="link" to="/Createproduct">
            Create Product
          </Link>
          <Link className="link" to="/Createusers">
            Create User{" "}
          </Link>
        </div>
        <div className="Dash-right">
          <h1>Create User</h1>

          <div className="createproduct">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                {err === true && name === "" ? (
                  <span>Name required</span>
                ) : (
                  name === null
                )}
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {err === true && email === "" ? (
                  <span>Email required</span>
                ) : (
                  email === null
                )}
              </div>

              <div>
                <label>Phone</label>
                <input
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
                {err === true && phone === "" ? (
                  <span>Phone Required</span>
                ) : (
                  phone === null
                )}
              </div>

              <div>
                <label>Password</label>
                <input
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {err === true && password === "" ? (
                  <span>password Required</span>
                ) : (
                  password === null
                )}
              </div>

              <div className="createbtn">
                <button>Create User</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Createusers;
