import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GalleryStrip from "../components/GalleryStrip";
import Footer from "../components/Footer";
import AboutCard from "../components/AboutCard";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Hero title="About Us" breadcrumb={["Home", "About"]} />
       <div className="max-w-[1200px] mx-auto px-6 py-20">
        <AboutCard />
       </div>
      <GalleryStrip />
      <Footer />
    </>
  );
}
