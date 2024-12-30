import Header from "./components/Header";
import Footer from "./components/Footer";
import AdBanner from "./components/AdBanner";


export default function Home() {
  return (
    <div>
      <Header />
      Hello World
      {/* <AdBanner dataAdFormat="auto" dataFullWidthResponsive={ true } dataAdSlot="7243822971"/> */}
      <Footer/>
    </div>
  );
}
