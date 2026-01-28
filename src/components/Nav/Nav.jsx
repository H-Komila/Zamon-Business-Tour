import React, { useState, useEffect } from 'react';
import Logo from './images/logozamon.svg';
import { HiBarsArrowDown } from "react-icons/hi2";
import { HiBarsArrowUp } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";



const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("darkMode") === "true"
    );

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("darkMode");
            document.body.classList.remove("lightMode");
        } else {
            document.body.classList.add("lightMode");
            document.body.classList.remove("darkMode");
        }

        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);


    return (
        <nav className={`nav py-0  fixed top-0 right-0 left-0 z-[100] transition-all duration-300 nav-dynamic`}>            <div className='container mx-auto px-4'>
            <div className='flex items-center justify-between'>


                <a href="#" className="z-50">
                    <img className='w-35 md:w-40' src={Logo} alt="Zamon Business Tour" />
                </a>


                <ul className='hidden md:flex items-center gap-10 '>
                    <li><a href="#home" onClick={() => setIsOpen(false)} className='text-white text-[16px] font-semibold  hover:text-blue-400  transition transform duration-300 hover:scale-200'>{t("nav.home")}</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)} className='text-white text-[16px] font-semibold  hover:text-blue-400  transition transform duration-300 hover:scale-200'>{t("nav.about")}</a></li>
                    <li><a href="#tours" onClick={() => setIsOpen(false)} className='text-white text-[16px] font-semibold  hover:text-blue-400  transition transform duration-300 hover:scale-200'>{t("nav.tours")}</a></li>
                    <li><a href="#contacts" onClick={() => setIsOpen(false)} className='text-white text-[16px] font-semibold  hover:text-blue-400  transition transform duration-300 hover:scale-200'>{t("nav.contacts")}</a></li>

                </ul>

                <div className='hidden md:flex items-center gap-5'>
                    <select value={i18n.language} onChange={handleChangeLanguage} className='w-15 h-8  text-[18px] text-white font-bold rounded-[5px] bg-transparent outline-none'>
                        <option className='text-black' value="en">En</option>
                        <option className='text-black' value="uz">Uz</option>
                        <option className='text-black' value="ru">Ru</option>
                    </select>
                    <a href="#"><FaTelegram className='text-2xl text-white  hover:scale-110 transition' /></a>
                    <a href="#"><FaInstagram className='text-2xl text-white hover:scale-110 transition' /></a>
                        <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-white rounded-full">
            {darkMode ? <MdDarkMode className="text-black" /> : <MdLightMode className="text-yellow-500" />}
         </button>
                </div>


                <div className='md:hidden z-50' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <HiBarsArrowUp className="text-white text-3xl cursor-pointer" />
                    ) : (
                        <HiBarsArrowDown className="text-white text-3xl cursor-pointer" />
                    )}
                </div>
            </div>


            <div className={`fixed top-0 left-0 w-full h-120 transform ${isOpen ? "translate-x-0" : "translate-x-full"} 
    transition-transform duration-500 ease-in-out z-40 md:hidden flex flex-col items-center justify-center gap-8 
    mobile-dynamic rounded-[50px]`}
>
                <ul className='flex flex-col items-center gap-6'>
                    <li><a href="#home" onClick={() => setIsOpen(false)} className='text-white text-[16px] font-semibold  hover:text-gray-900  transition transform duration-300 hover:scale-200'>{t("nav.home")}</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)} className='text-white text-[16px] font-semibold  hover:text-gray-900  transition transform duration-300 hover:scale-200'>{t("nav.about")}</a></li>
                    <li><a href="#tours" onClick={() => setIsOpen(false)} className='text-white text-[16px] font-semibold  hover:text-gray-900  transition transform duration-300 hover:scale-200'>{t("nav.tours")}</a></li>
                    <li><a href="#contacts" onClick={() => setIsOpen(false)} className='text-white text-[16px] font-semibold  hover:text-gray-900  transition transform duration-300 hover:scale-200'>{t("nav.contacts")}</a></li>
                </ul>

                <div className='flex flex-col items-center gap-6'>
         <select 
            className="bg-white text-black rounded px-2 py-1" 
            value={i18n.language} 
            onChange={handleChangeLanguage}
         >
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
            <option value="en">En</option>
         </select>

                    <div className='flex items-center gap-10'>
                        <FaTelegram className='text-4xl text-white cursor-pointer' />
                        <FaInstagram className='text-4xl text-white cursor-pointer' />
                        <button onClick={() => setDarkMode(!darkMode)} className="p-3 bg-white rounded-full">
            {darkMode ? <MdDarkMode className="text-black" /> : <MdLightMode className="text-yellow-500" />}
         </button>
                    </div>

                </div>
            </div>
        </div>
        </nav>
    );
};

export default Nav;