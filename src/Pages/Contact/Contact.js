import React from 'react';

const Contact = () => {
    return (
        <section>
            <h1 className='text-center text-4xl text-lime-500 pt-8 pb-5'>Contact Us</h1>
            <div className='w-3/4 mx-auto m-10'>
                <h2 className='m-3 text-2xl'>Let's Talk !!</h2>
                <h2 className='m-3 text-xl'>If you have any other requests or questions, don't hesitate to contact me using this form.</h2>
                <form action="https://formspree.io/f/mvolyroa" method="POST">
                    <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered input-primary w-full mb-3 " />
                    <input type="email" placeholder="Enter your Email" name='email' className="input input-bordered input-primary w-full mb-3 " />
                    <textarea className="textarea textarea-primary w-full  mb-3" name='message' placeholder="Enter your valuable Message"></textarea>
                    <input className='btn btn-primary uppercase text-white font-bold mb-4 w-1/4  mx-auto ' type="submit" value="Send" />
                </form>
            </div>
        </section>
    );
};

export default Contact;