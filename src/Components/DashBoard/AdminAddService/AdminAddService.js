import React from 'react';
import OrderHeader from '../../Order/OrderHeader/OrderHeader';
import OrdersideBar from '../../Order/OrdersideBar/OrdersideBar';
import Addservices from '../../DashBoard/AddServices/Addservices';

const AdminAddService = () => {
    return (
        <div className="container pt-3">
            <OrderHeader></OrderHeader>
            <div className="row">
            <div className="col-md-4">
                <OrdersideBar></OrdersideBar>
            </div>
            <div className="col-md-8 p-5">
                <Addservices></Addservices>
                
            </div>
            </div>

        </div>
    );
};

export default  AdminAddService;