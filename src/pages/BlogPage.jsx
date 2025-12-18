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
  "public/Donation1.jpeg",
  "public/Donation2.jpeg",
  "public/Donation3.jpeg",
  "public/Donation4.jpeg",
  "public/Donation5.jpeg",
  "public/Donation6.jpeg",
  "public/Donation7.jpeg",
  "public/Donation8.jpeg",
  "public/Donation9.jpeg",
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
