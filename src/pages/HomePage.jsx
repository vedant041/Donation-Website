import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import Footer from "../components/Footer";
import GalleryStrip from "../components/GalleryStrip";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero title="Welcome" breadcrumb={["Home"]} />
      <HomeCard />
      <GalleryStrip />
      <Footer />
    </>
  );
}