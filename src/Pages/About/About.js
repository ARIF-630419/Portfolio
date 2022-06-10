import React from 'react';
import pic from '../../Image/ariful.png';

const About = () => {
    return (
        <div class="card card-side bg-base-200 shadow-xl m-5">
            <figure><img src={pic} alt="picture" className='rounded-xl m-2' /></figure>
            <div class="card-body">
                <h2 class="card-title text-2xl">Md. Ariful Islam</h2>
                <h2 class="card-title text-xl">Junior React Developer</h2>
                <h2 class="card-title text-xl">B.Sc. in Computer Science and Engineering</h2>
                <h2 class="card-title text-xl">Daffodil International University</h2>
                <p className='text-justify'>I am hardworking and determined individual. I am sincere with my work and try my best to be organized in what I do. Being a keen listener and a quick learner, I can very easily adjust myself to any new environment and get accustomed to my work.</p>
                <p className='text-justify'>I like programming. So I try to learn a programming language and adapt to advanced technology. My hobby I will be a good programmer.</p>

            </div>
        </div>
    );
};

export default About;