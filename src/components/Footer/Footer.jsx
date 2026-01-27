import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Footer = () => {
    const { t } = useTranslation();

    // 1. Ma'lumotlarni saqlash uchun holatlar (State)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        guests: '',
        date: '',
        destination: '',
        visaType: ''
    });

    // Inputlar o'zgarganda holatni yangilash
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const SendMessage = (e) => {
        e.preventDefault(); // Sahifa yangilanib ketishini oldini oladi

        const token = "8204597010:AAFhpoACYMV4CnD2Oo8E5gr87M5HQzzN_Ds";
        const chat_id = "8114228775";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        // Telegramga boradigan xabar matni
        const message = `
🌟 **Yangi Bron Buyurtmasi** 🌟
👤 Ism: ${formData.name}
📞 Tel: ${formData.phone}
👥 Odam soni: ${formData.guests}
📅 Sana: ${formData.date}
📍 Yo'nalish: ${formData.destination}
📄 Viza turi: ${formData.visaType}
        `;

        axios.post(url, {
            chat_id: chat_id,
            text: message,
            parse_mode: 'Markdown'
        })
            .then(() => {
                alert("Sizning so'rovingiz muvaffaqiyatli yuborildi!😇😇😇");

                setFormData({
                    name: '', phone: '', guests: '', date: '', destination: '', visaType: ''
                });
            })
            .catch((error) => {
                console.error("Xatolik:", error);
                alert("Xabar yuborishda xatolik yuz berdi.😩😩😩");
            });
    };

    return (
        <>
            <footer id="reservation-form" className="py-12">
                <div className="container mx-auto px-4">
                    <div className="bg-gray-100 p-6 md:p-12 rounded-[40px] hover:shadow-2xl transition-shadow duration-500">
                        <h1 className="text-center text-2xl md:text-[35px] text-black/70 font-black mb-10">
                            {t("footer.subtitle")}
                        </h1>

                        <form onSubmit={SendMessage} className="max-w-5xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-6 mb-6">
                                <div className="flex-1">
                                    <label className="block text-[18px] text-gray-500 font-bold mb-2 ml-4 italic">{t("footer.title")}</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full h-14 text-[17px] font-semibold border-2 border-gray-200 p-5 rounded-full outline-none focus:border-cyan-400 focus:bg-white transition-all bg-white/50"
                                        type="text" placeholder={t("footer.text")} required
                                    />
                                </div>

                                <div className="flex-1">
                                    <label className="block text-[18px] text-gray-500 font-bold mb-2 ml-4 italic">{t("footer.title2")}</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full h-14 text-[17px] font-semibold border-2 border-gray-200 p-5 rounded-full outline-none focus:border-cyan-400 focus:bg-white transition-all bg-white/50"
                                        type="text" placeholder="+998901234567" required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6 mb-6">
                                <div className="flex-1">
                                    <label className="block text-[18px] text-gray-500 font-bold mb-2 ml-4 italic">{t("footer.title1")}</label>
                                    <select
                                        name="guests" value={formData.guests} onChange={handleChange} required
                                        className="w-full h-14 text-gray-500 text-[17px] font-semibold border-2 border-gray-200 px-5 rounded-full outline-none focus:border-cyan-400 bg-white/50"
                                    >
                                        <option value="">{t("footer.text1")}</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4+">4+</option>
                                    </select>
                                </div>

                                <div className="flex-1">
                                    <label className="block text-[18px] text-gray-500 font-bold mb-2 ml-4 italic">{t("footer.title3")}</label>
                                    <input
                                        name="date" value={formData.date} onChange={handleChange}
                                        className="w-full h-14 text-gray-500 text-[17px] font-semibold border-2 border-gray-200 px-5 rounded-full outline-none focus:border-cyan-400 bg-white/50 transition-all"
                                        type="date" required
                                    />
                                </div>
                            </div>


                            <div className="group">
                                <label className="block text-[18px] text-gray-500 font-bold mb-2 ml-4 group-focus-within:text-cyan-500 transition-colors">
                                    {t("footer.title4")}
                                </label>
                                <select name="destination" value={formData.destination} onChange={handleChange} required
                                    className="w-full h-14 text-gray-500 text-[17px] font-semibold border-2 border-gray-200 px-5 rounded-full outline-none focus:border-cyan-400 bg-white/50 transition-all">
                                    <option value="">{t("footer.text4")}</option>
                                    <option value="Istanbul">{t("article.title5")}</option>
                                    <option value="Europe">{t("article.title6")}</option>
                                    <option value="South Korea">{t("article.title8")}</option>
                                    <option value="Antalya">{t("article.title3")}</option>
                                    <option value="Dubai">{t("article.title2")}</option>
                                    <option value="Sharm El-Sheikh">{t("article.title4")}</option>
                                </select>
                            </div>

                            <div className="group mt-6">
                                <label className="block text-[18px] text-gray-500 font-bold mb-2 ml-4 group-focus-within:text-cyan-500 transition-colors">
                                    {t("footer.title5")}
                                </label>
                                <select name="visaType" value={formData.visaType} onChange={handleChange} required
                                    className="w-full h-14 text-gray-500 text-[17px] font-semibold border-2 border-gray-200 px-5 rounded-full outline-none focus:border-cyan-400 bg-white/50 transition-all">
                                    <option value="">{t("footer.text5")}</option>
                                    <option value="Egypt">{t("article.title")}</option>
                                    <option value="Business">{t("section.title1")}</option>
                                    <option value="Dubai">{t("article.title2")}</option>
                                    <option value="Family">{t("section.title3")}</option>
                                    <option value="Transit">{t("section.title5")}</option>
                                    <option value="Work">{t("section.title4")}</option>
                                    <option value="Student">{t("section.title2")}</option>
                                    <option value="Medical">{t("section.title6")}</option>
                                    <option value="Tourist">{t("section.title")}</option>
                                </select>
                            </div>


                            <button
                                type="submit"
                                className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 rounded-full text-lg transition-all duration-300 active:scale-95 hover:tracking-widest shadow-lg"
                            >
                                {t("footer.btn") || "Make Reservation Now"}
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;