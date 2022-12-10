import React from 'react';

const Skills = () => {
    return (
        <div className='w-11/12 mx-auto mt-12'>
            <h1 className='text-3xl font-bold text-primary mb-4'>My Skills</h1>
            {/* expert */}
            <div className="card bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title font-bold text-black">Expert in</h2>
                    <p className='font-semibold text-black'>React, JavaScript, ES6, HTML, CSS, Tailwind CSS, Bootstrap, Node.js,
                        Express.js, C++</p>
                </div>
            </div>
            {/* comfortable */}
            <div className="card bg-primary text-primary-content mt-4">
                <div className="card-body">
                    <h2 className="card-title font-bold text-black">Comfortable with</h2>
                    <p className='font-semibold text-black'>MongoDB, JWT, Next.js, DSA, OOP</p>
                </div>
            </div>
            {/* familiar */}
            <div className="card bg-primary text-primary-content mt-4">
                <div className="card-body">
                    <h2 className="card-title font-bold text-black">Familiar with</h2>
                    <p className='font-semibold text-black'>Python, Java, MySQL</p>
                </div>
            </div>

        </div>
    );
};

export default Skills;