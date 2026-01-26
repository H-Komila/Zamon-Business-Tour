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
    
    
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        { id: 0, img: Dubay, title: t("best.title"), text: t("best.text") },
        { id: 1, img: Anta, title: t("best.title1"), text: t("best.text1") },
        { id: 2, img: Istanbul, title: t("best.title2"), text: t("best.text2") },
        { id: 3, img: Sharm, title: t("best.title3"), text: t("best.text3") },
        { id: 4, img: Paris, title: t("best.title4"), text: t("best.text4") },
    ];

    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className='flex justify-center text-center mb-10 mt-10'>
                     <span>
                        <h1 className='text-[22px] md:text-[28px] text-gray-600 font-black mb-3'>
                        {t("best.subtitle")}
                    </h1>
                    <p className='text-[14px]  md:text-[18px] font-semibold w-full max-w-[600px] text-gray-400 mb-10 md:mb-20 leading-relaxed'>
                        {t("best.pages")}
                    </p>
                     </span>
                </div>
                <div className="flex flex-row justify-center items-center gap-4 h-[600px] overflow-hidden">
                  {cards.map((card, index) => (
    <div
        key={card.id}
        onClick={() => setActiveIndex(index)}
        style={{ backgroundImage: `url(${card.img})` }}
        className={`relative bg-cover bg-center bg-no-repeat rounded-[40px] md:rounded-[50px] cursor-pointer transition-all duration-700 ease-in-out shadow-xl
            
           
            ${index > 2 ? 'hidden md:flex' : 'flex'} 
            ${activeIndex === index 
                ? 'flex-[5] h-[500px] md:h-full' 
                : 'flex-[1] md:flex-[0.6] h-[450px] md:h-[90%]'}
        `}
    >
       
        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors rounded-[40px] md:rounded-[50px]">
          
             <div className={`absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white transition-opacity duration-500
                ${activeIndex === index ? 'opacity-100' : 'opacity-0 invisible'}
             `}>
                <div className="bg-gray-700/60 backdrop-blur-md p-2 md:p-3 rounded-2xl inline-block mb-3">
                    <GoScreenNormal className="text-xl md:text-2xl text-white" />
                </div>
                <h1 className="text-xl md:text-3xl font-bold">{card.title}</h1>
                <p className="text-sm md:text-lg opacity-90">{card.text}</p>
             </div>

             {activeIndex !== index && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-700/60 p-2 rounded-xl">
                    <GoScreenNormal className="text-lg text-white" />
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