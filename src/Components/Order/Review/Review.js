import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import OrderHeader from '../OrderHeader/OrderHeader';
import OrdersideBar from '../OrdersideBar/OrdersideBar';

const Review = () => {

    const [file,setFile]=useState(null);
    const [info, setInfo] = useState({});
    
    


    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);

    }

    const handleSubmit =()=>{
        const formData = new FormData()
        formData.append('file',file)
        formData.append('name',info.name);
        formData.append('company',info.company);
        formData.append('description',info.description);


        fetch('http://localhost:5000/addreview',{
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            alert('Successfully done');
        })
        .catch(error => {
            console.log(error)
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
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text"  name="name" placeholder="your name" className="form-control" />
                            {/* {errors.name && <span className="text-danger">This field is required</span>} */}
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} type="text"  name="company" placeholder="Designation/Company's name" className="form-control" />
                            {/* {errors.name && <span className="text-danger">This field is required</span>} */}
                        </div>
                        <div className="form-group">
                            <textarea  onBlur={handleBlur} type="text"  name="description" placeholder="Description" className="form-control" />
                            {/* {errors.name && <span className="text-danger">This field is required</span>} */}
                        </div>

                        <div className="form-group">
                            <input onChange={handleFileChange} type="file"  placeholder="picture" className="form-control p-1" />
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

export default Review;