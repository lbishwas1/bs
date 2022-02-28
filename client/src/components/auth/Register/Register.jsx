import React, { Component } from "react";
import Navbar from '../../Navbar/Navbar';
import registerimg from '../../../img/register.png';
import Style from '../Register/Register.module.css'
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authAction";
import classnames from "classnames";
import PropTypes from "prop-types";
import { withRouter} from 'react-router-dom'
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
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
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history); 
console.log(newUser);
  };
render() {
    const { errors } = this.state;
return (
  
  <>
  <Navbar/>
   <div className={Style.content}>
  <div>
    <h2>Register</h2>
    <p>Join our community to help everyone read books.</p>


<form noValidate onSubmit={this.onSubmit} className={Style.input}>
             
             
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={Style.getname}
                  placeholder="Full Name"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                 <span className="red-text">{errors.name}</span>

         
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={Style.getemail}
                  placeholder="Email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <span className="red-text">{errors.email}</span>
       
            
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={Style.getpassword}
                  placeholder="Password"
                  className={classnames("", {
                    invalid: errors.password
                  })}

                  
                />
                 <span className="red-text">{errors.password}</span>

           
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="Confirm Password"
                  className={Style.getpassword}
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <span className="red-text">{errors.password2}</span>
    
         
                <button
                  type="submit"
                  className={Style.setdata}
                >
                  Register
                </button>
    
            </form>


</div>
  <div> <img className={Style.registerimg} src={registerimg} alt="register-img"/> </div>
 
</div>

</>
           
    );
  }
}

 
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(Register);