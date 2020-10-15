import React, { useEffect, useState } from 'react';
import OrderHeader from '../OrderHeader/OrderHeader';
import OrdersideBar from '../OrdersideBar/OrdersideBar';

const ServiceList = () => {
    const [serviceOrderlist, setServicesOrderList] = useState([]);


    useEffect(() => {
        fetch('https://creative-agency-server.herokuapp.com/orderServiceList')
            .then(res => res.json())
            .then(data => setServicesOrderList(data))
    }, [])



    return (
        <section className="container">
            <OrderHeader></OrderHeader>
            <div className="container-fluid row">
                <div className="col-md-4">
                    <OrdersideBar></OrdersideBar>
                </div>
                <div className="col-md-8 p-5 d-flex" style={{ backgroundColor: '#cef1f1' }}>
                    {
                        serviceOrderlist.map(orslist => <DisPlayCourse orslist={orslist}></DisPlayCourse>)
                    }

                </div>
            </div>
        </section>
    );


    function DisPlayCourse({ orslist }) {
        return (
            <div className="card col-md-4 m-1">
                <h3>{orslist.course}</h3>
                <p>{orslist.description}</p>
            </div>

        );

    }
};

export default ServiceList;