import React from 'react';
import OrderHeader from '../../Order/OrderHeader/OrderHeader';
import OrdersideBar from '../../Order/OrdersideBar/OrdersideBar';


const MakeAdmin = () => {
    return (
        <div className="container pt-5">
            <OrderHeader></OrderHeader>
        <div className="row">
            <div className="col-md-4">
                <OrdersideBar></OrdersideBar>       

            </div>
            <div className="col-md-8 mt-5">
                <label><h5>Email:</h5></label>                
                <div className="form-group d-flex">
                <input type="email" className="form-control" placeholder="user@gmail.com"/>
                                <button style={{ borderRadius: '5px' }} className="btn btn-primary text-white pr-3 pl-3"> Submit </button>
                            </div>

            </div>
        </div>
        </div>

    );
};

export default MakeAdmin;