import { faAddressBook, faSignOutAlt, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@material-ui/core';
import React from 'react';
import './AdminSideBar.css';

const AdminSideBar = () => {
    return (
        <div>
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "50vh" }}>
            <ul className="list-unstyled">
                <li>
                    <a href="/adminServiceList" className="text-white" >
                        <FontAwesomeIcon icon={faTaxi} /> <span >Service list</span>
                    </a>
                </li>
                <li>
                    <a href="/adminAddService" className="text-white">
                        <FontAwesomeIcon icon={faAddressBook} /> <span>Add service</span>
                    </a>
                </li>
                <li>                    
                    <a href="/makeAdmin" className="text-white">
                        <FontAwesomeIcon icon={faAddressBook} /> <span>Make Admin</span>
                    </a>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    </div>

    );
};

export default AdminSideBar;