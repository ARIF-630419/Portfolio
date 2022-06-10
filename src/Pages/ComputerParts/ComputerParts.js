import React from 'react';
import image1 from '../../Image/cp1.PNG'
import image2 from '../../Image/cp2.PNG'
import image3 from '../../Image/cp3.PNG'

const ComputerParts = () => {
    return (
        <section>
            <h1 className='text-center text-4xl text-lime-500 pt-6 pb-5'>Computer Parts Manufacture Details</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                    <div className="card  bg-base-100 shadow-xl m-5">
                        <div className="card-body ">
                            <img src={image1} alt="imgage" className='h-50'></img>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl m-5">
                        <div className="card-body ">
                            <img src={image2} alt="imgage" className='h-50'></img>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl m-5">
                        <div className="card-body ">
                            <img src={image3} alt="imgage" className='h-50'></img>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl m-5">
                    <div className="card-body ">
                        <h2 className="text-xl  text-black"><span className='font-bold'>Project Name: Computer Parts Manufacture</span></h2>
                        <h2 className=" text-black"> <span className='font-bold'>Description: </span></h2>
                        <p>1. The user must login if he wants to purchase any parts.</p>
                        <p>2. If the user is logged in , some submenus will appear in the dashboard menu.Those are My Orders, Add Review and My Profile.</p>
                        <p>3. If admin will Log in he sees his dashboard. It has some menu are: my profile, make admin, add product, manage product and manage all orders.</p>
                        <p>4. When you go to the My order menu, the user has to order the parts see detailed information.</p>
                        <p>5. An admin can add or delete a part if he wents.</p>
                        <h2 className=" text-black"> <span className='font-bold'>Technology Used:
                        </span> React, daisyui, react-dom, axios, firebase, react-firebase-hooks, react-query,
                            react-router-dom, tailwindcss, jwt, JavaScript, express.js, MongoDB.</h2>
                    </div>
                </div>
                <div>
                    <li className='btn btn-primary uppercase text-white font-bold m-5'><a href='https://computer-parts-manufacture.web.app/' target="_blank">Live site</a></li>
                    <li className='btn btn-primary uppercase text-white font-bold m-5'><a href='https://github.com/ARIF-630419/ComputerpartsManufacture' target="_blank">client site</a></li>
                    <li className='btn btn-primary uppercase text-white font-bold m-5'><a href='https://github.com/ARIF-630419/ComputerPartsManufacuteServer' target="_blank">server site</a></li>
                </div>
            </div>

        </section>
    );
};

export default ComputerParts;