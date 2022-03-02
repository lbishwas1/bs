import React, { Component } from 'react';

import Style from './Settings.module.css';
import VerticalNav from '../dashboard/VerticalNav'

class Settings extends Component {
   

    render() { 
       
        return (
        <div className={Style.settingContent}>
        <VerticalNav/>
        {/* <div className={Style.change}>
            <div className={Style.changeCard}>
                <p>Edit Name</p>
            </div>
            <div className={Style.changeCard}>
                <p>Edit Location</p>
            </div>
            <div className={Style.changeCard}>
                <p>Edit DP</p>
            </div>
            <div className={Style.changeCard}>
                <p>Edit Phone</p>
            </div>
        </div> */}
        <div className={Style.change}>
            <input type="text" placeholder='Edit Name Here' />
            <input type="text" placeholder='Edit Location Here'/>
            <input type="number" placeholder='Edit Phone Number'/>
            <input type="text" placeholder='Confirm Password' />
            <button>Update</button>

        </div>
      
        </div>
          );
    }
}
 

export default Settings;