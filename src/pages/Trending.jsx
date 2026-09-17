import CampaignGrid from "../components/CampaignGrid";

export default function Trending({ campaigns, onViewDetails }) {
  const trendingList = campaigns.filter((c) => c.trending);

  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Trending Campaigns</h2>
        <p className="text-gray-600 text-sm">The most active and fast-growing projects right now.</p>
      </div>
      <CampaignGrid campaigns={trendingList} onViewDetails={onViewDetails} />
    </>
  );
}
