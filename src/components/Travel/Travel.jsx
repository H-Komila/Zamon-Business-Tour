import React from 'react';
import Cta from './images/cta-bg.jpg';
import { useTranslation } from 'react-i18next';

const Travel = () => {
    const { t } = useTranslation();

    return (
        <>
            <div 
                style={{ backgroundImage: `url(${Cta})` }}
                className="bg-cover bg-center min-h-[300px] w-full flex items-center py-10"
            >
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-8 p-4 md:p-8 rounded-2xl backdrop-blur-sm'>
                        <div className='text-white text-center md:text-left'>
                            <h1 className='text-3xl md:text-5xl font-bold mb-4 md:mb-10'>{t("travel.subtitle")}</h1>
                            <p className='text-xl md:text-2xl opacity-90'>{t("travel.pages")}</p>
                        </div>
                        <a href="#reservation-form" className="inline-block">
                        <button className='mt-4 md:mt-0 bg-teal-200 hover:bg-white text-teal-700 font-bold border-4 border-white hover:border-teal-800 px-8 py-3 rounded-full transition-all whitespace-nowrap'>
                            {t("travel.btn")}
                        </button>
                        </a>
                    
                    </div>
                </div>
            </div>

            <div className='bg-teal-400'>
                <div className='container mx-auto px-4 py-8 md:py-10'>
                    <h1 className='text-xs md:text-sm font-bold text-white text-center leading-relaxed'>
                        {t("travel.text")}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Travel;