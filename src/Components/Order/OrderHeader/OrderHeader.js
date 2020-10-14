import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Logo from '../../../images/logos/logo.png';


const OrderHeader = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    return (
        <div className="d-flex pl-4 row">
            <div className="col-md-4 pl-5">
            <img src={Logo} style={{width:'150px'}}/>
            </div>
            <div className="col-md-4">
                <h5>Order</h5>
            </div>
            <div className="col-md-4 text-right">
                {
                    !loggedInUser.name? <p>Name</p>:loggedInUser.name
                }
    
            </div>

        </div>
    );
};

export default OrderHeader;