import Image from "next/image";
import Link from "next/link"
import logo_light from "../../public/logo_light.png";

export default function Blog() {
    return (
        <div className="w-full center max-[350px]:pt-[20px]">
            <div className="border-2 border-slate-100 w-full h-20 shadow-xl center gap-[10%]
            max-[350px]:w-[70%] max-[350px]:h-16 max-[350px]:rounded-[30px]">
                <Image src={logo_light} width={35} height={35} alt="MyTxweDEVS's Logo"/>
                <Link href="/" className="btn-header">Home</Link>
                <Link href="/blog" className="btn-header">Blog</Link>
            </div>
        </div>
    )
}