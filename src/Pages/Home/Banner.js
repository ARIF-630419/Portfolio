import React from 'react';

const Banner = () => {
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 bg-green-200'>
                <div className="card  shadow-xl m-3">
                    <div className="card-body ">
                        <h2 className="text-2xl  text-black"><span className='font-bold'>Hi,</span>{ }</h2>
                        <h2 className="text-2xl  text-black"><span className='font-bold'>I'm Md. Ariful Islam</span>{ }</h2>
                        <h2 className="text-xl  text-black"><span className='font-bold'>Web Developer</span>{ }</h2>
                        <p className="  text-black text-justify"> <span className=''>I build interative website that run across platform and devices.</span> { }</p>
                    </div>
                </div>
                <div className="card shadow-xl m-3">
                    <div className="card-body ">
                        <img src="https://i.ibb.co/Cszk8nW/Reading-glasses-bro-1.png" alt="imgage" className='h-44'></img>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Banner;