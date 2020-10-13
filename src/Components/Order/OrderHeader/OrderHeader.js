import React from 'react';
import Logo from '../../../images/logos/logo.png';

const OrderHeader = () => {
    return (
        <div className="d-flex pl-4 row">
            <div className="col-md-4 pl-5">
            <img src={Logo} style={{width:'150px'}}/>
            </div>
            <div className="col-md-4">
                <h5>Order</h5>
            </div>
            <div className="col-md-4 text-right">
                <h5>Login user</h5>
            </div>

        </div>
    );
};

export default OrderHeader;