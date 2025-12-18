import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import GalleryStrip from "../components/GalleryStrip";
import ForgotPasswordCard from "../components/ForgotPasswordCard";

export default function ForgotPasswordPage() {
  return (
    <>
      <Navbar />
      <Hero title="Forgot Password" />
      <div className="min-h-screen bg-white flex items-center justify-center py-12">
        <ForgotPasswordCard />
      </div>
      <GalleryStrip />
      <Footer />
    </>
  );
}

