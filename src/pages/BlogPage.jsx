import Hero from "../components/Hero";
import GalleryStrip from "../components/GalleryStrip";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";

const commonData = {
  date: "30 JUN 2023",
  author: "admin",
  category: "Donation",
  title: "We Assure You That Your Donation Will Be Used Wisely.",
  excerpt: "We understand that there are many people organization seeking support.",
};

const images = [
  "/Donation1.jpeg",
  "/Donation2.jpeg",
  "/Donation3.jpeg",
  "/Donation4.jpeg",
  "/Donation5.jpeg",
  "/Donation6.jpeg",
  "/Donation7.jpeg",
  "/Donation8.jpeg",
  "/Donation9.jpeg",
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <Hero title="Latest Blog" breadcrumb={["Home", "Blog"]} />

      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 pt-8">
            {images.map((src, i) => (
              <BlogCard key={i} image={src} {...commonData} />
            ))}
          </div>
         
        </div>
      </section>
      <Pagination />
      <GalleryStrip />
      <Footer />
    </>
  );
}
