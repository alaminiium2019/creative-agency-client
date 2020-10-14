import React from 'react';
import { useForm } from 'react-hook-form';
import OrderHeader from '../OrderHeader/OrderHeader';
import OrdersideBar from '../OrdersideBar/OrdersideBar';

const Review = () => {

    const { register, handleSubmit, errors } = useForm();


    const onSubmit = data => {
        console.log(data);

        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Successfully review')
                }
            })
    }



    return (

        <section className="container">
            <OrderHeader></OrderHeader>
            <div className="container-fluid row">
                <div className="col-md-4">
                    <OrdersideBar></OrdersideBar>
                </div>
                <div className="col-md-8 p-5" style={{ backgroundColor: '#cef1f1' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="name" placeholder="your name" className="form-control" />
                            {/* {errors.name && <span className="text-danger">This field is required</span>} */}
                        </div>

                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="comname" placeholder="Company's name" className="form-control" />
                            {/* {errors.name && <span className="text-danger">This field is required</span>} */}
                        </div>
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="designation" placeholder="Designation" className="form-control" />
                            {/* {errors.name && <span className="text-danger">This field is required</span>} */}
                        </div>
                        <div className="form-group">
                            <textarea type="text" ref={register({ required: true })} name="Description" placeholder="Description" className="form-control" />
                            {/* {errors.name && <span className="text-danger">This field is required</span>} */}
                        </div>

                        {/* <div className="col-6">
                                    <input type="file" ref={register({ required: false })} name="photo" placeholder="picture" className="form-control" />
                                </div> */}

                        <div className="form-group">
                            <button type="submit" style={{ backgroundColor: '#111430' }} className="btn text-white pr-5 pl-5">Send</button>
                        </div>


                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;