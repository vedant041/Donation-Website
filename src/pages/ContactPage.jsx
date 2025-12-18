import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactCard from "../components/ContactCard";
import GalleryStrip from "../components/GalleryStrip";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Hero title="Contact Us" breadcrumb={["Home", "Contact"]} />
      <ContactCard />
      <GalleryStrip />
      <Footer />
    </>
  );
}
