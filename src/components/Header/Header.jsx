import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { FaUserGroup, FaGlobe } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Rasmlar
import Istanbul from './images/istanbul.jpg';
import Antaliya from './images/antaliya.jpg';
import Dubay from './images/dubay.jpg';
import Sharm from './images/sharm.jpg';

const Header = () => {
    const { t } = useTranslation();

    const data = [
        { img: Istanbul, title: "header.title", pop: "44,48 M", area: "275.400 KM2", price: "$946.000" },
        { img: Antaliya, title: "header.title4", pop: "8.66 M", area: "41.290 KM2", price: "$1.100.200" },
        { img: Dubay, title: "header.title5", pop: "67.41 M", area: "551.500 KM2", price: "$425.600" },
        { img: Sharm, title: "header.title6", pop: "69.86 M", area: "513.120 KM2", price: "$165.450" }
    ];

    return (
        <header className="w-full h-screen overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect={'fade'}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                className="h-full w-full"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            style={{ backgroundImage: `url(${item.img})` }}
                            className="bg-cover bg-center h-screen w-full flex items-center justify-center relative px-4"
                        >
                            <div className="absolute inset-0 bg-black/40"></div>

                      
                            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
                                
                                
                                <div className="text-center mb-6 md:mb-10 animate-[fadeInDown_1s_ease-in-out]">
                                    <h1 className="text-[14px] md:text-[20px] text-white font-semibold mb-2">
                                        Take a Glimpse Into The Beautiful City Of:
                                    </h1>
                                    <p className="text-[30px] md:text-[70px] text-white font-black mb-6 leading-tight uppercase tracking-wide">
                                        {t(item.title)}
                                    </p>
                                    <button className="px-10 py-3 rounded-full bg-[#17b1bc] text-white font-bold hover:bg-teal-600 transition-all text-sm uppercase"> 
                                        Go There
                                    </button>
                                </div>

                              
                                <div className='w-full'>
                                    <div className='aholi bg-white/95 backdrop-blur-sm grid grid-cols-2 md:grid-cols-4 items-center rounded-[30px] md:rounded-full p-4 md:p-6 gap-y-6 md:gap-0 shadow-2xl'>
                                        
                                        
                                        <div className='flex items-center gap-3 md:justify-center'>
                                            <span className='w-10 h-10 md:w-14 md:h-14 border border-teal-500 rounded-full flex items-center justify-center shrink-0 !p-0'>
                                                <FaUserGroup className='text-teal-500 text-lg md:text-xl' />
                                            </span>
                                            <div>
                                                <h1 className='text-[10px] text-gray-400 font-bold uppercase mb-0'>Population:</h1>
                                                <p className='text-sm md:text-lg text-black font-black mb-0 leading-none'>{item.pop}</p>
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3 md:justify-center md:border-l md:border-gray-200'>
                                            <span className='w-10 h-10 md:w-14 md:h-14 border border-teal-500 rounded-full flex items-center justify-center shrink-0 !p-0'>
                                                <FaGlobe className='text-teal-500 text-lg md:text-xl' />
                                            </span>
                                            <div>
                                                <h1 className='text-[10px] text-gray-400 font-bold uppercase mb-0'>Territory:</h1>
                                                <p className='text-sm md:text-lg text-black font-black mb-0 leading-none'>{item.area}</p>
                                            </div>
                                        </div>

                                        
                                        <div className='flex items-center gap-3 md:justify-center md:border-l md:border-gray-200'>
                                            <span className='w-10 h-10 md:w-14 md:h-14 border border-teal-500 rounded-full flex items-center justify-center shrink-0 !p-0'>
                                                <AiFillHome className='text-teal-500 text-lg md:text-xl' />
                                            </span>
                                            <div>
                                                <h1 className='text-[10px] text-gray-400 font-bold uppercase mb-0'>AVG Price:</h1>
                                                <p className='text-sm md:text-lg text-black font-black mb-0 leading-none'>{item.price}</p>
                                            </div>
                                        </div>

                                        {/* Tugma */}
                                        <div className="col-span-2 md:col-span-1 md:pl-4">
                                            <button className='w-full py-3 md:py-4 rounded-full text-xs md:text-sm font-bold bg-[#17b1bc] text-white hover:bg-white hover:text-black transition-all !mb-0'>
                                                Explore More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </header>
    );
};

export default Header;