export default function ReportCard({ report, onAlert }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center theme-olive-text font-bold">
          <i className="fa-solid fa-file-lines"></i>
        </div>
        <div>
          <h4 className="text-sm font-bold">{report.name}</h4>
          <span className="text-xs text-gray-500">{report.size}</span>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onAlert(`Opening ${report.name} in viewer.`)}
          className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
          title="View Report"
        >
          <i className="fa-regular fa-eye text-sm"></i>
        </button>
        <button
          onClick={() => onAlert(`Downloading ${report.name}...`)}
          className="p-2.5 rounded-xl theme-olive text-white transition"
          title="Download Report"
        >
          <i className="fa-solid fa-download text-sm"></i>
        </button>
      </div>
    </div>
  );
}
