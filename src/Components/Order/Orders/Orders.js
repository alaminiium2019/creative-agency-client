import React from 'react';
import { useForm } from 'react-hook-form';
import OrderHeader from '../OrderHeader/OrderHeader';
import OrdersideBar from '../OrdersideBar/OrdersideBar';

const Orders = () => {
    //const { orid } = useParams()
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);

        fetch('https://creative-agency-server.herokuapp.com/addorders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Successfully send')
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
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="name" placeholder="your name / company's name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="email" placeholder="Your email address" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="course" placeholder="Course name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <textarea type="text" ref={register({ required: true })} name="description" placeholder="product details" className="form-control" />
                        </div>

                        <div className="form-group row">
                            <div className="col-12">
                                <input ref={register({ required: true })} className="form-control" name="price" placeholder="price" type="number" />

                            </div>
                        </div>

                        <div className="form-group">
                            <button type="submit" style={{ backgroundColor: '#111430' }} className="btn text-white pr-5 pl-5">Send</button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Orders;