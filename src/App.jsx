import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
import Modal from "./components/Modal";
import ModalContent from "./components/ModalContent";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Trending from "./pages/Trending";
import Latest from "./pages/Latest";
import StartCampaign from "./pages/StartCampaign";
import TermsConditions from "./pages/TermsConditions";
import Help from "./pages/Help";
import CampaignDetails from "./pages/CampaignDetails";
import { initialCampaigns } from "./data/campaigns";

function App() {
  const [page, setPage] = useState("home");
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [modal, setModal] = useState({ open: false, title: "", subtitle: "" });

  // Mirrors original switchPage(): scroll to top + swap main content
  const navigate = (nextPage) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(nextPage);
  };

  const viewCampaignDetail = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSelectedCampaignId(id);
    setPage("campaign-detail");
  };

  const openModal = (title, subtitle = "") => {
    setModal({ open: true, title, subtitle });
  };

  const closeModal = () => {
    setModal((m) => ({ ...m, open: false }));
  };

  const alertBox = (msg) => {
    openModal("Alert", msg);
  };

  // Mirrors handleCampaignSubmit()
  const submitCampaign = ({ name, type, goal, desc, ig }) => {
    const category = type.toLowerCase().includes("eco")
      ? "eco"
      : type.toLowerCase().includes("tech")
      ? "tech"
      : "social";

    const newCampaign = {
      id: campaigns.length + 1,
      title: name,
      category,
      displayCategory: type,
      creator: ig ? ig : "Verified Creator",
      description: desc,
      fullStory: desc,
      media: [
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
      ],
      reports: [{ name: "Project Summary.pdf", size: "1.2 MB" }],
      raised: 0,
      goal: Number(goal),
      daysLeft: 30,
      trending: false,
    };

    setCampaigns((prev) => [newCampaign, ...prev]);
    alertBox(`Campaign "${name}" successfully launched and published to Latest Campaigns!`);
    navigate("home");
  };

  const selectedCampaign = campaigns.find((c) => c.id === selectedCampaignId) || null;

  let pageContent;
  if (page === "home") {
    pageContent = <Home campaigns={campaigns} onNavigate={navigate} onViewDetails={viewCampaignDetail} />;
  } else if (page === "latest") {
    pageContent = <Latest campaigns={campaigns} onNavigate={navigate} onViewDetails={viewCampaignDetail} />;
  } else if (page === "explore") {
    pageContent = <Explore campaigns={campaigns} onViewDetails={viewCampaignDetail} />;
  } else if (page === "trending") {
    pageContent = <Trending campaigns={campaigns} onViewDetails={viewCampaignDetail} />;
  } else if (page === "start-campaign") {
    pageContent = <StartCampaign onSubmitCampaign={submitCampaign} onNavigate={navigate} />;
  } else if (page === "tc") {
    pageContent = <TermsConditions />;
  } else if (page === "help") {
    pageContent = <Help />;
  } else if (page === "campaign-detail") {
    pageContent = (
      <CampaignDetails
        campaign={selectedCampaign}
        onBack={() => navigate("explore")}
        onOpenPledge={(title) => openModal("Pledge", title)}
        onAlert={alertBox}
      />
    );
  }

  return (
    <>
      <Header
        onNavigate={navigate}
        onOpenModal={openModal}
        onToggleBurger={() => setBurgerOpen((o) => !o)}
      />

      <BurgerMenu
        open={burgerOpen}
        onClose={() => setBurgerOpen(false)}
        onNavigate={navigate}
        onOpenModal={openModal}
      />

      <main id="main-content" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {pageContent}
      </main>

      <Footer onNavigate={navigate} />

      <Modal open={modal.open} onClose={closeModal}>
        <ModalContent title={modal.title} subtitle={modal.subtitle} onClose={closeModal} onAlert={alertBox} />
      </Modal>
    </>
  );
}

export default App;
