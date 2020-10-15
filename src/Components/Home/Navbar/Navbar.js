import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Logo from '../../../images/logos/logo.png';

const Navbar = () => {

   const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img src={Logo} style={{width:'150px'}}></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" style={{fontSize:'18px',fontWeight:'bold'}}>
                        <li className="nav-item active">
                            <a className="nav-link mr-4" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">Our Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">Contact Us</a>
                        </li>
                        
                        <li className="nav-item">
                           <a className="nav-link mr-4" href="#" style={{backgroundColor:'#111430'}} className="btn text-white pr-5 pl-5"><Link to="/dashboard">Login</Link></a>
                           </li>
                        
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;