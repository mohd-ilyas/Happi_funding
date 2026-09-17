export default function ProgressBar({ percent, thin = true }) {
  return (
    <div className={`w-full bg-gray-100 ${thin ? "h-2" : "h-3"} rounded-full overflow-hidden ${thin ? "mb-3" : "mb-4"}`}>
      <div className="theme-olive h-full rounded-full" style={{ width: `${percent}%` }}></div>
    </div>
  );
}
