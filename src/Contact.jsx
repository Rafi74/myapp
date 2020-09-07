import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        mag: '',
    });

    const InputEvent = (e) => {
        const {name, value} = e.target;

        setData ((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.fullname}. My mobile number is ${data.phone} and my email is ${data.email}. I want to say ${data.msg}`
        )
    };

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Contact US </h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className='form-label'>Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className='form-lable'>Phone</label>
                                <input type="type" className="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={InputEvent} placeholder="Mobile"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className='form-lable'>Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={InputEvent} placeholder="Enter Your Email"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className='form-lable'>Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name='msg' value={data.msg} onChange={InputEvent} rows="3"></textarea>
                            </div>
                            <div className='col-12'>
                                <button className='btn btn-outline-primary' type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;