export default function Modal({ open, onClose, children }) {
  return (
    <div
      id="action-modal"
      className={`${
        open ? "" : "hidden"
      } fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4`}
    >
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl transform transition-all relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black">
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>
        <div id="modal-content">{children}</div>
      </div>
    </div>
  );
}
