import React from 'react';
import img1 from '../../projects-images/project1.PNG';
import img2 from '../../projects-images/project2.PNG';
import img3 from '../../projects-images/project3.PNG';

const Projects = () => {
    return (
        <div className='w-11/12 mx-auto mt-12'>
            <h1 className='text-3xl font-bold text-primary'>My Projects</h1>
            <div className='mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {/* project 1  */}
                <div className="hero rounded-xl overflow-hidden shadow-xl" style={{ backgroundImage: `url(${img1})` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="card glass mt-8 mb-6 w-3/4">
                        <figure><img src={img1} alt="car!" /></figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-primary text-2xl font-bold">Guitar Square</h2>
                            <p>A second-hand guitar reselling site</p>
                            <button className="btn btn-primary text-black mt-2">View project details</button>
                        </div>
                    </div>
                </div>
                {/* project 2  */}
                <div className="hero rounded-xl overflow-hidden shadow-xl" style={{ backgroundImage: `url(${img2})` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="card glass mt-8 mb-6 w-3/4">
                        <figure><img src={img2} alt="car!" /></figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-primary text-2xl font-bold">NVIS</h2>
                            <p>A visa and immigration services site</p>
                            <button className="btn btn-primary text-black mt-2">View project details</button>
                        </div>
                    </div>
                </div>
                {/* project 3  */}
                <div className="hero rounded-xl overflow-hidden shadow-xl" style={{ backgroundImage: `url(${img3})` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="card glass mt-8 mb-6 w-3/4">
                        <figure><img src={img3} alt="car!" /></figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-primary text-2xl font-bold">Into-Dev</h2>
                            <p>An online educational course's site</p>
                            <button className="btn btn-primary text-black mt-2">View project details</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;