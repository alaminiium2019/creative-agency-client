import React, { useState } from 'react';

const Addservices = () => {
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
        formData.append('details',info.details);


        fetch('http://localhost:5000/adminAddService',{
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (        
            <div style={{ backgroundColor: '#cef1f1'}} className="p-4">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h6>Service Title:</h6><input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Title" />
                    </div>
                    <div className="form-group">
                        <h6>Icon:</h6><input onChange={handleFileChange} type="file" className="form-control p-1" placeholder="Picture" />
                    </div>
                    <div className="form-group">
                        <h6>Description: </h6>
                        <textarea name="" onBlur={handleBlur} className="form-control" id="" cols="10" rows="5" name="details" placeholder="Your Message"></textarea>
                    </div>
                    <div className="text-right">
                        <button type="submit" style={{ backgroundColor: '#111430' }} className="btn text-white pr-5 pl-5">Submit</button>
                    </div>
                </form>
            </div>
        
    );
};

export default Addservices;