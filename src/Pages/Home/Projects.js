import React from 'react';
import { useNavigate } from 'react-router-dom';
import project1 from '../../Image/cp1.jpg'
import project2 from '../../Image/cw1.jpg'
import project3 from '../../Image/ds1.jpg'


const Projects = () => {
    const navigate1 = useNavigate();
    const navigate2 = useNavigate();
    const navigate3 = useNavigate();
    const navigateToDetails1 = () => {
        navigate1("/ComputerPartsManufacture");
    }
    const navigateToDetails2 = () => {
        navigate2("/ComputerWarehouse");
    }
    const navigateToDetails3 = () => {
        navigate3("/DoctorServiceProvider");
    }
    return (
        <section>
            <h1 className='text-center text-4xl text-lime-500 pt-12 pb-5'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <img src={project1} alt="imgage" className='h-44'></img>
                        <h2 className="text-xl  text-black"><span className='font-bold'>Project Name: Computer Parts Manufacture</span></h2>
                        <h2 className=" text-black"> <span className='font-bold'>Description: </span></h2>
                        <p>1. The user must login if he wants to purchase any parts.</p>
                        <p>2. If the user is logged in , some submenus will appear in the dashboard menu.Those are My Orders, Add Review and My Profile.</p>
                    </div>
                    <div className='w-2/4 mx-auto'>
                        <button className="btn btn-primary uppercase text-white font-bold mb-4 " onClick={() => navigateToDetails1()}>Read More</button>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <img src={project2} alt="imgage" className='h-44'></img>
                        <h2 className="text-xl  text-black"><span className='font-bold'>Project Name: Computer Warehouse </span></h2>
                        <h2 className=" text-black"> <span className='font-bold'>Description: </span></h2>
                        <p>1. If the user is logged in, Navbar will show some menus. These are Manage Item,Add Item, Home, Blogs, and My Items.</p>
                        <p>2. If the user is not logged in, Navbar will show some menus. These are Home and Blogs</p>
                    </div>
                    <div className='w-2/4 mx-auto'>
                        <button className="btn btn-primary uppercase text-white font-bold mb-4 " onClick={() => navigateToDetails2()}>Read More</button>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <img src={project3} alt="imgage" className='h-44'></img>
                        <h2 className="text-xl  text-black"><span className='font-bold'>Project Name: Doctor Service Provider</span></h2>
                        <h2 className=" text-black"> <span className='font-bold'>Description: </span></h2>
                        <p>1. The user must login if he wants to checkout page.</p>
                        <p>2. If the user goes to the about menu, he will be able to see his profile.</p>
                    </div>
                    <div className='w-2/4 mx-auto'>
                        <button className="btn btn-primary uppercase text-white font-bold mb-4 " onClick={() => navigateToDetails3()}>Read More</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Projects;