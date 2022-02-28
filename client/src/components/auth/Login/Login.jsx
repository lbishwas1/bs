import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from '../../Navbar/Navbar';
import loginimg from '../../../img/login.png';
import Style from './Login.module.css'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authAction";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
      
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
console.log(userData);
  };
render() {
    const { errors } = this.state;
return (
  <>
  <Navbar/>
  <div className={Style.content}>
    <div>
      <h2>Login</h2>
      <p>You are one step away from your book.</p>


<form noValidate onSubmit={this.onSubmit} className={Style.input}>
            
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              placeholder="Enter Username"
              className={Style.getusername}
              className={classnames("", {
                invalid: errors.email || errors.emailnotfound
              })}
            />
             <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={Style.getpassword}
              placeholder="Enter Password"
              className={classnames("", {
                invalid: errors.password || errors.passwordincorrect
              })}
            />
          <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
            <button
           
              type="submit"
              className={Style.setdata}
            >
              Login
            </button>
      

</form>
<p>Don't have account? <Link  to="/register">Register Here</Link></p>
</div>
    <div> <img className={Style.loginimg} src={loginimg} alt="login-img"/> </div>
   
  </div>
  
  </>
            
           
      
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);