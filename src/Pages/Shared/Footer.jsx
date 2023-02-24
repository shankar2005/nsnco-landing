import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdCall } from 'react-icons/io';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-gray-100'>
            <div className='w-10/12 max-w-screen-xl mx-auto py-8 flex justify-between'>
                <div>
                    <h2 className='uppercase text-sm font-medium mb-4'>Our Parent Firm</h2>
                    <img className='w-24' src="https://nsnco.in/assets/img/new-logo.png" alt="" />
                    <p className='mt-4 text-sm'>
                        26, 2nd Main Road Perumalnagar, <br />
                        Old Pallavaram, Chennai - 600117 <br />
                        India
                    </p>
                </div>
                <div>
                    <h1 className='uppercase text-sm font-medium mb-4'>Content Production</h1>
                    <ul className='text-sm space-y-2'>
                        <li className='hover:underline'>Artwork</li>
                        <li className='hover:underline'>Chatshow</li>
                        <li className='hover:underline'>Musical</li>
                        <li className='hover:underline'>Singer</li>
                        <li className='hover:underline'>Web 3 Solution</li>
                    </ul>
                </div>
                <div>
                    <h1 className='uppercase text-sm font-medium mb-4'>Contact</h1>
                    <div className='space-y-5'>
                        <div className='flex gap-4 items-center'>
                            <div className='bg-slate-200 p-3 rounded-full flex justify-center items-center'>
                                <IoLocationSharp size={20} />
                            </div>
                            <div>
                                <h4 className='font-medium text-xl'>Location:</h4>
                                <p className='text-sm'>
                                    H-102, Amprapali Platinum. Sect-119, <br />
                                    Noida - 201301
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div className='bg-slate-200 p-3 rounded-full flex justify-center items-center'>
                                <FaEnvelope size={16} />
                            </div>
                            <div>
                                <h4 className='font-medium text-xl'>Email:</h4>
                                <p className='text-sm'>entertain@NsNco.in</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div className='bg-slate-200 p-3 rounded-full flex justify-center items-center'>
                                <IoMdCall size={20} />
                            </div>
                            <div>
                                <h4 className='font-medium text-xl'>Call:</h4>
                                <p className='text-sm'>+91 8800 2072 99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;