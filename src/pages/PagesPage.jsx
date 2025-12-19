import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GalleryStrip from "../components/GalleryStrip";
import Footer from "../components/Footer";
import PagesCard from "../components/PagesCard";

export default function PagesPage() {
  const relatedEvents = [
    {
      img: "public/Donation1.png",
      date: "November 28, 2023",
      title: "How Kids Make Sense of Life Experiences.",
    },
    {
      img: "public/Donation2.png",
      date: "November 26, 2023",
      title: "Why Education Is a Lifelong Gift.",
    },
    {
      img: "public/Donation3.png",
      date: "November 24, 2023",
      title: "Clean Water Can Change Everything.",
    },
    {
      img: "public/Donation4.jpeg",
      date: "November 22, 2023",
      title: "Fighting Hunger with Community Support.",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero title="Event Details" breadcrumb={["Home", "Event"]} />
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <PagesCard relatedEvents={relatedEvents} />
        </div>
    </section>
    <GalleryStrip />
    <Footer />
    </>
  );
}

