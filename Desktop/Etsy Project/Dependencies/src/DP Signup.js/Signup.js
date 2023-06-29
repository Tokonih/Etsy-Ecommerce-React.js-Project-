import img from "../DP Signup.js/img/DP image.jpeg";

function Signup() {
  return (
    <div>
      <div className="Dp-signup">
        <div className="sign-left">
          <h1>dp page</h1>
        </div>
        <div className="sign-right">
          <div className="sign-form">
            <form>
              <h3>Create Account</h3>
              <h6>
                Don't have an account? No worries, creating one is quick and
                easy to do!
              </h6>
              <div>
                <label>Email address</label>
                <input type="email" className="" />
              </div>
              <div className="dp-check">
                <input type="checkbox" />
                <p>I confirm the email address is correct </p>
              </div>
              <div>
                <label>Password</label>
                <div className="show">
                  <input type="text" />
                  <p>
                    <u>Show</u>
                  </p>
                </div>
              </div>
              <div>
                <label>Confirm</label>
                <div className="show">
                  <input type="text" />
                  <p>
                    <u>Show</u>
                  </p>
                </div>
              </div>

              <div>
                <label>First name </label>
                <input type="email" />
              </div>

              <div>
                <label>Last name </label>
                <input type="email" />
              </div>
              <div>
                <label>Date of birth </label>
                <div>
                  <select name="" id="">
                    <option value="">Day</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                  <select name="" id="">
                    <option value="">Month</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                  <select name="" id="">
                    <option value="">Year</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
                <p>You need to be 16 or over to have account with us</p>
              </div>
              <div>
                <label>Gender (optional)</label>
                <select name="" id="">
                    <option value="">Please select</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
              </div>
              <div>
                <p>I’d like to receive exclusive discounts and news from Dorothy Perkins by:</p>
                <div  className="dp-check">
                    <input type="checkbox" />
                    <p>Email</p>
                </div>
                <div className="dp-check">
                    <input type="checkbox" />
                    <p>Email</p>
                </div >
                <div  className="dp-check">
                    <input type="checkbox" />
                    <p>Email</p>
                </div>
                <div  className="dp-check">
                    <input type="checkbox" />
                    <p>Email, post and sms* from carefully selected thrid parties</p>
                </div>
              </div>
              <div>
                <p>*By checking the SMS box, you are agreeing to receive texts from or on behalf of Dorothy Perkins, our family of companies, or one of its third-party associates, to any telephone number you provide. These texts could be sent using an automated telephone system. Agreement is not a requirement of purchase and you are free to opt-out at any time.</p>
                <p>By continuing you agree to our Terms & Conditions. See our Privacy Notice
</p>
              </div>
              <button>CREATE ACCOUNT </button>
            </form>
          </div>
          <div className="sign-img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
