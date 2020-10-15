import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import OrderHeader from '../../Order/OrderHeader/OrderHeader';
import OrdersideBar from '../../Order/OrdersideBar/OrdersideBar';


const MakeAdmin = () => {
    //make admin
    const [userAdmin, setUserAdmin] = useState(null);
    const [showAdmin, setShowAdmin] = useState(false);
    const history = useHistory();

    const handleChange = (e) =>{
        setUserAdmin({[e.target.name]: e.target.value});
    }
    const handleAdmin = (e) => {
        fetch('http://localhost:5000/addUserAdmin',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(userAdmin)
        })
        .then(res => {
            setShowAdmin(res);
            // if(res.status === 200){
            //     setShowAdmin(true);
            //}
            console.log(res);
            alert('Admin succesfully created')
        })
        .catch(err => {
            console.log(err);
        })
    }



    return (
        <div className="container pt-5">
            <OrderHeader></OrderHeader>
            <div className="row">
                <div className="col-md-4">
                    <OrdersideBar></OrdersideBar>

                </div>
                <div className="col-md-8 mt-5">
                    <form onSubmit={handleAdmin}>
                    <label><h5>Email:</h5></label>
                    <div className="form-group d-flex">
                        <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="user@gmail.com" />
                        <button style={{ borderRadius: '5px' }} className="btn btn-primary text-white pr-3 pl-3"> Submit </button>
                    </div>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default MakeAdmin;