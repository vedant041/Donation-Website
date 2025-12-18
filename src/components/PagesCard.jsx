export default function PagesCard({ relatedEvents }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2.3fr_1fr] gap-14">
      
      <div>
        <div className="flex items-start justify-between mb-10">
          <div className="flex gap-4">
            {[
              ["74", "Days"],
              ["44", "Hours"],
              ["24", "Mins"],
              ["36", "Secs"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-emerald-700 text-white w-[68px] py-3 rounded-lg text-center">
                <div className="text-lg font-semibold leading-none">
                  {value}
                </div>
                <div className="text-[11px] mt-1">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            {["f", "t", "in", "◎"].map((icon) => (
              <span
                key={icon}
                className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition">
                {icon}
              </span>
            ))}
          </div>
        </div>

        <h1 className="text-[30px] font-bold text-gray-900 leading-[1.35] mb-6">
          Provide food and clean water to children who are malnourished or living
          in areas without access to clean drinking water.
        </h1>

        <div className="space-y-6 text-[15px] text-gray-600 leading-[1.9]">
          <p>
            Millions of children grow up without access to basic needs such as
            food, clean water, and healthcare. These challenges deeply affect
            their growth, health, and future opportunities.
          </p>

          <p>
            Without early support, many children are unable to attend school,
            forcing families into a cycle of poverty that continues for
            generations.
          </p>

          <p>
            Our mission focuses on sustainable solutions - delivering clean
            water, nutritious food, and essential care to communities that need
            it the most.
          </p>

          <p>
            Every contribution is carefully used to ensure maximum impact and
            long-term change for children and families.
          </p>

          <p>
            Together, we can restore hope and create opportunities for a better
            tomorrow.
          </p>
        </div>
      </div>

      <aside className="space-y-10">
        
        <div className="border rounded-xl p-6 bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-5 relative pb-3">
            Related Event
            <span className="absolute left-0 bottom-0 w-12 h-[3px] bg-emerald-600 rounded-full" />
          </h3>

          <div className="space-y-5">
            {relatedEvents.map((event, index) => (
              <div key={index} className="flex gap-4">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-14 h-14 rounded-full object-cover"/>

                <div>
                  <span className="text-xs text-gray-400 block mb-1">
                    {event.date}
                  </span>
                  <p className="text-sm font-medium text-gray-800 leading-snug">
                    {event.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-xl p-6 bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-5 relative pb-3">
            Tags
            <span className="absolute left-0 bottom-0 w-10 h-[3px] bg-emerald-600 rounded-full" />
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Medical",
              "Food",
              "Aid",
              "Election",
              "Campaign",
              "Security",
            ].map((tag) => (
              <span
                key={tag}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  tag === "Medical"
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`} >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
