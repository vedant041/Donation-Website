function Pagination() {
  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex gap-3">
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-emerald-700 border border-emerald-700 text-white font-medium">
            1
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 font-medium">
            2
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 font-medium">
            3
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 font-medium">
            4
          </button>
          <button className="w-10 h-9 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 font-medium">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pagination;
