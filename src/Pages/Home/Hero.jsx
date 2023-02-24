import React from 'react';

const Hero = () => {
    return (
        <div className='h-[500px] flex justify-center items-center text-center'>
            <div>
                <h1 className='text-5xl font-medium'>The Happy Hippies Show</h1>
                <p className='my-5 text-xl w-4/6 mx-auto'>We are artists collaborating, working with agencies, media companies and brands making entertainment content.</p>
                <button className='w-fit py-3 px-10 border rounded-full active:scale-95 duration-200 text-white bg-slate-900 border-slate-900 font-medium hover:shadow-md hover:shadow-slate-900/50 text-xl'>Watch Now</button>
            </div>
        </div>
    );
};

export default Hero;