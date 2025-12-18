function GalleryStrip() {
  const images = [
    "/Donation10.jpeg",
    "/Donation11.jpeg",
    "/Donation12.jpeg",
    "/Donation13.jpeg",
    "/Donation14.jpeg",
    "/Donation15.jpeg",
  ];

  return (
    <section className="bg-slate-900 py-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 px-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery ${i + 1}`}
            className="w-full h-[150px] object-cover rounded-md"
          />
        ))}
      </div>
    </section>
  );
}

export default GalleryStrip;
