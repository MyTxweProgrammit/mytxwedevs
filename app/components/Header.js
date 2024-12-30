import Image from "next/image";
import Link from "next/link"
import logo_light from "../../public/logo_light.png";
import admin from "../../public/handsome.jpg";
import { Suspense } from "react";

export default function Blog() {
    return (
        <div className="w-full center max-[450px]:pt-[20px] sticky top-0">
            <div className="border-2 border-slate-100 w-full h-20 shadow-xl center gap-[20%] bg-white
            max-[450px]:w-[80%] max-[450px]:h-16 max-[450px]:rounded-[30px] max-[450px]:gap-[5%]">
                <Link href="/" className="flex gap-[15%] items-center cursor-pointer">
                    <Image src={logo_light} width={35} height={35} alt="MyTxweDEVS's Logo" className="animate-spin-slow"/>
                    <div className="bg-gradient-to-r from-[#8F8BFF] to-[#1D0994] bg-clip-text">
                        <p className="max-[450px]:hidden font-Jura text-xl font-bold text-transparent">MyTxweDEVS</p>
                    </div>
                </Link>
                <div className="flex items-center gap-[15%] max-[450px]:gap-[7%]">
                    <Link href="/" className="btn-header">Home</Link>
                    <Link href="/blog" className="btn-header">Blog</Link>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image alt="Tailwind CSS Navbar component" src={admin} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="border-[1px] border-slate-300 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link href="/" className="justify-between">
                                    Dark Mode
                                    <span className="badge badge-primary">New</span>
                                </Link>
                            </li>
                            <li><Link href="/">Analysis</Link></li>
                            <li><Link href="/">About Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}