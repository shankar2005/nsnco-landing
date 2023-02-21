import React from 'react';

const Events = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='bg-slate-900 text-white p-16 flex flex-col justify-center'>
                <h3 className='text-3xl font-medium mb-3'>ADBHUT.IO</h3>
                <ul className='list-disc ml-5 text-lg font-thin'>
                    <li>We Stand for Ad+</li>
                    <li>Our Ad+ contributes to society</li>
                    <li>Cmd to the host's</li>
                </ul>
                <button className='w-fit py-2.5 px-4 border rounded-full mt-5 active:scale-95 duration-200 hover:bg-white hover:text-slate-900 font-medium hover:shadow-md hover:shadow-white/50'>Brand Development</button>
            </div>
            <div className='border p-16 flex flex-col justify-center'>
                <h3 className='text-3xl font-medium mb-3'>EVENT</h3>
                <ul className='list-disc ml-5 text-lg font-thin'>
                    <li>Create brand videos</li>
                    <li>Event booking at Asdf asd Charity</li>
                    <li>Distribution via <a className='underline underline-offset-2' href="">partners</a></li>
                </ul>
                <button className='w-fit py-2.5 px-8 border rounded-full mt-5 active:scale-95 duration-200 text-white bg-slate-900 border-slate-900 font-medium hover:shadow-md hover:shadow-slate-900/50'>Host An Event</button>
            </div>
            <div className='border p-16'>
                <h3 className='text-2xl font-medium mb-3'>EVENT</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, necessitatibus illo aut ad nisi ullam, ab fuga voluptatum cum tempora debitis eius neque nostrum magni, officiis veniam quae quaerat provident pariatur dolores. Repudiandae et corrupti vel fuga neque. Deserunt explicabo repellat ratione quae quia at dolorum debitis. Corrupti, repellat eos!</p>
            </div>
            <div className='bg-slate-900 text-white p-16'>
                <h3 className='text-2xl font-medium mb-3'>ADBHUT.IO</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, necessitatibus illo aut ad nisi ullam, ab fuga voluptatum cum tempora debitis eius neque nostrum magni, officiis veniam quae quaerat provident pariatur dolores. Repudiandae et corrupti vel fuga neque. Deserunt explicabo repellat ratione quae quia at dolorum debitis. Corrupti, repellat eos!</p>
            </div>
        </div>
    );
};

export default Events;