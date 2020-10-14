import React, { useEffect, useState } from 'react';
import OrderHeader from '../OrderHeader/OrderHeader';
import OrdersideBar from '../OrdersideBar/OrdersideBar';

const ServiceList = () => {
    const [serviceOrderlist,setServicesOrderList]=useState([]);
    

    useEffect (() =>{
        fetch('http://localhost:5000/orderServiceList')
        .then(res => res.json())
        .then(data => setServicesOrderList(data))
    },[])



    return (
        <section className="container">
            <OrderHeader></OrderHeader>    
            <div className="container-fluid row">
                <div className="col-md-4">
                    <OrdersideBar></OrdersideBar>                
                </div>
                <div className="col-md-8 p-5" style={{ backgroundColor: '#cef1f1' }}> 
                {
                    serviceOrderlist.map(orslist => <li orslist={orslist}>{orslist.name}</li>)
                }                                    
  
                </div>
            </div>
        </section>
    );
};

export default ServiceList;