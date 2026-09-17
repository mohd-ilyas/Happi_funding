import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";

export default function Header({ onNavigate, onOpenModal, onToggleBurger }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo onClick={() => onNavigate("home")} />

        <div className="flex items-center space-x-3 relative">
          <ProfileMenu onOpenModal={onOpenModal} onNavigate={onNavigate} />

          <button
            onClick={onToggleBurger}
            className="p-2.5 rounded-lg hover:bg-gray-100 transition focus:outline-none"
          >
            <i className="fa-solid fa-bars text-xl theme-olive-text"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
