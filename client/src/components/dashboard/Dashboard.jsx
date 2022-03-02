import React, { Component } from 'react';

import Style from "./Dashboard.module.css"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAction";
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import VerticalNav from './VerticalNav';

class Dashboard extends Component {
    render() { 
        return ( 
        <>
         <VerticalNav />
       
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
