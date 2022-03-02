import React, { Component } from 'react';

import Style from "./Dashboard.module.css"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAction";
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
    render() { 
        const { user } = this.props.auth;
        return ( 
        <>
            <div className={Style.dashcontent}>
              <div className={Style.verticalnav}>
                  <div>
                    <img src={user.userimg} className={Style.pp} alt="user"/></div>  
                    <p className={Style.name}>{user.name}</p>
                    <p className={Style.userLocation}>{user.location}</p>
                  <div>
                  <Link className={Style.navitem} to="/mybooks" >
                        <li>My Books</li>
                      </Link>
                      <Link className={Style.navitem} to="/settings" >
                        <li>Settings</li>
                      </Link>
                   
                    <button
                    className={Style.logoutBtn} onClick={this.onLogoutClick}
                    >
                      Logout
                    </button>
                      </div>
                      </div>
                      </div>
                      </>   
          );
    }
}
 
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Dashboard);
