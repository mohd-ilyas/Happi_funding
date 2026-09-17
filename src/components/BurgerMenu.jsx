export default function BurgerMenu({ open, onClose, onNavigate, onOpenModal }) {
  const go = (page) => (e) => {
    e.preventDefault();
    onClose();
    onNavigate(page);
  };

  const logout = (e) => {
    e.preventDefault();
    onClose();
    onOpenModal("Logout");
  };

  return (
    <div
      id="burger-drawer"
      className={`${
        open ? "" : "hidden"
      } fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300`}
    >
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300">
        <div>
          <div className="flex items-center justify-between pb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full theme-olive flex items-center justify-center text-white text-sm">
                <i className="fa-solid fa-seedling"></i>
              </div>
              <span className="font-bold text-lg theme-olive-text">Happi Funding</span>
            </div>
            <button onClick={onClose} className="p-2 text-gray-500 hover:text-black">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>
          <ul className="mt-6 space-y-4 font-medium">
            <li><a href="#" onClick={go("home")} className="block py-2 hover:theme-olive-text transition">Home</a></li>
            <li><a href="#" onClick={go("explore")} className="block py-2 hover:theme-olive-text transition">Explore campaigns</a></li>
            <li><a href="#" onClick={go("trending")} className="block py-2 hover:theme-olive-text transition">Trending campaigns</a></li>
            <li><a href="#" onClick={go("latest")} className="block py-2 hover:theme-olive-text transition">Latest campaigns</a></li>
            <li><a href="#" onClick={go("tc")} className="block py-2 hover:theme-olive-text transition">T&C</a></li>
            <li><a href="#" onClick={go("help")} className="block py-2 hover:theme-olive-text transition">Help</a></li>
            <li><a href="#" onClick={logout} className="block py-2 text-red-600 hover:text-red-700 transition">Logout</a></li>
          </ul>
        </div>
        <div>
          &copy; 2026 Happi Funding Platform
        </div>
      </div>
    </div>
  );
}
