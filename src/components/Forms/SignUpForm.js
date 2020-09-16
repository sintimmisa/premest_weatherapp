import React from "react";
import axios from "axios";

class SignUpForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.username,
      email: this.email,
      password: this.password,
      password_confirm: this.confirmPassword,
    };
    //Use axios to send data
    axios
      .post("api/signup", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={(e) => (this.username = e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => (this.email = e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => (this.password = e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Confrim Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            onChange={(e) => (this.confirmPassword = e.target.value)}
          />
        </div>
        <button className="btn btn-primary btn-block">Sign Up</button>
      </form>
    );
  }
}
export default SignUpForm;
