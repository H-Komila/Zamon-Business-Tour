import React from 'react';
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import { FaHotel, FaPlaneDeparture, FaCarAlt } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import Usa from "./images/usa1.jpg";
import Eng from "./images/england.jpg";
import Canada from "./images/cand.jpg";
import Eurp from "./images/europe2.jpg";
import Istan from "./images/istanbul.jpg";
import Dubay from "./images/dubay.jpg";
import Anta from "./images/antaliya.jpg";
import Sharm from "./images/sharm.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Article = () => {
  const { t } = useTranslation();

  const countries = [
    { id: 1, img: Usa, title: t("article.title"), text: t("article.text"), price: t("article.text1"), hasPrice: false },
    { id: 6, img: Dubay, title: t("article.title6"), text: t("article.text8"), price: t("article.text1"), exactPrice: "$700", hasPrice: true },
    { id: 2, img: Eng, title: t("article.title2"), text: t("article.text5"), price: t("article.text1"), hasPrice: false },
    { id: 7, img: Anta, title: t("article.title7"), text: t("article.text10"), price: t("article.text1"), exactPrice: "$999", hasPrice: true },
    { id: 3, img: Canada, title: t("article.title3"), text: t("article.text6"), price: t("article.text1"), hasPrice: false },
     { id: 8, img: Sharm, title: t("article.title8"), text: t("article.text9"), price: t("article.text1"), exactPrice: "$800", hasPrice: true },
    { id: 4, img: Eurp, title: t("article.title4"), text: t("article.text6"), price: t("article.text1"), hasPrice: false },
    { id: 5, img: Istan, title: t("article.title5"), text: t("article.text5"), price: t("article.text1"), exactPrice: "$420", hasPrice: true },
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
      { breakpoint: 768, settings: { slidesToShow: 1, dots: false } }
    ]
  };

  return (
    <article id='about' className='article py-10 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-center text-center mb-10 px-4'>
  <span className='flex flex-col items-center'>
    
    <h1 className='text-[18px] md:text-[28px] text-gray-600 font-black mb-3'>
      {t("article.subtitle")}
    </h1>
    <p className='text-[14px] md:text-[18px] font-semibold w-full max-w-[540px] text-gray-400'>
      {t("article.pages")}
    </p>
  </span>
</div>
        <div className="-mx-[15px] md:-mx-[50px]">
          <Slider {...settings}>
            {countries.map((item) => (
              <div key={item.id} className="px-[10px] md:px-[20px]  pb-24 md:pb-36 pt-10 group"> 
                <div className="relative h-80 md:h-68 w-full rounded-2xl">
                  <div 
                    style={{ backgroundImage: `url(${item.img})` }} 
                    className="absolute inset-0 bg-cover bg-center rounded-2xl z-0 group-hover:z-30 transition-all duration-500 shadow-md"
                  >
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                       <p className="text-white font-bold text-lg">{item.title}</p>
                    </div>
                  </div>
                  <ul className='bg-white p-6 md:p-8 w-[92%] md:w-80 h-auto shadow-[0_10px_30px_rgba(0,0,0,0.1)] 
                                 absolute top-20 left-1/2 -translate-x-1/2 
                                 md:left-16 md:translate-x-0 md:top-10 
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
                      <span className='flex items-center gap-2'>
                        <FaCarAlt className='text-gray-500' />
                        <h1 className='text-[14px] text-gray-600'>{t("article.text2")}</h1>
                      </span>
                      <span className='flex items-center gap-2'>
                        <FaPlaneDeparture className='text-gray-500' />
                        <h1 className='text-[14px] text-gray-600'>{t("article.text3")}</h1>
                      </span>
                      <span className='flex items-center gap-2'>
                        <FaHotel className='text-gray-500' />
                        <h1 className='text-[14px] text-gray-600'>{t("article.text4")}</h1>
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
      <hr className='mt-16 text-gray-100' />
    </article>
  );
};

export default Article;