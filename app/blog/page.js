import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import admin from "../../public/handsome.jpg";
import NewYear from "../../public/New_Year_2025.jpg";

export default function Blog() {
    return (
        <div>
            <Header />
            <div className="w-full flex justify-center">
                <div className="w-full">
                    <section className="shadow-lg border-[1px] border-slate-300 w-[410px] mx-auto mt-[20px] rounded-2xl max-[450px]:w-[250px] dark:bg-black">
                        <div className="flex items-center gap-[20px] ml-[20px] mt-[20px] max-[450px]:gap-[0px]">
                            <div className="center gap-[20px] max-[450px]:gap-[10px]">
                                <div className="overflow-hidden rounded-full w-[60px] h-[60px] max-[450px]:w-[40px] max-[450px]:h-[40px]">
                                    <Image src={admin} alt="MyTxweDEVS's Admin"/>
                                </div>
                                <div className="max-[450px]:w-[118px]">
                                    <h3 className="font-extrabold font-Jura text-[14px] max-[450px]:text-[10px]">Maytee Sukchaung</h3>
                                    <p className="font-Jura text-[12px] max-[450px]:text-[8px]">Creator/Admin of the website</p>
                                </div>
                            </div>
                            <div className="font-Jura text-[10px] max-[450px]:text-[8px] max-[450px]:hidden">January 1, 2025</div>
                        </div>
                        <div className="px-[25px] mt-[12px] mb-[20px] max-[450px]:mb-[8px]">
                            <h1 className="font-extrabold font-Noto text-[16px] uppercase max-[450px]:text-[12px]">Happy new year 2025!</h1>
                            <p className="font-Noto text-[12px] max-[450px]:text-[10px]">I hope you all who are reading this post blog to be strong and happiness with your life. What you failed in 2024 try it again and do the best until you succeed. What you sad in 2024 please take my word to health yourself. May this new year bring you happiness and prosperity. And I will see you again in next year!</p>
                            <div className="rounded-xl h-[200px] overflow-hidden mt-[12px]">
                                <Image src={NewYear} className="cursor-pointer h-[200px]" alt="New Year 2025"/>
                            </div>
                            <p className="font-Jura text-[10px] text-black block translate-x-[10px] max-[450px]:text-[9px]">Image from Gemini 1.5 Flash</p>
                        </div>
                        <div className="min-[450px]:hidden mb-[10px] h-6 flex items-center justify-around">
                            <div className="font-Jura text-[10px] max-[450px]:text-[9px] text-center">January 1, 2024 </div>
                            <button className="font-Jura text-[10px] max-[450px]:text-[9px] px-[4px] py-[3px] bg-black text-white duration-300 hover:bg-white hover:border-[1px] hover:border-black hover:text-black hover:font-extrabold">
                                Read More              
                            </button>
                        </div>
                    </section> {/* blog 2 */}
                    <section className="shadow-lg border-[1px] border-slate-300 w-[410px] mx-auto mt-[20px] rounded-2xl max-[450px]:w-[250px] dark:bg-black">
                        <div className="flex items-center gap-[20px] ml-[20px] mt-[20px] max-[450px]:gap-[0px]">
                            <div className="center gap-[20px] max-[450px]:gap-[10px]">
                                <div className="overflow-hidden rounded-full w-[60px] h-[60px] max-[450px]:w-[40px] max-[450px]:h-[40px]">
                                    <Image src={admin} alt="MyTxweDEVS's Admin"/>
                                </div>
                                <div className="max-[450px]:w-[118px]">
                                    <h3 className="font-extrabold font-Jura text-[14px] max-[450px]:text-[10px]">Maytee Sukchaung</h3>
                                    <p className="font-Jura text-[12px] max-[450px]:text-[8px]">Creator/Admin of the website</p>
                                </div>
                            </div>
                            <div className="font-Jura text-[10px] max-[450px]:text-[8px] max-[450px]:hidden">December 29, 2024</div>
                        </div>
                        <div className="px-[25px] mt-[12px] mb-[20px] max-[450px]:mb-[8px]">
                            <h1 className="font-extrabold font-Noto text-[16px] uppercase max-[450px]:text-[12px]">Introduce about my myself</h1>
                            <p className="font-Noto text-[12px] max-[450px]:text-[10px]">This website I have created since I was 16 years old. I use my free time to learn and improve about my programing language skill. Finally I can make it and I'm pround with myself very much.</p>
                        </div>
                        <div className="min-[450px]:hidden mb-[10px] h-6 flex items-center justify-around">
                            <div className="font-Jura text-[10px] max-[450px]:text-[9px] text-center">December 30, 2024 </div>
                            <button className="font-Jura text-[10px] max-[450px]:text-[9px] px-[4px] py-[3px] bg-black text-white duration-300 hover:bg-white hover:border-[1px] hover:border-black hover:text-black hover:font-extrabold">
                                Read More              
                            </button>
                        </div>
                    </section> {/* blog 1 */}
                </div>
            </div>
            <Footer />
        </div>
    )
}