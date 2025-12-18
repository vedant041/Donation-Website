import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-300 pt-12 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between pb-6 gap-6 md:gap-0">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🫶</span>
            <span className="text-lg font-semibold">Charitifx</span>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/donation" className="hover:text-white">Donation</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </nav>

          <Link
            to="public/donation"
            className="px-8 py-2 rounded-full bg-emerald-600 text-white font-medium hover:brightness-110"
          >
            Donate
          </Link>
        </div>

        <div className="h-px bg-gray-900 my-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-10">
          <div>
            <h4 className="text-[1rem] font-semibold mb-4">Explore Links</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About Company</Link></li>
              <li><Link to="/donation" className="hover:text-white">Latest Projects</Link></li>
              <li><Link to="/blog" className="hover:text-white">Latest Blog</Link></li>
              <li><Link to="/testimonials" className="hover:text-white">Our Testimonials</Link></li>
              <li><Link to="/about" className="hover:text-white">Our Mission</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[1rem] font-semibold mb-4">Get Support</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/knowledge" className="hover:text-white">Knowledge Hub</Link></li>
              <li><Link to="/stories" className="hover:text-white">Success Stories</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[1rem] font-semibold mb-4">Contact</h4>

            <div className="flex items-center gap-3 text-sm mb-3">
              <span className="w-8 h-8 rounded-md border border-emerald-600 flex items-center justify-center text-xs">✉</span>
              <span>donation@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-sm mb-3">
              <span className="w-8 h-8 rounded-md border border-emerald-600 flex items-center justify-center text-xs">☎</span>
              <span>(+88) 111-222-333</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <span className="w-8 h-8 rounded-md border border-emerald-600 flex items-center justify-center text-xs">📍</span>
              <span>Tropical Cyclone, Volcano</span>
            </div>
          </div>

          <div>
            <h4 className="text-[1rem] font-semibold mb-4">Projects</h4>

            <Link to="/blog" className="flex gap-3 mb-4">
              <img src="public/Donation10.jpeg" className="w-[88px] h-[70px] object-cover rounded-lg" />
              <div>
                <span className="text-yellow-400 text-sm">12 Oct 2023</span>
                <p className="text-sm hover:text-white">
                  18 Best Charity Marketing Champions
                </p>
              </div>
            </Link>

            <Link to="/blog" className="flex gap-3">
              <img src="public/Donation11.jpeg" className="w-[88px] h-[70px] object-cover rounded-lg" />
              <div>
                <span className="text-yellow-400 text-sm">20 Oct 2023</span>
                <p className="text-sm hover:text-white">
                  Charity starts from home
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2023 Charitifx. All rights reserved.</p>

          <div className="flex gap-3 mt-3 md:mt-0">
            <a href="https://facebook.com" target="_blank" className="w-8 h-8 rounded-full border flex items-center justify-center">f</a>
            <a href="https://youtube.com" target="_blank" className="w-8 h-8 rounded-full border flex items-center justify-center">▶</a>
            <a href="https://instagram.com" target="_blank" className="w-8 h-8 rounded-full border flex items-center justify-center">⧉</a>
            <a href="https://linkedin.com" target="_blank" className="w-8 h-8 rounded-full border flex items-center justify-center">in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
