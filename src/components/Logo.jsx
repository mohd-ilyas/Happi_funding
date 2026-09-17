export default function Logo({ onClick }) {
  return (
    <div
      className="flex items-center space-x-3 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-10 h-10 rounded-full theme-olive flex items-center justify-center text-white font-bold text-xl shadow-md">
        <i className="fa-solid fa-seedling"></i>
      </div>
      <span className="text-xl sm:text-2xl font-black tracking-tight theme-olive-text">
        Happi Funding
      </span>
    </div>
  );
}
