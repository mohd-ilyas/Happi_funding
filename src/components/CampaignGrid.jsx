import CampaignCard from "./CampaignCard";

export default function CampaignGrid({ campaigns, onViewDetails }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {campaigns.map((c) => (
        <CampaignCard key={c.id} campaign={c} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
}
