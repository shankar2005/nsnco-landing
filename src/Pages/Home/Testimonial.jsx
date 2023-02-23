import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
    return (
        <div className='mb-20 '>
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
            >
                <SwiperSlide>
                    <div className="w-full">
                        <img className="w-48" src="https://nsnco.in/assets/img/dettol-logo.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full">
                        <img className="w-48" src="https://nsnco.in/assets/img/TheMomsCo-logo.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full">
                        <img className="w-48" src="https://nsnco.in/assets/img/TheMomsCo-logo.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full">
                        <img className="w-48" src="https://nsnco.in/assets/img/amazon.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full">
                        <img className="w-48" src="https://nsnco.in/assets/img/equal-experts.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* <div className="w-full flex flex-col justify-center items-center text-center bg-slate-900 text-white p-8 rounded-lg">
                <img className="w-16 rounded-full" src="data:image/jpeg;base64,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" alt="" />
                <h3 className="text-lg mt-3">I loved their ideas</h3>
                <p className='text-xs italic leading-5'>Holistically generate open-source applications through bleeding-edge sources supply just in time.</p>
            </div> */}


        </div>
    );
};

export default Testimonial;