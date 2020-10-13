import React from 'react';
import Logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"><img src={Logo} style={{width:'150px'}}></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link mr-4" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4" href="#">Our Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4" href="#">Our Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4" href="#">Login</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;