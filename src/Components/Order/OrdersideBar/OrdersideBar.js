
import { faCommentDots, faShoppingCart, faSignOutAlt, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './OrdersideBar.css';

const OrdersideBar = () => {
    
    return (
        <div className="container">
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "50vh" }}>
                <ul className="list-unstyled">
                    <li>
                        <a href="/orders" className="text-white" >
                            <FontAwesomeIcon icon={faShoppingCart} /> <span >Order</span>
                        </a>
                    </li>
                    <li>
                        <a href="/orderserviceList" className="text-white">
                            <FontAwesomeIcon icon={faTaxi} /> <span>Service list</span>
                        </a>
                    </li>
                    <li>
                        <a href="/review" className="text-white">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
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

export default OrdersideBar;