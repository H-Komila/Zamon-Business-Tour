import React, { useState } from 'react';
import { GoScreenNormal } from "react-icons/go";
import { useTranslation } from 'react-i18next';
import Dubay from "./images/dubai.jpg";
import Anta from "./images/antalya.jpg";
import Istanbul from "./images/istanbul.jpg";
import Sharm from "./images/sharm.jpg";
import Paris from "./images/best.jpg";

const Best = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(2);

    const cards = [
        { id: 0, img: Dubay, title: t("best.title"), text: t("best.text") },
        { id: 1, img: Anta, title: t("best.title1"), text: t("best.text1") },
        { id: 2, img: Istanbul, title: t("best.title2"), text: t("best.text2") },
        { id: 3, img: Sharm, title: t("best.title3"), text: t("best.text3") },
        { id: 4, img: Paris, title: t("best.title4"), text: t("best.text4") },
    ];

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className='flex justify-center text-center mb-6 mt-6'>
                    <span>
                        <h1 className='text-[20px] md:text-[26px] text-gray-600 font-black mb-2'>
                            {t("best.subtitle")}
                        </h1>
                        <p className='text-[13px] md:text-[16px] font-semibold w-full max-w-[550px] text-gray-400 mb-8 md:mb-12 leading-relaxed'>
                            {t("best.pages")}
                        </p>
                    </span>
                </div>

                {/* Asosiy konteyner balandligi h-[600px] dan h-[450px] ga tushirildi */}
                <div className="flex flex-row justify-center items-center gap-3 h-[400px] md:h-[450px] overflow-hidden">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            onClick={() => setActiveIndex(index)}
                            style={{ backgroundImage: `url(${card.img})` }}
                            className={`relative bg-cover bg-center bg-no-repeat rounded-[30px] md:rounded-[40px] cursor-pointer transition-all duration-700 ease-in-out shadow-lg
                                ${index > 2 ? 'hidden md:flex' : 'flex'} 
                                ${activeIndex === index 
                                    ? 'flex-[4] h-full' // Aktiv rasm kengligi flex-[5] dan [4] ga tushirildi
                                    : 'flex-[0.8] md:flex-[0.5] h-[90%]' // Aktiv bo'lmaganlar yanada kichraytirildi
                                }
                            `}
                        >
                            <div className="absolute inset-0 bg-black/25 hover:bg-black/15 transition-colors rounded-[30px] md:rounded-[40px]">
                                <div className={`absolute bottom-5 left-5 md:bottom-8 md:left-8 text-white transition-opacity duration-500
                                    ${activeIndex === index ? 'opacity-100' : 'opacity-0 invisible'}
                                `}>
                                    <div className="bg-gray-800/60 backdrop-blur-sm p-2 rounded-xl inline-block mb-2">
                                        <GoScreenNormal className="text-lg md:text-xl text-white" />
                                    </div>
                                    <h1 className="text-lg md:text-2xl font-bold leading-tight">{card.title}</h1>
                                    <p className="text-xs md:text-sm opacity-80 line-clamp-2">{card.text}</p>
                                </div>

                                {activeIndex !== index && (
                                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-gray-800/60 p-1.5 rounded-lg">
                                        <GoScreenNormal className="text-md text-white" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Best;