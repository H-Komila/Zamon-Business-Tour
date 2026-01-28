import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Afr from "./images/afr.jpg";
import Air from './images/airplane.jpg';

const Aside = () => {
    const { t } = useTranslation();

    const [videoId, setVideoId] = useState(null);

    return (
        <>
        {videoId && (
  <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
    <div className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden">
      
      
      <button
        onClick={() => setVideoId(null)}
        className="absolute top-3 right-3 z-50 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-gray-200"
      >
        ✕
      </button>

     
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

    </div>
  </div>
)}

        <aside id='tours' className="overflow-hidden py-10 ">
            <div className='container mx-auto px-4'>

                <div className="opacity-100 transition-all duration-700">
                    <h1 className='text-[22px] md:text-[28px] text-gray-600 font-black mb-3'>
                        {t("aside.subtitle")}
                    </h1>
                    <p className='text-[14px] md:text-[18px] font-semibold w-full max-w-[540px] text-gray-400 mb-10 md:mb-20 leading-relaxed'>
                        {t("aside.pages")}
                    </p>
                </div>

                <div className='flex flex-col gap-16'>


                    <div className='flex flex-col md:flex-row gap-6 md:gap-12 items-start group'>

                        <div className="w-full md:w-[450px] overflow-hidden rounded-[2rem] transition-all duration-500 transform group-hover:-translate-y-4 group-hover:shadow-2xl">
                            <img
                                className='w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110'
                                src={Afr}
                                alt="Tour 1"
                            />
                        </div>

                        <div className='flex-1'>
                            <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-6'>
                                <span>
                                    <h1 className='text-[24px] text-gray-700 font-extrabold mb-2'>{t("aside.title")}</h1>
                                    <p className='text-[16px] text-gray-400 font-medium mb-4'>{t("aside.text")}</p>
                                </span>
                                <button
                                    onClick={() => setVideoId("pNF2Kgh_Q9s")}
                                    className="w-fit px-8 py-4 text-white rounded-full bg-teal-500 font-bold shadow-lg shadow-teal-100 hover:bg-teal-600 hover:scale-105 active:scale-95 transition-all text-sm uppercase"
                                >
                                    {t("aside.btn")}
                                </button>
                            </div>
                            <p className='text-[16px] md:text-[18px] text-gray-400 mt-6 leading-8'>{t("aside.text2")}</p>
                        </div>
                    </div>

                    <hr className='border-gray-100' />


                    <div className='flex flex-col md:flex-row gap-6 md:gap-12 items-start group'>

                        <div className="w-full md:w-[450px] overflow-hidden rounded-[2rem] transition-all duration-500 transform group-hover:-translate-y-4 group-hover:shadow-2xl">
                            <img
                                className='w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110'
                                src={Air}
                                alt="Tour 2"
                            />
                        </div>

                        <div className='flex-1'>
                            <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-6'>
                                <span>
                                    <h1 className='text-[24px] text-gray-700 font-extrabold mb-2'>{t("aside.title1")}</h1>
                                    <p className='text-[16px] text-gray-400 font-medium mb-4'>{t("aside.text1")}</p>
                                </span>
                                <button
                                    onClick={() => setVideoId("8BWNYZi80Vw")}
                                    className="w-fit px-8 py-4 text-white rounded-full bg-teal-500 font-bold shadow-lg shadow-teal-100 hover:bg-teal-600 hover:scale-105 active:scale-95 transition-all text-sm uppercase"
                                >
                                    {t("aside.btn")}
                                </button>
                            </div>
                            <p className='text-[16px] md:text-[18px] text-gray-400 mt-6 leading-8'>{t("aside.text3")}</p>
                        </div>
                    </div>
                    

                </div>
            </div>
            <hr className='text-gray-100 mb-10 mt-20'/>
        </aside>
        </>
    );
}

export default Aside;