
import {  faCommentDots,faShoppingCart, faSignOutAlt, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './OrdersideBar.css';

const OrdersideBar = () => {
    return (
        <div className="container">
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"50vh"}}>
           <ul className="list-unstyled">
                <li>
                    <Link to="/orderlist" className="text-white" >
                        <FontAwesomeIcon icon={faShoppingCart} /> <span >Order</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/servicelist" className="text-white">
                        <FontAwesomeIcon icon={faTaxi} /> <span>Service list</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
        </div>
    );
};

export default OrdersideBar;