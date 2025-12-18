import BlogCard from "./BlogCard";

export default function AboutCard() {
  const services = [
    { title: "Medical & Blood", color: "bg-yellow-100 text-yellow-600", icon: "🩺" },
    { title: "Social Service", color: "bg-green-100 text-green-600", icon: "🤝" },
    { title: "Send a Charitable", color: "bg-sky-100 text-sky-600", icon: "🎁" },
    { title: "Education", color: "bg-orange-100 text-orange-600", icon: "📘" },
  ];

  const blogImages = [
    "public/Donation1.jpeg",
    "public/Donation2.jpeg",
    "public/Donation3.jpeg",
  ];

  const blogData = {
    date: "30 Jun 2023",
    author: "admin",
    category: "Donation",
    title: "We Assure You That Your Donation Will Be Used Wisely.",
    excerpt:
      "We understand that there are many people organization seeking support.",
  };

  return (
    <section className="space-y-24">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200rounded-xl px-6 py-8 text-center shadow-sm hover:shadow-md transition">
            <div
              className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl ${item.color}`}>
              {item.icon}
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-500">
              When deciding which charity to donate to, research matters.
            </p>
            <button className="mt-4 text-emerald-700 text-sm font-medium">
              Read More →
            </button>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-emerald-700 font-medium mb-2">About Us</p>
          <h2 className="text-3xl font-bold leading-snug mb-4">
            We Are Best Treatment For Our Hospital
          </h2>
          <p className="text-gray-600 mb-6">
            Choosing the right charity means finding one that aligns with your
            values and truly makes an impact.
          </p>

          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                💝
              </div>
              <div>
                <h4 className="font-semibold">Donation</h4>
                <p className="text-sm text-gray-500">
                  Help children escape poverty through meaningful support.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                🙋
              </div>
              <div>
                <h4 className="font-semibold">Volunteer</h4>
                <p className="text-sm text-gray-500">
                  Be part of community driven change programs.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-8 px-6 py-3 rounded-full bg-emerald-700 text-white text-sm">
            Read More
          </button>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src="public/Donation2.jpeg"
              alt="children"
              className="rounded-[26px] w-[340px] h-[420px] object-cover" />

            <img
              src="public/Donation1.jpeg"
              alt="child"
              className="absolute -top-10 -left-16 w-[120px] h-[120px] rounded-xl border-4 border-white object-cover"/>

            <img
              src="public/Donation3.jpeg"
              alt="group"
              className="absolute -bottom-12 -left-8 w-[160px] h-[110px] rounded-xl border-4 border-white object-cover" />

            <span className="absolute left-[-18px] top-[45%] w-10 h-10 bg-yellow-400 rounded-full" />
          </div>
        </div>
      </div>
    <div className="grid md:grid-cols-2 gap-14 items-center">
    <div>
        <p className="text-emerald-700 font-medium mb-3">Testimonials</p>

        <h2 className="text-4xl font-bold leading-tight mb-5">
        That's very glad to get People Review
        </h2>

        <p className="text-gray-600 max-w-lg leading-relaxed">
        If you're interested in donating your money, it's important to
        discuss your wishes. These questions are used to provoke thought
        and discussion. They can be used to challenge the other person's
        assumptions.
        </p>
    </div>
    <div className="bg-white rounded-2xl shadow-lg p-8 relative">
        <div className="flex text-yellow-400 mb-4 text-lg">
        ★★★★★
        </div>

        <p className="text-gray-600 leading-relaxed mb-6 italic">
        These questions are used to provoke thought and discussion. They can
        be used to challenge the other person's assumptions, such as
        “Do you really think that's true?”
        </p>

        <div className="flex items-center gap-4">
        <img
            src="public/Donation6.jpeg"
            alt="Robart Jonson"
            className="w-12 h-12 rounded-full object-cover"
        />

        <div>
            <p className="font-semibold text-gray-900">
            Robart Jonson
            </p>
            <p className="text-sm text-gray-500">
            Manager
            </p>
        </div>
        </div>
    </div>
    </div>

      <div>
        <p className="text-center text-emerald-700 font-medium">Blog</p>
        <h2 className="text-center text-3xl font-bold mb-10">
          Our Blog & Feeds
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogImages.map((img, i) => (
            <BlogCard key={i} image={img} {...blogData} />
          ))}
        </div>
      </div>

    </section>
  );
}
