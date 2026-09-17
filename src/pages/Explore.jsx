import CampaignGrid from "../components/CampaignGrid";

export default function Explore({ campaigns, onViewDetails }) {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Explore Campaigns</h2>
        <p className="text-gray-600 text-sm">Browse all active campaigns across technology, ecology, and social causes.</p>
      </div>
      <CampaignGrid campaigns={campaigns} onViewDetails={onViewDetails} />
    </>
  );
}
