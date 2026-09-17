import { computePercent } from "../utils/percent";
import ProgressBar from "./ProgressBar";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80";

export default function CampaignCard({ campaign, onViewDetails }) {
  const percent = computePercent(campaign.raised, campaign.goal);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div
          className="h-48 w-full bg-gray-100 overflow-hidden relative cursor-pointer"
          onClick={() => onViewDetails(campaign.id)}
        >
          <img
            src={campaign.media[0]}
            alt={campaign.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMG;
            }}
          />
          <span className="absolute top-3 right-3 bg-white bg-opacity-90 px-3 py-1 rounded-full text-xs font-semibold theme-olive-text">
            {campaign.displayCategory}
          </span>
        </div>
        <div className="p-6">
          <p className="text-xs font-medium text-gray-500 mb-1">by {campaign.creator}</p>
          <h3
            className="font-bold text-lg mb-2 line-clamp-1 cursor-pointer hover:theme-olive-text"
            onClick={() => onViewDetails(campaign.id)}
          >
            {campaign.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{campaign.description}</p>

          <ProgressBar percent={percent} thin />

          <div className="flex justify-between items-center text-sm mb-4">
            <div>
              <span className="font-bold">${campaign.raised.toLocaleString()}</span>
              <span className="text-gray-500 text-xs"> raised of ${campaign.goal.toLocaleString()}</span>
            </div>
            <span className="font-semibold theme-olive-text">{percent}%</span>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-xs text-gray-500">
          <i className="fa-regular fa-clock mr-1"></i> {campaign.daysLeft} days left
        </span>
        <button
          onClick={() => onViewDetails(campaign.id)}
          className="theme-olive theme-olive-hover text-white text-sm font-medium px-4 py-2 rounded-xl transition shadow-sm"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
