import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSignIn }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg  max-w-sm">
        <h2 className="text-lg font-bold mb-4">Sign In Required</h2>
        <p className="mb-4">To access this feature you need to be signed in.</p>
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-[rgba(30,75,0,1)] hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            onClick={onSignIn}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
