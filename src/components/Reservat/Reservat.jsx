import React, { useEffect } from 'react';
import Head from "./images/heading.jpg"; // Yo'lni tekshiring (oldingi xatolik bo'yicha)
import { useTranslation } from 'react-i18next';
import { FaPhoneFlip, FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

const Reservat = () => {
    const { t } = useTranslation();

    return (
        <section className="relative">
            <div 
                style={{ backgroundImage: `url(${Head})` }}
                className="bg-cover bg-center h-[500px] md:h-[700px] w-full flex items-center justify-center px-4 relative">
                <div className="absolute inset-0 bg-black/40"></div>

                <div className='container mx-auto z-10'>
                    <div className='text-center animate-fadeIn'>
                        <h1 className='text-lg md:text-[24px] text-white mb-3 md:mb-5 font-semibold tracking-widest uppercase'>
                            {t("wath.text")}
                        </h1>
                        
                        <div className='flex items-center justify-center mb-6 md:mb-10'>
                            <hr className='w-20 md:w-40 border-teal-400 border-2 rounded-full'/>
                        </div>

                        <h1 className='text-white text-4xl md:text-[65px] font-black mb-6 md:mb-10 leading-tight transition-transform hover:scale-105 duration-500'>
                            {t("wath.title")}
                        </h1>

                        <button className='px-6 py-3 md:px-10 md:py-5 text-teal-600 bg-white text-lg md:text-[25px] font-bold rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-lg active:scale-95'>
                            {t("wath.btn")}
                        </button>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-center items-stretch gap-6 relative -top-20 md:-top-32'>
                    
                    <ContactCard 
                        Icon={FaPhoneFlip} 
                        title={t("wath.text1")} 
                        link="+998 99 299 99 96" 
                        href="tel:+998992999996"
                        delay="0"
                    />
                    <ContactCard 
                        Icon={MdMarkEmailUnread} 
                        title={t("wath.text2")} 
                        link="zamonbiznestour@mail.ru" 
                        href="mailto:zamonbiznestour@mail.ru"
                        delay="200"
                    />
                    <ContactCard 
                        Icon={FaLocationDot} 
                        title={t("wath.text3")} 
                        link={t("wath.text4")} 
                        href="#"
                        delay="400"
                    />

                </div>
            </div>
        </section>
    );
}


const ContactCard = ({ Icon, title, link, href, delay }) => (
    <div 
        className='flex-1 bg-white p-8 md:p-10 text-center rounded-[30px] md:rounded-[40px] shadow-2xl hover:-translate-y-3 transition-all duration-500 group'
        style={{ transitionDelay: `${delay}ms` }}
    >
        <div className='bg-teal-50 w-16 h-16 md:w-20 md:h-20 flex justify-center items-center rounded-2xl mx-auto mb-6 group-hover:bg-teal-500 transition-colors duration-300'>
            <Icon className='text-[30px] md:text-[40px] text-teal-500 group-hover:text-white' />
        </div>
        <h1 className='text-xl md:text-2xl text-slate-800 font-bold mb-4'>{title}</h1>
        <a className='text-sm md:text-base text-teal-600 font-bold hover:underline break-words' href={href}>
            {link}
        </a>
    </div>
);

export default Reservat;