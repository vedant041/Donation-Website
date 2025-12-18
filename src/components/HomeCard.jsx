import { Link } from "react-router-dom";

export default function HomeCard() {
  return (
    <section className="space-y-12">

      <section className="py-4">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <p className="text-emerald-700 font-medium mb-4 tracking-wide">
              Together We Can Make Change
            </p>

            <h1 className="text-[44px] leading-[1.15] font-bold mb-6">
              Helping People Today
              <span className="block text-emerald-700">
                Building Hope for Tomorrow
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10">
              We support verified causes across healthcare, education,
              food, and essential needs - ensuring every contribution
              creates real impact.
            </p>

            <div className="flex gap-5">
              <Link to="/donation" className="px-9 py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition">
                Explore Causes
              </Link>

              <Link  to="/about" className="px-9 py-3 rounded-full border border-gray-300 font-medium hover:bg-gray-50 transition" >
                Learn More
              </Link>
            </div>
          </div>

          <figure className="relative">
            <div className="rounded-[32px] overflow-hidden relative">
              <img
                src="/ved.jpg"
                alt="Children receiving support"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </figure>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { value: "15K+", label: "Donations" },
          { value: "1.2K+", label: "Volunteers" },
          { value: "180+", label: "Projects" },
          { value: "30+", label: "Countries" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-300 rounded-xl shadow-sm p-6 text-center">
            <p className="text-3xl font-bold text-emerald-700">
              {item.value}
            </p>
            <p className="text-sm text-gray-900 mt-1">
              {item.label}
            </p>
          </div>
        ))}  
      </div>

      <div>
        <p className="text-center text-emerald-700 font-medium mb-2">
          What We Do
        </p>
        <h2 className="text-center text-3xl font-bold mb-14">
          Causes We Support
        </h2>

        <div className=" max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              title: "Medical Support",
              desc: "Providing treatment and emergency healthcare.",
              icon: "🩺",
            },
            {
              title: "Education",
              desc: "Helping children build a better future.",
              icon: "📘",
            },
            {
              title: "Food & Hunger",
              desc: "Supplying food to families in need.",
              icon: "🍲",
            },
            {
              title: "Clean Water",
              desc: "Access to safe drinking water.",
              icon: "💧",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <h3 className="mt-5 font-semibold text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-50 rounded-3xl p-12 md:p-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Trusted by Thousands of Donors
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Every contribution goes directly to verified programs that
          create measurable impact on real lives.
        </p>

        <Link to="/login" className="inline-block px-10 py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition">
          Join Our Mission
        </Link>
      </div>

    </section>
  );
}
