import Link from 'next/link';
import Image from 'next/image';
// import logo_light from '../public/logo_light.png';

export default function NotFound() {
    return (
        <div className="w-full h-[100vh] center relative bg-slate-100">
            {/* <Image src={logo_light} className="w-[280px]" alt="MyTxweDEVS's logo"/> */}
            <div className="border-2 border-slate-200 absolute shadow-xl w-[350px] h-[300px] rounded-xl bg-glass backdrop-blur-sm">
                <h1 className="font-Noto font-bold text-5xl center pt-[30px]">404</h1>
                <p className="text-center font-Noto text-2xl font-bold">Oops!</p>
                <p className="text-center font-Noto font-bold">Page Not Found</p>
                <p className="text-center font-Noto text-sm">Please Get To The Home Page And Put URL Again</p>
                <Link href="/">Back To Home</Link>
            </div>
        </div>
    );
}