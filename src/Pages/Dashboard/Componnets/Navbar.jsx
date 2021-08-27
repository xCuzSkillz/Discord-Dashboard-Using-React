import '../Css/Navbar.css'
import Usaflag from '../Images/united-states.svg'
import LogoNav from '../Images/navbarlogo.png';


const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <a className="navbar-brand" href="#"><img className="rounded logo-nav" width="25px" height="30px" src={ LogoNav }></img> <span className="navbar-title">Bot Name</span></a>
                <button className="navbar-toggler" type="button"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
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
     );
}
 
export default Navbar;