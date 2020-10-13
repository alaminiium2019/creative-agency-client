import React from 'react';
import OrderHeader from '../OrderHeader/OrderHeader';
import OrdersideBar from '../OrdersideBar/OrdersideBar';

const ServiceList = () => {
    return (
        <section className="container">
            <OrderHeader></OrderHeader>    
            <div className="container-fluid row">
                <div className="col-md-4">
                    <OrdersideBar></OrdersideBar>                
                </div>
                <div className="col-md-8 p-5" style={{ backgroundColor: '#cef1f1' }}>                      
  
                </div>
            </div>
        </section>
    );
};

export default ServiceList;