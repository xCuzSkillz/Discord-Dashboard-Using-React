import '../Css/Sidebar.css';
import '../Css/responsivefixes.css';
import '../Css/Navbar.css'
import '../Css/settings.css'
import '../Css/containers.css'
import '../Css/inputs.css'
import Sidebar from './Sidebar';
import React, { useState } from 'react'
import UserAvatar from '../Images/avataruser.png' 
import Usaflag from '../Images/united-states.svg'
import LogoNav from '../Images/navbarlogo.png';
import Select, { components } from "react-select";
import { ReactComponent as EnglishIcon } from "../Images/united-states.svg";


const options = [
    { value: "Arabic", label: "العربية"},
    { value: "English", label: "English", icon: <EnglishIcon /> },
    { value: "French", label: "Français"},
    { value: "Spanish", label: "Español"},
    { value: "Turkish", label: "Türkçe"},
  ];



const Settings = () => {

  
  const myValue = ({ data }) => (
    <div className="my-select">
        <div className="my-select_my-value">
            { data.icon && <span className="my-select_my-icon">{ data.icon }</span> }
            <span>{ data.label }</span>
        </div>
    </div>
);

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected ? '#fff' : '#fff',
          backgroundColor: state.isSelected ? '#383941' : '#383941'
        })
        }
    
    return ( 
        <div className="settings-container containers-03IM">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="container-title text-light text-start">Server Settings</h3>
                <p className="container-title-descreption text-start">Customize your server settings</p>
              </div>
              <div className="col-lg-6">
                <button className="btn btn-primary float-end mt-2">Restore Default Settings</button>
              </div>
            </div>
            <div className="custom-card prefix-card mt-3 p-4 my-2  rounded">
              <h4 className="text-start feature-title"> Server Prefix</h4>
              <div className="row">
                <div className="col-lg-6 my-1">
                  <input type="text"  className="float-start w-100 main-input text-light" placeholder="Your Prefix"></input>
                </div>
                <div className="col-lg-6 my-1">
                  <button className="btn btn-primary float-start mt-1 pt-2">Random Prefix</button>
                </div>
              </div>
            </div>   
            <div className="custom-card prefix-card p-4 mt-3 my-2  rounded">
              <h4 className="text-start feature-title"> Bot Language</h4>
              <p className="feature-title-descreption text-start">Change the language the bot respondes with in your server</p>
              <div className="row">
                <div className="col-lg-6 my-1">
                <Select classNamePrefix="react-select" className="text-start text-light" defaultValue={options[0]} options={options} components={ {SingleValue: myValue } } styles={customStyles}/>
                </div>
                <div className="col-lg-6 my-1">
                </div>
              </div>
            </div> 
        </div>
     );
}
 
export default Settings;