export default function Footer({ onNavigate }) {
  const go = (page) => (e) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <footer className="bg-stone-100 border-t border-gray-200 mt-16 py-8 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col space-y-3 text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 font-medium text-black">
            <a href="#" onClick={go("explore")} className="hover:theme-olive-text transition">Explore</a>
            <a href="#" onClick={go("latest")} className="hover:theme-olive-text transition">Latest</a>
            <a href="#" onClick={go("trending")} className="hover:theme-olive-text transition">Trending</a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-500">
            <a href="#" onClick={go("help")} className="hover:underline">Help</a>
            <a href="#" onClick={go("tc")} className="hover:underline">T&C</a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full theme-olive flex items-center justify-center text-white text-xs">
              <i className="fa-solid fa-seedling"></i>
            </div>
            <span className="font-bold theme-olive-text">Happi Funding</span>
          </div>
          <p className="text-xs text-gray-500 text-center md:text-right">
            &copy; Happi Funding All rights reserved with EvoRES Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
