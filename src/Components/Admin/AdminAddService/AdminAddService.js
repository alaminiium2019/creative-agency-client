import React from 'react';
import Addservices from '../AddServices/Addservices';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const AdminAddService = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-4 p-5">
                <AdminSideBar></AdminSideBar>
            </div>
            <div className="col-md-8 p-5">
                <Addservices></Addservices>
            </div>
            </div>

        </div>
    );
};

export default  AdminAddService;