import { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import ReportCard from "../components/ReportCard";
import { computePercent } from "../utils/percent";

export default function CampaignDetails({ campaign, onBack, onOpenPledge, onAlert }) {
  const [learnMore, setLearnMore] = useState(false);

  if (!campaign) return null;

  const percent = computePercent(campaign.raised, campaign.goal);

  const socialAlert = (network) => (e) => {
    e.preventDefault();
    onAlert(`Opening ${network} for ${campaign.creator}`);
  };

  return (
    <>
      <div className="mb-6">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition shadow-sm"
        >
          <i className="fa-solid fa-arrow-left text-black"></i>
        </button>
      </div>

      <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-sm mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ImageSlider media={campaign.media} title={campaign.title} />

          <div className="flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase theme-olive text-white mb-3 inline-block">
                {campaign.displayCategory}
              </span>

              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <p className="text-sm text-gray-500">
                  Created by <span className="font-semibold text-black">{campaign.creator}</span>
                </p>
                <div className="flex space-x-3 text-gray-600">
                  <a href="#" onClick={socialAlert("Facebook page")} className="hover:theme-olive-text transition">
                    <i className="fa-brands fa-facebook-f text-sm"></i>
                  </a>
                  <a href="#" onClick={socialAlert("Instagram profile")} className="hover:theme-olive-text transition">
                    <i className="fa-brands fa-instagram text-sm"></i>
                  </a>
                  <a href="#" onClick={socialAlert("Twitter/X handle")} className="hover:theme-olive-text transition">
                    <i className="fa-brands fa-x-twitter text-sm"></i>
                  </a>
                  <a href="#" onClick={socialAlert("LinkedIn network")} className="hover:theme-olive-text transition">
                    <i className="fa-brands fa-linkedin-in text-sm"></i>
                  </a>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black mb-4">{campaign.title}</h1>

              {!learnMore && (
                <p id="short-desc" className="text-gray-700 text-base mb-4 leading-relaxed">
                  {campaign.description}
                </p>
              )}
              {learnMore && (
                <div id="full-desc" className="text-gray-700 text-base mb-4 leading-relaxed">
                  {campaign.fullStory}
                </div>
              )}
              <button
                onClick={() => setLearnMore((v) => !v)}
                id="learn-more-btn"
                className="text-sm font-bold theme-olive-text hover:underline mb-6 block"
              >
                {learnMore ? "Show less" : "Learn more"}
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden mb-4">
                <div className="theme-olive h-full rounded-full" style={{ width: `${percent}%` }}></div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-black">${campaign.raised.toLocaleString()}</h3>
                  <p className="text-xs text-gray-500">raised of ${campaign.goal.toLocaleString()} goal</p>
                </div>
                <div className="text-right">
                  <h3 className="text-2xl font-black theme-olive-text">{percent}%</h3>
                  <p className="text-xs text-gray-500">{campaign.daysLeft} days left</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
          <i className="fa-solid fa-file-pdf theme-olive-text"></i>
          <span>Project Reports & Documents</span>
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Download or review official audits, compliance sheets, and technical papers provided by the creator.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {campaign.reports.map((report, idx) => (
            <ReportCard key={idx} report={report} onAlert={onAlert} />
          ))}
        </div>
      </div>

      <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm text-center">
        <h3 className="text-2xl font-bold mb-2">Ready to support this innovation?</h3>
        <p className="text-gray-600 text-sm mb-6">Join other backers and help bring {campaign.title} to life.</p>
        <button
          onClick={() => onOpenPledge(campaign.title)}
          className="max-w-md w-full theme-olive theme-olive-hover text-white py-4 rounded-2xl font-bold text-lg shadow-lg transition"
        >
          Back This Project
        </button>
      </div>
    </>
  );
}
