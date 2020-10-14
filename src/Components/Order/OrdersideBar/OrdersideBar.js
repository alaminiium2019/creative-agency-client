
import { faCommentDots, faShoppingCart, faSignOutAlt, faTaxi } from '@fortawesome/free-solid-svg-icons';
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
                   {isDoctor && 
                    <div><li>
                        <a href="/review" className="text-white">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Admin-1</span>
                        </a>
                    </li>
                    <li>
                        <a href="/review" className="text-white">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Admin-2</span>
                        </a>
                    </li>
                    <li>
                        <a href="/review" className="text-white">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Admin-3</span>
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