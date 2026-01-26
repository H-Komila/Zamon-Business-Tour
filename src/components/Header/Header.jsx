import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { FaUserGroup, FaGlobe, FaXmark } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Istanbul from './images/istanbul.jpg';
import Antaliya from './images/antaliya.jpg';
import Dubay from './images/dubay.jpg';
import Sharm from './images/sharm.jpg';
import axios from 'axios';
import { GoSignOut } from "react-icons/go";

const Header = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [tell, setTell] = useState("");

    
    const data = [
        { img: Istanbul, title: "header.title", pop: "44,48 M", area: "275.400 KM2", price: "$946.000" },
        { img: Antaliya, title: "header.title4", pop: "8.66 M", area: "41.290 KM2", price: "$1.100.200" },
        { img: Dubay, title: "header.title5", pop: "67.41 M", area: "551.500 KM2", price: "$425.600" },
        { img: Sharm, title: "header.title6", pop: "69.86 M", area: "513.120 KM2", price: "$165.450" }
    ];

    const SendMessage = (e) => {
        e.preventDefault();
        const token = "8204597010:AAFhpoACYMV4CnD2Oo8E5gr87M5HQzzN_Ds";
        const chat_id = "8114228775";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const text = `Ism: ${name}\nFamilya: ${surname}\nTel: ${tell}`;

        axios.post(url, { chat_id, text })
            .then(() => {
                alert("Ro'yhatdan o'tdingiz");
                setName(""); setSurname(""); setTell("");
                setIsOpen(false);
            })
            .catch(() => console.log("Xatolik yuz berdi"));
    };

    return (
        <header className="w-full h-screen overflow-hidden relative">
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
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-white text-center">
                                
                              
                                <h1 className="text-[14px] md:text-[20px] font-semibold mb-2 drop-shadow-lg">
                                    {t("header.text")}
                                </h1>

                               
                                <p className="text-[30px] md:text-[70px] font-black mb-6 leading-tight uppercase tracking-wide drop-shadow-2xl">
                                    {t(item.title)} 
                                </p>

                                
                                <button 
                                    onClick={() => setIsOpen(true)} 
                                    className="px-10 py-3 rounded-full bg-[#17b1bc] font-bold hover:bg-teal-600 transition-all text-sm uppercase mb-10"
                                > 
                                    {t("header.button")}
                                </button>

                              
                                <div className='w-full'>
                                    <div className=' aholi bg-white/95 backdrop-blur-sm grid grid-cols-2 md:grid-cols-4 items-center rounded-[30px] md:rounded-full p-4 md:p-6 gap-y-6 md:gap-0 shadow-2xl text-black text-left'>
                                        
                                       
                                        <div className='flex items-center gap-3 md:justify-center'>
                                            <span className='w-10 h-10 md:w-14 md:h-14 border border-teal-500 rounded-full flex items-center justify-center shrink-0'>
                                                <FaUserGroup className='text-teal-500 text-lg md:text-xl' />
                                            </span>
                                            <div>
                                                <h1 className='text-[10px] text-gray-400 font-bold uppercase mb-0'>{t("header.title1")}</h1>
                                                <p className='text-sm md:text-lg font-black mb-0 leading-none'>{item.pop}</p>
                                            </div>
                                        </div>

                                     
                                        <div className='flex items-center gap-3 md:justify-center md:border-l md:border-gray-200'>
                                            <span className='w-10 h-10 md:w-14 md:h-14 border border-teal-500 rounded-full flex items-center justify-center shrink-0'>
                                                <FaGlobe className='text-teal-500 text-lg md:text-xl' />
                                            </span>
                                            <div>
                                                <h1 className='text-[10px] text-gray-400 font-bold uppercase mb-0'>{t("header.title2")}</h1>
                                                <p className='text-sm md:text-lg font-black mb-0 leading-none'>{item.area}</p>
                                            </div>
                                        </div>

                                     
                                        <div className='flex items-center gap-3 md:justify-center md:border-l md:border-gray-200'>
                                            <span className='w-10 h-10 md:w-14 md:h-14 border border-teal-500 rounded-full flex items-center justify-center shrink-0'>
                                                <AiFillHome className='text-teal-500 text-lg md:text-xl' />
                                            </span>
                                            <div>
                                                <h1 className='text-[10px] text-gray-400 font-bold uppercase mb-0'>{t("header.title3")}</h1>
                                                <p className='text-sm md:text-lg font-black mb-0 leading-none'>{item.price}</p>
                                            </div>
                                        </div>

                                        
                                        <div className="col-span-2 md:col-span-1 md:pl-4">
                                            <button 
                                                onClick={() => setIsOpen(true)} 
                                                className='w-full py-3 md:py-4 rounded-full text-xs md:text-sm font-bold bg-[#17b1bc] text-white hover:bg-teal-600 transition-all'
                                            >
                                                {t("header.btn")}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {isOpen && (
                <div className=" fixed inset-0 z-1000 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-md rounded-3xl p-8 relative shadow-2xl">
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black">
                            <FaXmark size={24} />
                        </button>
                        <h2 className="text-2xl font-black text-center mb-6">{t("komila.title")}</h2>
                        <form onSubmit={SendMessage} className="flex flex-col gap-4 royhat">
                            <input type="text" placeholder={t("komila.text")} className=     "w-full px-5 py-3 rounded-xl border" value={name} onChange={(e) => setName(e.target.value)} required />
                            <input type="text" placeholder={t("komila.text1")} className=    "w-full px-5 py-3 rounded-xl border" value={surname} onChange={(e) => setSurname(e.target.value)} required />
                            <input type="number" placeholder= {t("komila.text2")} className= "w-full px-5 py-3 rounded-xl border" value={tell} onChange={(e) => setTell(e.target.value)} required />
                            <button type="submit" className="w-full py-4 bg-[#17b1bc] text-white rounded-xl font-bold flex items-center justify-center gap-2 uppercase">
                                {t("komila.btn")} <GoSignOut className='rotate-180' />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;