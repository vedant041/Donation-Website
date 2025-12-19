import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import GalleryStrip from "../components/GalleryStrip";
import RegisterCard from "../components/RegisterCard";

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <Hero title="Register" breadcrumb={["Home", "Register"]} />
      <div className="min-h-screen bg-white flex items-center justify-center py-12">
        <RegisterCard />
      </div>
      <GalleryStrip />
      <Footer />
    </>
  );
}