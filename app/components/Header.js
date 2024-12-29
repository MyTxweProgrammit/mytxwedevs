import Image from "next/image";
import Link from "next/link"
import logo_light from "../../public/logo_light.png";

export default function Blog() {
    return (
        <div className="w-full center max-[450px]:pt-[20px] sticky top-0">
            <div className="border-2 border-slate-100 w-full h-20 shadow-xl center gap-[20%] bg-white
            max-[450px]:w-[220px] max-[450px]:h-16 max-[450px]:rounded-[30px] max-[450px]:gap-[10%]">
                <div className="flex gap-[15%] items-center">
                    <Image src={logo_light} width={35} height={35} alt="MyTxweDEVS's Logo"/>
                    <div className="bg-gradient-to-r from-[#8F8BFF] to-[#1D0994] bg-clip-text">
                        <p className="max-[450px]:hidden font-Jura text-xl font-bold text-transparent">MyTxweDEVS</p>
                    </div>
                </div>
                <div className="flex gap-[15%]">
                    <Link href="/" className="btn-header">Home</Link>
                    <Link href="/blog" className="btn-header">Blog</Link>
                </div>
            </div>
        </div>
    )
}