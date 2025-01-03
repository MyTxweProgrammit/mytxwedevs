'use client'
import { useEffect } from "react";

export default function AdBanner({
    dataAdSlot,
    dataAdFormat,
    dataFullWidthResponsive
}) {
    useEffect(() => {
        try {
            ((window.adsbygoogle = window.adsbygoogle || []).push({}))
        } catch(error) {
            console.log(error.message);
        }
    }, []);
    return (
        <ins
            className="adsbygoogle block border-2 border-red-500"
            data-ad-client="ca-pub-5211508376773772"
            data-ad-slot={ dataAdSlot }
            data-ad-format={ dataAdFormat }
            data-full-width-responsive={ dataFullWidthResponsive.toString() } 
        >
        </ins>
    )
}