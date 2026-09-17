export default function Help() {
  return (
    <div className="max-w-3xl mx-auto bg-stone-50 border border-stone-200 rounded-3xl p-8 sm:p-12 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Help & Support Center</h2>
      <p className="text-gray-600 text-sm mb-6">Need assistance? Check our FAQs or contact our support team.</p>
      <div className="space-y-6">
        <div className="bg-white p-5 rounded-2xl border border-gray-200">
          <h4 className="font-bold mb-1">How do I back a campaign?</h4>
          <p className="text-sm text-gray-600">Click the "View Details" button on any campaign card and follow the backing steps.</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-200">
          <h4 className="font-bold mb-1">When are funds collected?</h4>
          <p className="text-sm text-gray-600">Funds are securely captured once you confirm your contribution pledge.</p>
        </div>
      </div>
    </div>
  );
}
