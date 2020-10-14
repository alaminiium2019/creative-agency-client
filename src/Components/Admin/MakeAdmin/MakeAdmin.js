import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const MakeAdmin = () => {
    return (
        <div className="container pt-5">
        <div className="row">
            <div className="col-md-4">
                <AdminSideBar></AdminSideBar>

            </div>
            <div className="col-md-8">
                <h1>Something will behere </h1>

            </div>
        </div>
        </div>

    );
};

export default MakeAdmin;