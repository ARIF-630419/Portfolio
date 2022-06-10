import React from 'react';
import image1 from '../../Image/ds1.PNG'
import image2 from '../../Image/ds2.PNG'
import image3 from '../../Image/ds3.PNG'

const DoctorService = () => {
    return (
        <section>
            <h1 className='text-center text-4xl text-lime-500 pt-6 pb-5'>Doctor Service Provider</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                    <div className="card  bg-base-100 shadow-xl m-5">
                        <div className="card-body ">
                            <img src={image1} alt="imgage" className='h-50'></img>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl m-5">
                        <div className="card-body ">
                            <img src={image2} alt="imgage" className='h-50'></img>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl m-5">
                        <div className="card-body ">
                            <img src={image3} alt="imgage" className='h-50'></img>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl m-5">
                    <div className="card-body ">
                        <h2 className="text-xl  text-black"><span className='font-bold'>Project Name: Doctor Service Provider</span></h2>
                        <h2 className=" text-black"> <span className='font-bold'>Description: </span></h2>
                        <p>1. The user must login if he wants to checkout page</p>
                        <p>2. If the user goes to the about menu, he will be able to see his profile</p>
                        <p>3. If the user goes to the blogs menu, he will see some questions and answers</p>
                        <p>4. This website has been authentication through firebase.</p>
                        <p>5. React toastify has been used to show error on this website.</p>
                        <h2 className=" text-black"> <span className='font-bold'>Technology Used:
                        </span> React, Bootstrap5, react-dom, react-bootstrap, firebase, react-firebase-hooks, react-query, react-router-dom, JavaScript.</h2>
                    </div>
                </div>
                <div>
                    <li className='btn btn-primary uppercase text-white font-bold m-5'><a href='https://doctor-service-provider-3bfa2.web.app/' target="_blank">Live site</a></li>
                    <li className='btn btn-primary uppercase text-white font-bold m-5'><a href='https://github.com/ARIF-630419/Doctor-Service-provider' target="_blank">client site</a></li>
                </div>
            </div>

        </section>
    );
};

export default DoctorService;