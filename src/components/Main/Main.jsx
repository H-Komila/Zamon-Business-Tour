import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaUser } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import Dubay from "./images/dubai2.jpg";
import Count from "./images/country.jpg";
import Istanbul from "./images/istanbul3.jpg";
import Sharm from "./images/sharm2.jpg";

const Main = () => {
  const { t } = useTranslation();
  const [videoId, setVideoId] = useState(null);


  const tours = [
    { 
      img: Dubay, 
      title: "main.title", 
      text: "main.text", 
      textLong: "main.text3", 
      people: "main.people", 
      area: "41.290 km2", 
      price: "$1.100.200",
      vId: "7seum-TdSQk" 
    },
    
    { 
      img: Count, 
      title: "main.title1", 
      text: "main.text1", 
      textLong: "main.text4", 
      people: "main.people1", 
      area: "275.400 km2", 
      price: "$946.000",
      vId: "uevyIb65s74" 
    },
    
    { 
      img: Sharm, 
      title: "main.title2", 
      text: "main.text2", 
      textLong: "main.text5", 
      people: "main.people2", 
      area: "551.500 km2", 
      price: "$425.600",
      vId: "jdwsF2PPtEU" 
    },
    
    { 
      img: Istanbul, 
      title: "main.title3", 
      text: "main.text1", 
      textLong: "main.text6", 
      people: "main.people2", 
      area: "551.500 km2", 
      price: "$425.600",
      vId: "RDZ0-sZfzlU" 
    }
  ];

  return (
    <>
      
      {videoId && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4 animate-fadeIn" onClick={() => setVideoId(null)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setVideoId(null)}
              className="absolute top-4 right-4 z-50 bg-white/20 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-white hover:text-black transition-all"
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

      <main className="py-10">
        <div className='container mx-auto px-4'>
          <div className="mb-12 md:mb-20">
            <h1 className='text-[22px] md:text-[28px] text-gray-700 font-black mb-3'>{t("main.subtitle")}</h1>
            <p className='text-[14px] md:text-[18px] font-semibold w-full max-w-[550px] text-gray-400 leading-relaxed'>{t("main.pages")}</p>
          </div>

          <div className='flex flex-col gap-16 md:gap-24'>
            {tours.map((item, index) => (
              <div key={index} className='flex flex-col lg:flex-row gap-8 lg:gap-12 group'>
        
                <div className='w-full lg:w-[450px] overflow-hidden rounded-[2.5rem] shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2'>
                  <img 
                    className='w-full h-[250px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110' 
                    src={item.img} 
                    alt={t(item.title)} 
                  />
                </div>

              
                <div className='flex-1 flex flex-col justify-between'>
                  <div>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6'>
                      <span>
                        <h1 className='text-[24px] text-black font-extrabold mb-1'>{t(item.title)}</h1>
                        <p className='text-[16px] text-gray-400 font-medium'>{t(item.text)}</p>
                      </span>
                      
                     
                      <button
                        onClick={() => setVideoId(item.vId)}
                        className="w-fit px-8 py-3 text-white rounded-full bg-teal-500 font-bold shadow-md hover:bg-teal-600 hover:scale-105 active:scale-95 transition-all text-sm uppercase"
                      >
                        {t("main.button")}
                      </button>
                    </div>
                    <p className='text-[16px] text-gray-400 font-normal leading-relaxed mb-6'>{t(item.textLong)}</p>
                  </div>

                  
                  <div>
                    <hr className='border-gray-100 mb-6' />
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6'>
                      <div className='flex items-center gap-3'>
                        <FaUser className='text-xl text-teal-500' />
                        <span className='text-[15px] text-gray-500 font-medium'>{t(item.people)}</span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <FaGlobe className='text-xl text-teal-500' />
                        <span className='text-[15px] text-gray-500 font-medium'>{item.area}</span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <IoHomeSharp className='text-xl text-teal-500' />
                        <span className='text-[15px] text-gray-500 font-medium'>{item.price}</span>
                      </div>
                    </div>
                    <hr className='border-gray-100 mb-6' />
                    <a href="#" className='group/link inline-flex items-center gap-2 text-[16px] text-blue-500 font-bold hover:text-blue-600 transition-colors'>
                      {t("main.link")} 
                      <GoArrowRight className="transition-transform group-hover/link:translate-x-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;