import Script from "next/script";

export default function Adsense({ pId }) {
    return (
        <Script 
            async
            src={ `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}` }
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    )
}