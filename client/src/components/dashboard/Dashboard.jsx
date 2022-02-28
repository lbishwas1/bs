import React, { Component } from 'react';

import Style from "./Dashboard.module.css"
import user from '../../img/admin.JPG';
import Document from '.././dashboardpages/Documents'
import History from '.././dashboardpages/History'
import MyBooks from '.././dashboardpages/MyBooks'
import Offers from '.././dashboardpages/Offers'
import Settings from '.././dashboardpages/Settings'
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
                        <img src={user} className={Style.pp} alt="user"/></div>  
                        <p className={Style.username}>@lbishwas169</p>
                        <div>
                        
            <button
              onClick={this.onLogoutClick}
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
