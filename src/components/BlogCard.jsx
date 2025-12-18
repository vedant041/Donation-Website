function BlogCard({ image, date, category, title, excerpt, author }) {
  return (
    <article className="bg-white rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.08)] flex flex-col">
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"/>

        <div className="absolute top-[14px] left-[14px] bg-yellow-400 px-[0.9rem] py-[0.45rem] rounded-[14px]">
          <span className="text-[0.8rem] font-bold uppercase">
            {date}
          </span>
        </div>
      </div>

      <div className="px-6 pt-5 pb-7 flex flex-col gap-2.5">
        <div className="flex items-center gap-4 text-[0.8rem] text-gray-500">
          <span className="inline-flex items-center gap-1">
            <span className="w-4 h-4 rounded-full border-2 border-emerald-600 relative">
              <span className="absolute top-[2px] left-[4px] w-[6px] h-[6px] rounded-full bg-emerald-600" />
            </span>
            By {author}
          </span>

          <span className="inline-flex items-center gap-1">
            💬 {category}
          </span>
        </div>

        <h3 className="text-[1.08rem] font-bold leading-snug">
          {title}
        </h3>

        <p className="text-[0.88rem] text-gray-500">
          {excerpt}
        </p>

        <button className="mt-4 self-start px-8 py-2.5 rounded-full border border-gray-300 bg-white text-[0.88rem] font-medium text-gray-900 hover:bg-gray-50 transition">
          Read More
        </button>
      </div>
    </article>
  );
}

export default BlogCard;
