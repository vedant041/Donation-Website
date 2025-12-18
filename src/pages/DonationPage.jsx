import Hero from "../components/Hero";
import GalleryStrip from "../components/GalleryStrip";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import DonationCard from "../components/DonationCard";
import Navbar from "../components/Navbar";

const commonData = {
    category: "MEDICAL",
    percent: 55,
    title: "We Assure You That Your Donation Will Be Used Wisely.",
    description:"We understand that there are many people organization The seeking support.",
    goal: "15,000",
    raised: "15,000",
};

const images = [
  "/Donation7.jpeg",
  "/Donation5.jpeg",
  "/Donation8.jpeg",
  "/Donation9.jpeg",
  "/Donation2.jpeg",
  "/Donation6.jpeg",
];

export default function DonationPage() {
  return (
    <>
      <Navbar />
      <Hero title="Donation List" breadcrumb={["Home", "Donation"]}/>
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {images.map((img, idx) => (
              <DonationCard key={idx} image={img} {...commonData} />
            ))}
          </div>
          <div className="pt-14">
            <Pagination />
          </div>
        </div>
      </section>

      <GalleryStrip />
      <Footer />
    </>
  );
}
