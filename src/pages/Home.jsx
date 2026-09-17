import CampaignGrid from "../components/CampaignGrid";

// Original: `page === 'home' || page === 'latest'` render identical markup.
export default function Home({ campaigns, onNavigate, onViewDetails }) {
  return (
    <>
      <section className="mb-12 text-center sm:text-left bg-stone-50 rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold theme-olive text-white mb-4 shadow-sm">
            Empowering Dreams
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Fund innovations that change the world.
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Join thousands of backers supporting creative creators, groundbreaking startups, and social impact projects.
          </p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <button
              onClick={() => onNavigate("start-campaign")}
              className="theme-olive theme-olive-hover text-white font-medium px-6 py-3 rounded-xl shadow transition"
            >
              Start a Campaign
            </button>
            <button
              onClick={() => onNavigate("explore")}
              className="bg-white border border-gray-300 font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition"
            >
              Explore All
            </button>
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl theme-olive flex items-center justify-center text-white shadow-xl">
            <i className="fa-solid fa-hands-holding-child text-7xl opacity-90"></i>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Latest Campaigns</h2>
            <p className="text-gray-600 text-sm">Discover and support brand-new projects launched today.</p>
          </div>
        </div>
        <CampaignGrid campaigns={campaigns} onViewDetails={onViewDetails} />
      </section>
    </>
  );
}
