import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Logo from '../../../images/logos/logo.png';


const OrderHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container d-flex row pb-2">
            <div className="col-md-5">
                <img src={Logo} style={{ width: '150px' }} />
            </div>
            <div className="col-md-5">
                <h5></h5>
            </div>
            <div className="col-md-2 text-right">
                {
                    !loggedInUser.name ? <h5>Name</h5> : loggedInUser.name
                }

            </div>

        </div>
    );
};

export default OrderHeader;