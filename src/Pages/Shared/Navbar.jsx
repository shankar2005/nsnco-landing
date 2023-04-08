import { BsLinkedin, BsSpotify } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav>
            <div className='pt-3 flex gap-3 justify-end text-slate-600'>
                <BsLinkedin size={14} />
                <BsSpotify size={14} />
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img className="w-24" src="https://nsnco.in/assets/img/new-logo.png" alt="" />
                    <h1 className='text-3xl font-bold text-slate-600'>CO</h1>
                </div>
                <ul className='flex gap-8'>
                    <li>Our Work</li>
                    <li>Services</li>
                    <li>Artists Connect</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;