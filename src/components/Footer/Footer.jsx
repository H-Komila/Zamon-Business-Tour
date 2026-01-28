import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Footer = () => {
    const { t } = useTranslation();
    
    const [formData, setFormData] = useState({
        name: '', phone: '', guests: '', date: '', destination: '', visaType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const SendMessage = (e) => {
        e.preventDefault(); 
        const token = "8204597010:AAFhpoACYMV4CnD2Oo8E5gr87M5HQzzN_Ds";
        const chat_id = "8114228775";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const message = `🌟 **Yangi Bron** 🌟\n👤 Ism: ${formData.name}\n📞 Tel: ${formData.phone}\n👥 Odam: ${formData.guests}\n📅 Sana: ${formData.date}\n📍 Yo'nalish: ${formData.destination}\n📄 Viza: ${formData.visaType}`;

        axios.post(url, {
            chat_id: chat_id,
            text: message,
            parse_mode: 'Markdown'
        })
        .then(() => {
            alert("Muvaffaqiyatli yuborildi! 😇");
            setFormData({ name: '', phone: '', guests: '', date: '', destination: '', visaType: '' });
        })
        .catch(() => alert("Xatolik yuz berdi. 😩"));
    };

    return (
        <footer id="reservation-form" className="py-8">
            <div className="container mx-auto px-4">
                <div className="bg-gray-100 p-5 md:p-8 rounded-[30px] shadow-sm max-w-4xl mx-auto">
                    <h1 className="text-center text-xl md:text-2xl text-black/70 font-black mb-6">
                        {t("footer.subtitle")}
                    </h1>

                    <form onSubmit={SendMessage} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[15px] text-gray-500 font-bold mb-1 ml-2 italic">{t("footer.title")}</label>
                                <input
                                    name="name" value={formData.name} onChange={handleChange}
                                    className="w-full h-11 text-[15px] border-2 border-gray-200 px-4 rounded-full outline-none focus:border-cyan-400 bg-white"
                                    type="text" placeholder={t("footer.text")} required
                                />
                            </div>
                            <div>
                                <label className="block text-[15px] text-gray-500 font-bold mb-1 ml-2 italic">{t("footer.title2")}</label>
                                <input
                                    name="phone" value={formData.phone} onChange={handleChange}
                                    className="w-full h-11 text-[15px] border-2 border-gray-200 px-4 rounded-full outline-none focus:border-cyan-400 bg-white"
                                    type="number" placeholder="+998" required
                                />
                            </div>
                        </div>

                       
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[15px] text-gray-500 font-bold mb-1 ml-2 italic">{t("footer.title1")}</label>
                                <select
                                    name="guests" value={formData.guests} onChange={handleChange} required
                                    className="w-full h-11 text-[15px] border-2 border-gray-200 px-4 rounded-full outline-none focus:border-cyan-400 bg-white"
                                >
                                    <option value="">{t("footer.text1")}</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4+">4+</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[15px] text-gray-500 font-bold mb-1 ml-2 italic">{t("footer.title3")}</label>
                                <input
                                    name="date" value={formData.date} onChange={handleChange}
                                    className="w-full h-11 text-[15px] border-2 border-gray-200 px-4 rounded-full outline-none focus:border-cyan-400 bg-white"
                                    type="date" required
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="block text-[15px] text-gray-500 font-bold mb-1 ml-2">{t("footer.title4")}</label>
                            <select name="destination" value={formData.destination} onChange={handleChange} required
                                className="w-full h-11 text-[15px] border-2 border-gray-200 px-4 rounded-full outline-none focus:border-cyan-400 bg-white transition-all">
                                <option value="">{t("footer.text4")}</option>
                                <option value="Istanbul">{t("article.title5")}</option>
                                <option value="Europe">{t("article.title6")}</option>
                                <option value="Dubai">{t("article.title2")}</option>
                                <option value="Antalya">{t("article.title3")}</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <label className="block text-[15px] text-gray-500 font-bold mb-1 ml-2">{t("footer.title5")}</label>
                            <select name="visaType" value={formData.visaType} onChange={handleChange} required
                                className="w-full h-11 text-[15px] border-2 border-gray-200 px-4 rounded-full outline-none focus:border-cyan-400 bg-white transition-all">
                                <option value="">{t("footer.text5")}</option>
                                <option value="Tourist">{t("section.title")}</option>
                                <option value="Business">{t("section.title1")}</option>
                                <option value="Student">{t("section.title2")}</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-full text-md transition-all active:scale-95 shadow-md"
                        >
                            {t("footer.btn") || "Make Reservation"}
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;