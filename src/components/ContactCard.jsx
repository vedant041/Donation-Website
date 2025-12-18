export default function ContactCard() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 rounded bg-gray-100 outline-none focus:ring-2 focus:ring-emerald-500"/>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 rounded bg-gray-100 outline-none focus:ring-2 focus:ring-emerald-500"/>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="w-full mt-1 p-2 rounded bg-gray-100 outline-none focus:ring-2 focus:ring-emerald-500"/>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              className="w-full mt-1 p-2 rounded bg-gray-100 h-32 resize-none outline-none focus:ring-2 focus:ring-emerald-500"s/>
          </div>
        </div>

        <button className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition">
          Send Message
        </button>
      </div>

      <div className="bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
        Image
      </div>
    </section>
  );
}
