
import { faPeriscope } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faCommentDots, faPeopleArrows, faPeopleCarry, faPersonBooth, faPlus, faShoppingCart, faSignOutAlt, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import './OrdersideBar.css';

const OrdersideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])


    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "90vh" }}>
                <ul className="list-unstyled pl-2">
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