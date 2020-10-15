import React, { useEffect, useState } from 'react';
import OrderHeader from '../../Order/OrderHeader/OrderHeader';
import OrdersideBar from '../../Order/OrdersideBar/OrdersideBar';
import ServiceList from '../../Order/ServiceList/ServiceList';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const AdminServiceList = () => {
    const [servicesList,setServicesList]=useState([]);

    useEffect (() =>{
        fetch('http://localhost:5000/adminServiceList')
        .then(res => res.json())
        .then(data => setServicesList(data))
    },[])

    return (
        <div className="container pt-5">
            <OrderHeader></OrderHeader>
            <div className="row">
                <div className="col-md-4">
                    <OrdersideBar></OrdersideBar>
                </div>
                <div className="col-md-8" style={{border:'1px solid red'}}>
                    <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email ID</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Project Details</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  servicesList.map((service, index) =>                         
                    <tr>
                        
                        <td>{service.name}</td>
                        <td>{service.email}</td>
                        <td>{service.course}</td>
                        <td>{service.description}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>


                </div>
            </div>
        </div>
    );
};

export default AdminServiceList;