function DonationCard({
  image,
  category,
  percent,
  title,
  description,
  goal,
  raised,
}) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl overflow-hidden transition hover:shadow-md">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[230px] object-cover"/>

        <span className="absolute top-3 left-3 bg-emerald-700 text-white text-xs font-semibold px-3 py-1 rounded">
          {category}
        </span>

        <span className="absolute bottom-3 right-3 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full">
          {percent}%
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-2">
          {title}
        </h3>

        <p className="text-xs text-gray-500 mb-4">
          {description}
        </p>

        <div className="w-full h-[4px] bg-emerald-100 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-emerald-700"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-sm mb-4">
          <div>
            <div className="font-semibold text-gray-900">
              ${goal}
            </div>
            <div className="text-xs text-emerald-700">
              Goal
            </div>
          </div>

          <div>
            <div className="font-semibold text-gray-900">
              ${raised}
            </div>
            <div className="text-xs text-emerald-700">
              Raised
            </div>
          </div>

          <button className="w-9 h-9 rounded-md border border-emerald-700 text-emerald-700 flex items-center justify-center hover:bg-emerald-50 transition">
            →
          </button>
        </div>

        <button className="w-full py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-50 transition">
          Donate Now
        </button>
      </div>
    </article>
  );
}

export default DonationCard;
