import Image from "next/image";
import Link from "next/link"
import logo_light from "../../public/logo_light.png";
import admin from "../../public/handsome.jpg";
import EditPage from "./Editpage";

export default function Blog() {
    return (
        <>
            <div className="w-full center max-[450px]:pt-[20px] sticky top-0 z-50">
                <div className="w-full h-20 shadow-xl center gap-[20%] bg-glass dark:bg-black
                max-[450px]:w-[80%] max-[450px]:h-16 max-[450px]:rounded-[30px] max-[450px]:gap-[5%] backdrop-blur-xl">
                    <Link href="/" className="flex gap-[15%] items-center cursor-pointer">
                        <Image src={logo_light} width={35} height={35} alt="MyTxweDEVS's Logo" className="animate-spin-slow"/>
                        <div className="bg-gradient-to-r from-[#8F8BFF] to-[#1D0994] bg-clip-text">
                            <p className="max-[450px]:hidden font-Jura text-xl font-bold text-transparent">MyTxweDEVS</p>
                        </div>
                    </Link>
                    <div className="flex items-center gap-[15%] max-[450px]:gap-[7%] min-[841px]:gap-[15px]">
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
                                <li><Link href="/">Sign In</Link></li>
                                <li><Link href="/">Sign Up</Link></li>
                            </ul>
                        </div>
                        <Link href="https://github.com/MyTxweProgrammit/mytxwedevs" className="max-[840px]:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 24 24" className="group-hover:text-white z-50 duration-700">
                                <path fill="currentColor" d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <EditPage />
        </>
    )
}