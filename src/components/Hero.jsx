function Hero({ title = "Latest Blog", breadcrumb = ["Home", "Blog"] }) {
  return (
    <section
      className="relative h-[340px] text-white"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,128,96,0.95) 0%, rgba(0,128,96,0.6) 30%, rgba(0,128,96,0.18) 60%, rgba(0,128,96,0) 100%), url('/ved.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex flex-col justify-center gap-3 items-start">

          <div className="inline-flex items-center gap-5 px-6 py-2 rounded-xl bg-emerald-600 text-[0.76rem] font-semibold uppercase tracking-[0.09em]">
            {breadcrumb.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>

          <h1 className="text-3xl md:text-[2.8rem] font-bold uppercase">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
