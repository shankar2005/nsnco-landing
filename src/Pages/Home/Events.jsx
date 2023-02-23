import React from "react";
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";

const Events = () => {
    const url = "https://calendly.com/mdmarufhossain/30min?month=2023-02";

    return (
        <div className='grid grid-cols-2'>
            <div className='bg-slate-900 text-white p-16 flex flex-col justify-center'>
                <h3 className='text-3xl font-medium mb-3'>ADBHUT.IO</h3>
                <ul className='text-lg'>
                    <li>✅ We Stand for Ad+</li>
                    <li>✅ Our Ad+ contributes to society</li>
                    <li>✅ Cmd to the host's</li>
                </ul>
                <button className='w-fit py-2.5 px-4 border rounded-full mt-5 active:scale-95 duration-200 hover:bg-white hover:text-slate-900 font-medium hover:shadow-md hover:shadow-white/50'>Brand Development</button>
            </div>
            <div className='border p-16 flex flex-col justify-center'>
                <h3 className='text-3xl font-medium mb-3'>EVENT</h3>
                <ul className='text-lg'>
                    <li>✅ Create brand videos</li>
                    <li>✅ Event booking at Asdf asd Charity</li>
                    <li>✅ Distribution via <a className='underline underline-offset-2' href="">partners</a></li>
                </ul>
                <button className='w-fit py-2.5 px-8 border rounded-full mt-5 active:scale-95 duration-200 text-white bg-slate-900 border-slate-900 font-medium hover:shadow-md hover:shadow-slate-900/50'>Host An Event</button>
            </div>
            <div className='h-[328px] border p-16 flex justify-center items-center'>
                <PopupButton
                    url={url}
                    rootElement={document.getElementById("root")}
                    text="Book March"
                    className='w-fit py-2.5 px-10 border rounded-full active:scale-95 duration-200 text-white bg-slate-900 border-slate-900 font-medium hover:shadow-md hover:shadow-slate-900/50'
                />

            </div>
            <div className='bg-slate-900 text-white p-16 flex justify-center items-center'>
                <PopupButton
                    url={url}
                    rootElement={document.getElementById("root")}
                    text="Book April"
                    className='w-fit py-2.5 px-10 border rounded-full active:scale-95 duration-200 hover:bg-white hover:text-slate-900 font-medium hover:shadow-md hover:shadow-white/50'
                />
            </div>
        </div>
    );
};

export default Events;