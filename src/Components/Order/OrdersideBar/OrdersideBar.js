import { faAddressBook, faCommentDots, faPlus, faShoppingCart, faSignOutAlt, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './OrdersideBar.css';

const OrdersideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "90vh" }}>
                <ul className="list-unstyled pl-2">
                    {loggedInUser.isUserAdmin ?
                        <div>
                            <li>
                                <a href="/adminServiceList" className="text-white" >
                                    <FontAwesomeIcon icon={faTaxi} /> <span >Service List</span>
                                </a>
                            </li>
                            <li>
                                <a href="/adminAddService" className="text-white" >
                                    <FontAwesomeIcon icon={faPlus} /> <span >Add Service</span>
                                </a>
                            </li>
                            <li>
                                <a href="/makeAdmin" className="text-white" >
                                    <FontAwesomeIcon icon={faAddressBook} /> <span >Make Admin</span>
                                </a>
                            </li>
                        </div> :
                        <div>
                            <li>
                                <a href="/userOrders" className="text-white" >
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span >Order</span>
                                </a>
                            </li>
                            <li>
                                <a href="/userServiceList" className="text-white">
                                    <FontAwesomeIcon icon={faTaxi} /> <span>Service list</span>
                                </a>
                            </li>
                            <li>
                                <a href="/userReview" className="text-white">
                                    <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                                </a>
                            </li>
                        </div>
                    }
                </ul>

                <div>
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </div>
            </div>
        </div>
    );
};
//change

export default OrdersideBar;