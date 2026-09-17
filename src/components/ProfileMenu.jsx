import { useEffect, useRef, useState } from "react";

export default function ProfileMenu({ onOpenModal, onNavigate }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (
        btnRef.current &&
        !btnRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const toggle = () => setOpen((o) => !o);

  const go = (page) => (e) => {
    e.preventDefault();
    setOpen(false);
    onNavigate(page);
  };

  const openModal = (title) => (e) => {
    e.preventDefault();
    setOpen(false);
    onOpenModal(title);
  };

  return (
    <div className="relative">
      <button
        ref={btnRef}
        id="profile-btn"
        onClick={toggle}
        className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition focus:outline-none"
      >
        <div className="w-9 h-9 rounded-full bg-gray-200 border-2 theme-olive-border flex items-center justify-center text-gray-700 font-semibold overflow-hidden shadow-inner">
          <i className="fa-solid fa-user text-sm theme-olive-text"></i>
        </div>
      </button>

      <div
        ref={dropdownRef}
        id="profile-dropdown"
        className={`${
          open ? "" : "hidden"
        } absolute right-0 mt-2 w-56 bg-white border border-t-0 border-gray-000 rounded-xl shadow-xl py-2 z-50 animate-in fade-in duration-150`}
      >
        <div className="px-4 py-2 border-b border-gray-000">
          <p className="text-xs text-gray-500">Welcome</p>
          <p className="text-sm font-bold truncate">Alex Morgan</p>
        </div>
        <a href="#" onClick={openModal("Account")} className="block px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center space-x-3">
          <i className="fa-regular fa-user-circle w-5 theme-olive-text"></i><span>Account</span>
        </a>
        <a href="#" onClick={openModal("Wallet")} className="block px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center space-x-3">
          <i className="fa-solid fa-wallet w-5 theme-olive-text"></i><span>Wallet</span>
        </a>
        <a href="#" onClick={openModal("Funding History")} className="block px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center space-x-3">
          <i className="fa-solid fa-clock-rotate-left w-5 theme-olive-text"></i><span>Funding history</span>
        </a>
        <a href="#" onClick={openModal("Announcements")} className="block px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center space-x-3">
          <i className="fa-solid fa-bullhorn w-5 theme-olive-text"></i><span>Announcements</span>
        </a>
        <a href="#" onClick={openModal("Followed Campaigns")} className="block px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center space-x-3">
          <i className="fa-regular fa-bookmark w-5 theme-olive-text"></i><span>Followed campaigns</span>
        </a>
        <a href="#" onClick={openModal("Liked Campaigns")} className="block px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center space-x-3">
          <i className="fa-regular fa-heart w-5 theme-olive-text"></i><span>Liked campaigns</span>
        </a>
        <a href="#" onClick={openModal("Settings")} className="block px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center space-x-3">
          <i className="fa-solid fa-gear w-5 theme-olive-text"></i><span>Settings</span>
        </a>
        <a href="#" onClick={go("tc")} className="block px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center space-x-3">
          <i className="fa-solid fa-file-contract w-5 theme-olive-text"></i><span>T&C</span>
        </a>
        <a href="#" onClick={go("help")} className="block px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center space-x-3">
          <i className="fa-regular fa-circle-question w-5 theme-olive-text"></i><span>Help</span>
        </a>
        <a href="#" onClick={openModal("Logout")} className="block px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-3">
          <i className="fa-solid fa-arrow-right-from-bracket w-5"></i><span>Logout</span>
        </a>
      </div>
    </div>
  );
}
