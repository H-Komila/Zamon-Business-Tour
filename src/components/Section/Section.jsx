import React from 'react';
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import { FaCheck } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { IoMdPricetags } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import Hon from "./images/hongkong.jpg";
import Euro from "./images/europe.jpeg";
import China from "./images/china.jpg";
import Ind from "./images/india.jpg";
import Jap from "./images/japan.jpg";
import Sau from "./images/saudi.jpg";
import Oman from "./images/oman.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Section = () => {
  const { t } = useTranslation();

   const countries = [
      { id: 1, img: Hon, title: t("section.title"), text: t("section.text"),    hasPrice: false },
      { id: 6, img: Euro, title: t("section.title1"), text: t("section.text"),  hasPrice: true },
      { id: 7, img: Ind, title: t("section.title2"), text: t("section.text"),   hasPrice: true },
      { id: 3, img: Jap, title: t("section.title3"), text: t("section.text"),   hasPrice: false },
      { id: 8, img: Sau, title: t("section.title4"), text: t("section.text"),   hasPrice: true },
      { id: 2, img: Oman, title: t("section.title5"), text: t("section.text"),  hasPrice: false },
      { id: 4, img: China, title: t("section.title6"), text: t("section.text"), hasPrice: false },
    ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    swipeToSlide: true, 
    touchThreshold: 20, 
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, dots: true } }
    ]
  };

  return (
    <section className='article py-10 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-center text-center mb-10 px-4'>
          <span className='flex flex-col items-center'>
            <h1 className='text-[18px] md:text-[28px] text-gray-600 font-black mb-3'>
              {t("section.subtitle")}
            </h1>
            <p className='text-[14px] md:text-[18px] font-semibold w-full max-w-[540px] text-gray-400'>
              {t("section.pages")}
            </p>
          </span>
        </div>
        
        <div className="-mx-[15px] md:-mx-[50px]">
          <Slider {...settings}>
            {countries.map((item) => (
              <div key={item.id} className="px-[10px] md:px-[20px]  pb-24 md:pb-60  pt-10 group"> 
                <div className="relative h-80 md:h-68 w-full rounded-2xl">
                  <div 
                    style={{ backgroundImage: `url(${item.img})` }} 
                    className="absolute  inset-0 bg-cover bg-center rounded-2xl z-0 group-hover:z-30 transition-all duration-500 shadow-md"
                  >
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                       <p className="text-white font-bold text-lg">{item.title}</p>
                    </div>
                  </div>
                  
                  <ul className='bg-white p-5 md:p-12 w-[92%] md:w-86 h-auto shadow-[0_10px_30px_rgba(0,0,0,0.1)] 
                                 absolute top-12 left-1/2 -translate-x-1/2 
                                 md:left-5 md:translate-x-0 md:top-20 
                                 rounded-3xl z-10 transition-all duration-300'>
                    
                    <span className='flex items-center justify-between mb-3'>
                      <h1 className='text-black text-xl md:text-2xl font-bold'>{item.title}</h1>
                      {item.hasPrice && (
                        <h1 className='text-[18px] md:text-[20px] font-black text-green-600'>{item.exactPrice}</h1>
                      )}
                    </span>
                    
                    <li className='flex items-center justify-between mb-4'>
                      <span className='flex items-center gap-2'>
                        <MdGroups className='text-[20px] text-gray-500'/>
                        <h1 className='text-[14px] md:text-[16px] text-gray-600'>{item.text}</h1>
                      </span>
                      <p className='text-[14px] md:text-[16px] text-gray-600'>{item.price}</p>
                    </li>
                    
                    <hr className='mb-4 text-gray-200' />
                    
                    <li className='space-y-2 mb-6'>
                        <h1 className='text-[15px] text-black font-semibold'>{t("section.text1")}</h1>
                      <span className='flex items-center gap-2'>
                        <IoMdPricetags className='text-teal-500' />
                        <h1 className='text-[14px] text-gray-600'>{t("section.text2")}</h1>
                      </span>
                      <span className='flex items-center gap-2'>
                        <GoClockFill className='text-gray-500' />
                        <h1 className='text-[14px] text-gray-600'>{t("section.text3")}</h1>
                      </span>
                      <span className='flex items-center gap-2'>
                        <FaCheck className='text-green-500' />
                        <h1 className='text-[14px] text-gray-600'>{t("section.text4")}</h1>
                      </span>
                    </li>
                    
                    <button className='w-full py-3 rounded-full text-sm font-bold bg-[#17b1bc] text-white active:scale-95 transition-all'>
                      {t("article.btn")}
                    </button>
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <hr className='mt-40 text-gray-100' />
    </section>
  );
}

export default Section;