import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-96 md:h-[500px] lg:h-[500px]" style={{ backgroundImage: `url("https://i.ibb.co/vmD9wtk/MEAN-Stack-vs-MERN-Stack.jpg")` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content flex flex-col-reverse lg:flex-row">
                <div className='w-1/3 md:w-1/4 lg:w-1/4'>
                    <div className="avatar">
                        <div className="w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/kHSmzJ8/New-Photo.jpg" alt='' />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 flex flex-col items-end justify-center">
                    <h1 className="mb-0.5 lg:mb-5 text-xl lg:text-5xl font-bold text-white text-end">Hello, I'm Saleh</h1>
                    <h3 className="mb-0.5 lg:mb-5 text-lg lg:text-3xl font-bold text-white text-end">A Front-End Developer</h3>
                    <p className="mb-1 lg:mb-5 text-xs md:text-base text-white text-end w-full md:w-2/3">I'm Md. Saleh Zohur Bhuiyan Niloy, dedicated and hardworking junior developer with a passion for developing scalable web applications. Looking for a challenging and responsible role as a Junior Front-End Developer to put my skills to use.</p>
                    <a href='https://drive.google.com/file/d/1yX3vE_WdgFXkPVyclfWv2wO18494GZie/view?usp=share_link' className="btn btn-primary text-black" target='blank'>My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;