import React from 'react';
import OrderHeader from '../../Order/OrderHeader/OrderHeader';
import OrdersideBar from '../../Order/OrdersideBar/OrdersideBar';
import ServiceList from '../../Order/ServiceList/ServiceList';
import AdminServiceList from '../AdminServiceList/AdminServiceList';

const DashBoard = () => {
    return (
        <div className="container mt-3">
            <div>
                <OrderHeader></OrderHeader>
                <div className="d-flex row">
                    <div className="col-md-4">
                        <OrdersideBar></OrdersideBar>
                    </div>
                    <div className="col-md-8"><h3></h3></div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;