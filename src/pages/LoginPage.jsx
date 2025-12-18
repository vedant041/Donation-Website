import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GalleryStrip from "../components/GalleryStrip";
import Footer from "../components/Footer";
import LoginCard from "../components/LoginCard";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <Hero title="Login" />
      <div className="min-h-screen bg-white flex items-center justify-center py-12">
       <LoginCard />
      </div>
      <GalleryStrip />
      <Footer />
    </>
  );
}
