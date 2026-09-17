import { useState } from "react";

// Mirrors the original openModal(title, subtitle) body-building logic exactly.
export default function ModalContent({ title, subtitle, onClose, onAlert }) {
  const [pledgeAmount, setPledgeAmount] = useState(50);

  if (title === "Wallet") {
    return (
      <>
        <h3 className="text-xl font-bold mb-2">My Wallet</h3>
        <p className="text-gray-600 text-sm mb-4">Manage your funding balance and payment methods.</p>
        <div className="bg-stone-50 border border-gray-200 rounded-xl p-4 mb-4">
          <span className="text-xs text-gray-500">Available Balance</span>
          <h4 className="text-2xl font-black theme-olive-text">$1,250.00</h4>
        </div>
        <button
          onClick={() => {
            onClose();
            onAlert("Funds added successfully!");
          }}
          className="w-full theme-olive text-white py-2.5 rounded-xl font-medium"
        >
          Add Funds
        </button>
      </>
    );
  }

  if (title === "Announcements") {
    return (
      <>
        <h3 className="text-xl font-bold mb-2">Announcements</h3>
        <p className="text-gray-600 text-sm mb-4">Stay updated with the latest platform news and updates.</p>
        <div className="space-y-3 mb-4 text-left">
          <div className="p-3 bg-stone-50 border border-gray-200 rounded-xl">
            <span className="text-xs font-bold theme-olive-text">New Feature</span>
            <p className="text-sm font-medium text-black">Direct creator messaging is now live!</p>
          </div>
          <div className="p-3 bg-stone-50 border border-gray-200 rounded-xl">
            <span className="text-xs font-bold theme-olive-text">Platform Update</span>
            <p className="text-sm font-medium text-black">Zero-fee contributions for eco-campaigns this week.</p>
          </div>
        </div>
        <button onClick={onClose} className="w-full theme-olive text-white py-2.5 rounded-xl font-medium">
          Close
        </button>
      </>
    );
  }

  if (title === "Pledge") {
    return (
      <>
        <h3 className="text-xl font-bold mb-2">Back Project</h3>
        <p className="text-gray-600 text-sm mb-4">
          Support <b>"{subtitle}"</b> with your pledge contribution.
        </p>
        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-600 mb-2">Pledge Amount ($)</label>
          <input
            type="number"
            id="pledge-amount"
            value={pledgeAmount}
            onChange={(e) => setPledgeAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:theme-olive-border font-bold"
          />
        </div>
        <button
          onClick={() => {
            onClose();
            onAlert(`Thank you! Pledge successfully processed for ${subtitle}.`);
          }}
          className="w-full theme-olive text-white py-2.5 rounded-xl font-medium"
        >
          Confirm Pledge
        </button>
      </>
    );
  }

  if (title === "Logout") {
    return (
      <>
        <h3 className="text-xl font-bold mb-2">Confirm Logout</h3>
        <p className="text-gray-600 text-sm mb-6">Are you sure you want to log out from Happi Funding?</p>
        <div className="flex space-x-3">
          <button onClick={onClose} className="w-1/2 bg-gray-100 hover:bg-gray-200 py-2.5 rounded-xl font-medium">
            Cancel
          </button>
          <button
            onClick={() => {
              onClose();
              onAlert("Logged out successfully.");
            }}
            className="w-1/2 bg-red-600 text-white py-2.5 rounded-xl font-medium"
          >
            Logout
          </button>
        </div>
      </>
    );
  }

  if (title === "Alert") {
    return (
      <>
        <h3 className="text-lg font-bold mb-2">Notification</h3>
        <p className="text-gray-600 text-sm mb-6">{subtitle}</p>
        <button onClick={onClose} className="w-full theme-olive text-white py-2.5 rounded-xl font-medium">
          OK
        </button>
      </>
    );
  }

  // Generic fallback (Account, Funding History, Followed Campaigns, Liked Campaigns, Settings)
  return (
    <>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-6">
        Here you can view and update your {(title || "").toLowerCase()} preferences seamlessly.
      </p>
      <button onClick={onClose} className="w-full theme-olive text-white py-2.5 rounded-xl font-medium">
        Got it
      </button>
    </>
  );
}
