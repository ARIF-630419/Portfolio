import React from 'react';
import image1 from '../../Image/cw1.PNG'
import image2 from '../../Image/cw2.PNG'
import image3 from '../../Image/cw3.PNG'
const ComputerWarehouse = () => {
    return (
        <section>
            <h1 className='text-center text-4xl text-lime-500 pt-6 pb-5'>Computer Warehouse Details</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
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
                        <h2 className="text-xl  text-black"><span className='font-bold'>Project Name: Computer Warehouse</span></h2>
                        <h2 className=" text-black"> <span className='font-bold'>Description: </span></h2>
                        <p>1. If the user is logged in, Navbar will show some menus. These are Manage Item, Add Item, Home, Blogs, and My Items.</p>
                        <p>2.  If the user is not logged in, Navbar will show some menus. These are Home and Blogs.</p>
                        <p>3. The user can delete any item by going to manage item menu.
                        </p>
                        <p>4. The user add any item to the add item menu.</p>
                        <p>5. When users go to my items menu, they will be able to see all the added items.</p>
                        <h2 className=" text-black"> <span className='font-bold'>Technology Used:
                        </span> React, Bootstrap5, react-dom, firebase, react-firebase-hooks, react-query, reactrouter-dom, jwt, JavaScript, express.js, MongoDB.</h2>
                    </div>
                </div>
                <div>
                    <li className='btn btn-primary uppercase text-white font-bold m-5'><a href='https://computer-warehouse-client.web.app/' target="_blank">Live site</a></li>
                    <li className='btn btn-primary uppercase text-white font-bold m-5'><a href='https://github.com/ARIF-630419/ComputerWarehouse' target="_blank">client site</a></li>
                    <li className='btn btn-primary uppercase text-white font-bold m-5'><a href='https://github.com/ARIF-630419/ComputerWarehouseServer' target="_blank">server site</a></li>
                </div>
            </div>

        </section>
    );
};

export default ComputerWarehouse;