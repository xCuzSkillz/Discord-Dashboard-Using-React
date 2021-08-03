import '../Css/Sidebar.css';
import '../Css/responsivefixes.css';
import '../Css/Navbar.css'
import React, { useState } from 'react'
import Select from 'react-select'
import UserAvatar from '../Images/avataruser.png' 
import Usaflag from '../Images/united-states.svg'
import LogoNav from '../Images/navbarlogo.png';



const Sidebar = () => {

  const SidebarHid = 'SidebarHid';

  const [openSidebar, setOpenSidebar] = useState(false);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#fff',
      backgroundColor: state.isSelected ? '#383941' : '#383941'
    })
    }

    const options = [
        { value: 'ServerName1', label: 'ServerName1'},
        { value: 'ServerName2', label: 'ServerName2'},
        { value: 'ServerName3', label: 'ServerName3'}
      ]

    return (  
      <div className="sides-container">
        <nav className="navbar sticky navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <a className="navbar-brand" href="#"><img className="rounded logo-nav" width="30px" height="30px" src={ LogoNav }></img> <span className="navbar-title">Bot Name</span></a>
                <button onClick={ () => setOpenSidebar(!openSidebar) }  className="navbar-toggler" type="button"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="toggler-icon"><i class="fal fa-bars text-light"></i></span>
                    </button>
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                        </ul>
                        <form className="d-flex links-navbar">
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li> 
                            <li className="nav-item">
                              <a className="nav-link active text-light" aria-current="page" href="#">Support</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link active text-light" aria-current="page" href="#">Commands</a>
                            </li>
                            <li className="nav-item">
                            <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <img src={ Usaflag } className="drop-flag"></img>  &nbsp; English
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item text-light" href="#">Action</a></li>
                              <li><a class="dropdown-item text-light" href="#">Another</a></li>
                              <li><a class="dropdown-item text-light" href="#">Something</a></li>
                            </ul>
                          </div>
                            </li>
                        </ul>
                     </form>
                 </div>
            </div>
        </nav>
        <aside className={`sidebar${openSidebar ? " open-sidebar" : ""}`} id={ SidebarHid }>
          <div className="server-info">
              <center>
               <Select options={options} classNamePrefix="react-select" className="mt-5 select-server" styles={ customStyles }/>
             </center>
          </div>
          <div className="links-pages mt-4">
            <ul>
                <span className="section-title">Genreal</span>
                <br></br>
                <a href="" className="page-link-2"><li><span className="icon-section rounded-circle"><i class="far fa-terminal"></i></span> &nbsp;&nbsp;Bot Settings</li></a>
            </ul>
            <ul>
                <span className="section-title">Commands</span>
                <br></br>
                <a href="" className="page-link-2"><li><span className="icon-section rounded-circle fix-p"><i class="far fa-list-ul"></i></span> &nbsp;&nbsp;Commands Settings</li></a>
            </ul>
            <ul>
                <span className="section-title">Logging</span>
                <br></br>
                <a href="" className="page-link-2"><li><span className="icon-section rounded-circle"><i class="far fa-boxes"></i></span> &nbsp;&nbsp;Logs Manager</li></a>
            </ul>
            <ul>
                <span className="section-title">Protection</span>
                <br></br>
                <a href="" className="page-link-2"><li><span className="icon-section rounded-circle fix-p"><i class="far fa-shield-check"></i></span> &nbsp;&nbsp;Protection Manager</li></a>
            </ul>
            <div className="user-settings">
             <div className="user-card p-3">
                <img src={ UserAvatar } width="45px" height="45px" className="rounded-circle"></img>
                <span className="user-name position-relative">xCuzSkillz#9899</span>
                <div className="btn-group dropup">
                <button type="button" class="btn btn-dots" data-bs-toggle="dropdown" aria-expanded="false">
                 <i className="far fa-ellipsis-v text-light"></i>
                </button>
                <ul className="dropdown-menu drop-down-menue-user p-3">
                  <a href="#" className="user-settings-links text-light">Select Server</a>
                  <a href="#" className="user-settings-links logout-link d-block">&nbsp;Logout</a>
                </ul>
              </div>
             </div>
          </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          </div>
        </aside>
       </div>
    );
}
 
export default Sidebar;
