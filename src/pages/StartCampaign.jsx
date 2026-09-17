import { useState } from "react";

export default function StartCampaign({ onSubmitCampaign, onNavigate }) {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [ig, setIg] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitCampaign({ name, type, goal, desc, ig });
  };

  return (
    <div className="max-w-3xl mx-auto bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-12 shadow-sm">
      <div className="mb-6">
        <button
          onClick={() => onNavigate("home")}
          className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-gray-100 flex items-center justify-center transition shadow-sm mb-4"
        >
          <i className="fa-solid fa-arrow-left text-black"></i>
        </button>
        <h2 className="text-3xl font-bold tracking-tight mb-1">Start a Campaign</h2>
        <p className="text-gray-600 text-sm">Fill in the details below to launch your project and start gathering support.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Campaign / Project Type</label>
          <select
            id="new-type"
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:theme-olive-border font-medium"
          >
            <option value="" disabled>Select project sector</option>
            <option value="Eco / Donation">Eco / Donation</option>
            <option value="Tech / Donation">Tech / Donation</option>
            <option value="Social / Donation">Social / Donation</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Project Name</label>
          <input
            type="text"
            id="new-name"
            required
            placeholder="e.g. Clean Energy Grid"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:theme-olive-border font-medium"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Funding Goal ($)</label>
            <input
              type="number"
              id="new-goal"
              required
              placeholder="25000"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:theme-olive-border font-medium"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Instagram Handle</label>
            <input
              type="text"
              id="new-ig"
              placeholder="@yourproject"
              value={ig}
              onChange={(e) => setIg(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:theme-olive-border font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Detailed Information About the Project</label>
          <textarea
            id="new-desc"
            rows="4"
            required
            placeholder="Describe your project, goals, and how funds will be utilized..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:theme-olive-border font-medium"
          ></textarea>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Project Images (Upload or Drag)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center bg-white">
            <i className="fa-regular fa-image text-3xl text-gray-400 mb-2"></i>
            <p className="text-sm text-gray-600 mb-1">Click to upload banner or showcase images</p>
            <input type="file" id="new-images" multiple className="text-xs text-gray-500" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Project Documents / Reports (PDF)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center bg-white">
            <i className="fa-solid fa-file-pdf text-3xl text-gray-400 mb-2"></i>
            <p className="text-sm text-gray-600 mb-1">Upload technical specs or compliance reports</p>
            <input type="file" id="new-docs" multiple className="text-xs text-gray-500" />
          </div>
        </div>

        <button
          type="submit"
          className="w-full theme-olive theme-olive-hover text-white py-4 rounded-xl font-bold shadow-lg transition text-base"
        >
          Launch Campaign
        </button>
      </form>
    </div>
  );
}
