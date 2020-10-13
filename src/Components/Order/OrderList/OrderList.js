import React from 'react';
import OrderHeader from '../OrderHeader/OrderHeader';
import OrdersideBar from '../OrdersideBar/OrdersideBar';

const OrderList = () => {
    return (
        <section className="container">
            <OrderHeader></OrderHeader>     
        
            <div className="container-fluid row">
                <div className="col-md-4">
                    <OrdersideBar></OrdersideBar>
                </div>

                <div className="col-md-8 p-5" style={{ backgroundColor: '#cef1f1' }}>
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="your name / company's name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Your email address" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Graphics Design" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Project Details" />
                        </div>

                        <div className="form-group d-flex">
                            <input type="text" className="form-control" name="name" placeholder="Price" />
                            <input type="file" className="form-control" placeholder="Picture" />
                        </div>
                        <button type="submit" style={{ backgroundColor: '#111430' }} className="btn text-white pr-5 pl-5">Send</button>
                    </form>
                </div>
            </div>
            
        </section>
    );
};

export default OrderList;